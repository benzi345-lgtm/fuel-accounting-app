# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Thai-language fuel-station accounting web app (ระบบบัญชีน้ำมัน) used by ~15 gas stations to record daily meter readings, fuel/product stock, sales, expenses, credit customers, and tax invoices. Single-page vanilla JS app — **no framework, no bundler, no npm dependencies**. Browser loads `index.html` and pulls Supabase + Chart.js from CDN.

## Stack & layout

- **Frontend**: plain HTML/CSS/JS. Everything UI-related lives in three files at the repo root:
  - `index.html` — shell, sidebar nav, login page, loads scripts from CDN.
  - `app.js` — **~9.7 k LOC monolith**. Contains: reference data (`REF`), the `DB` data layer, every page renderer (`render<Page>`), all utility/helper functions, and DOM event wiring. There is no module system; everything is global.
  - `style.css` — all styling.
  - `customers-data.js` — large constant `CREDIT_CUSTOMERS_MASTER` (master list of credit customers).
  - `auth.js` — `Auth` module (Supabase auth, profile loading, role check).
  - `supabase-config.js` — `SUPABASE_URL` + publishable anon key. Safe to commit (RLS enforces access).
- **Backend**: Supabase (Postgres + Auth + Realtime). No custom server.
- **Local dev server**: `server.js` is a tiny Node `http` static-file server on port 3000 (no deps).
- **Hosting**: Vercel as static site (`vercel.json`). Cache-Control headers force `no-store` on HTML/JS/CSS to prevent stale code after deploys.

## Common commands

```bash
# Run locally (just serves static files)
node server.js                    # http://localhost:3000

# Open directly in a browser also works — no build step needed
open index.html
```

There is **no package.json, no test runner, no linter, no build, no CI**. Changes are tested manually in the browser.

## Supabase / SQL setup

Schema and policy changes are managed via SQL files at the repo root, run **manually in the Supabase SQL Editor** (not via migrations CLI):

- `setup.sql` — initial schema, RLS policies, helper `is_admin()` function. Run once on a fresh project.
- `enable-realtime.sql` — adds tables to the `supabase_realtime` publication and sets `REPLICA IDENTITY FULL`. **Required for cross-user live sync.** Idempotent. Must end with the verification SELECT returning 7 rows; if it returns 0, fall back to the Dashboard → Database → Replication UI.
- `fix-rls-reset.sql` — nukes all policies on `daily_records` and recreates the canonical four (read/insert/update for any authenticated user; delete admin-only). Use when RLS gets into an inconsistent state.
- `diagnose-user-permissions.sql` — read-only diagnostic queries (user list, RLS policies, who-edited-what). Used to debug per-user save failures.

Important Supabase rule (per existing SQL): the `enable-realtime.sql` script must **not** be wrapped in BEGIN/COMMIT — Supabase silently rolls those back, leaving the publication empty. Each `ALTER PUBLICATION` must be its own statement.

## Data model

All app data is keyed by `station_id + record_date`. Most domain data is stuffed into JSONB columns on `daily_records`:

- `daily_records` — one row per (station, date). JSONB columns: `meter_readings`, `stock_entries`, `product_sales`, `product_stock_entries`, `tax_invoices`, `expenses`, `credit_customers`, `credit_card_entries`, `bluecard_entries`, `internal_usage`, `finance`, `fuel_prices`. Tracks `created_by` / `updated_by`.
- `user_profiles` — role is `'entry'` or `'admin'`. **First user to log in is auto-promoted to admin** (see `Auth.loadProfile` in `auth.js`).
- `fuel_prices` — global current prices per fuel type. Per-day historical price is also stored in `daily_records.fuel_prices` (locked once recorded).
- `tax_entries`, `credit_payments`, `custom_credit_customers`, `app_settings` — auxiliary key-value-ish tables.

RLS: any authenticated user can read/insert/update everything; only admin can delete daily records and manage user roles.

## The `DB` module — critical to understand before touching sync

`DB` (`app.js:540`) is a singleton holding `_cache` (records keyed `${stationId}_${date}`), `_pricesCache`, `_taxCache`, etc. It mirrors Supabase to localStorage for offline resilience. The conversion helpers `_fromDb` / `_toDb` translate between snake_case DB columns and camelCase in-memory shape.

The sync logic is **intentionally non-trivial** because of multi-user concurrent editing. Three different merge functions exist, each for a different scenario — do not "simplify" them without understanding which path they serve:

| Function | When | Behavior |
|---|---|---|
| `_mergeRecord(local, serverRow, original)` | `_syncRecord` after a single save — has the pre-edit snapshot | True 3-way merge: per-key, if only one side changed since `original`, accept that side; if both changed, local wins. Arrays union by `id`. |
| `_mergeLocalServer(local, server)` | `init()` when both localStorage and Supabase have data — no snapshot | 2-way union. Local wins on object-key/array-id conflict (assumed to be the more-recent edit). **Never drops items from either side.** |
| `_mergeForUpsert(local, serverRow)` | `forceSyncAll` before pushing — guard against blanket overwrites | Per-field: if local value is empty-ish but server has real data, keep server. Arrays union by id. Prevents the "empty meter slots wipe real server meters" bug. |

`forceSyncAll` additionally has a `wouldWipeServerMeters` safety gate that *skips* records entirely when local meters are all empty but server has real data — past incident is referenced in commit `a17cd63`.

`reloadFromSupabase()` (`app.js:6767`) wipes all `fuelAccounting_*` localStorage keys and reloads. Used when the local cache has drifted from server. Does a connectivity pre-check so a failed network doesn't leave the user with no data.

## Realtime

`DB._subscribeRealtime` (`app.js:885`) subscribes to `postgres_changes` for all six app tables on a single channel. Every change re-routes through `_handleRealtimeEvent` → `refreshViewAfterRealtime` (`app.js:2241`), which **debounces** view refreshes (200 ms) and **never re-renders the daily-entry page if the user is currently editing that exact record** — instead it shows a toast prompting them to reopen. Auto-reconnects on `CHANNEL_ERROR`/`TIMED_OUT` after 5 s. The realtime auth token is explicitly set via `supabaseClient.realtime.setAuth(...)` because some Supabase versions otherwise silently get RLS-blocked.

`_markOwnWrite` is used to suppress echo handling for the user's own writes, so saving a record doesn't re-render and disrupt the form.

## Page architecture

Navigation is `navigateTo(page)` (`app.js:2192`), which dispatches to one `render<Page>(el)` function per route. All pages render into the single `#pageContent` div by setting `.innerHTML`. The app routes:

`dashboard`, `compare`, `daily-entry`, `history`, `reference`, `credit-summary`, `tax-reports`, `user-management` (admin-only — sidebar entry hidden for non-admins in `showApp()`).

The daily-entry page has sub-tabs (meter, stock, products, product-stock, expenses, credit-card, bluecard, internal-usage, credit-customers, tax-invoice, summary), each with its own `render<Tab>` function. Switching sub-tabs auto-saves via `_autoSaveBeforeSwitch`.

A global `keydown` handler turns Enter into "move down in same column" inside tables (`app.js:6624`) — a key UX affordance for fast data entry. Be careful not to break it.

## Conventions specific to this codebase

- All user-facing strings and most identifiers (table column labels, station names, fuel types) are **Thai**. Don't auto-translate or rename.
- Numeric inputs use `parseNum(v)` which strips commas — Thai users enter `1,234.50`.
- Dates: `todayStr()` returns ISO `YYYY-MM-DD`; `formatDateThai*` formats to Thai locale (Buddhist year). Thai date inputs use `thaiDateInput()` helper.
- Currency formatting: `fmt(n)` (2 decimals, comma-separated) and `fmtInt(n)` (no decimals).
- IDs of user-added rows (expense rows, credit entries, etc.) come from `uuid()` — **always set an id** on new array items so the merge logic can dedupe correctly.
- All long-form code uses `var` and `function` declarations (not `const`/arrow) — keep that style consistent within `DB` and the merge helpers.
