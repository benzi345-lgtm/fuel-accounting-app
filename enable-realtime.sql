-- ===== Enable Supabase Realtime on app tables =====
-- Run this ONCE in Supabase SQL Editor.
--
-- Purpose: allow clients to subscribe to INSERT/UPDATE/DELETE events so that
--          when one user (e.g. Sudarat) saves a record, all other logged-in
--          users (e.g. bunyakiat) see the change immediately without having
--          to reload the page.
--
-- How it works: Supabase Realtime ships Postgres WAL changes through a
-- publication called `supabase_realtime`. We just add our tables to it.

BEGIN;

-- Safety: make sure the publication exists (Supabase creates it by default,
-- but we re-assert so this script is idempotent).
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
        CREATE PUBLICATION supabase_realtime;
    END IF;
END $$;

-- Add our tables to the publication (idempotent — only adds if missing)
DO $$
DECLARE
    tbl TEXT;
    tables TEXT[] := ARRAY[
        'daily_records',
        'fuel_prices',
        'tax_entries',
        'credit_payments',
        'app_settings',
        'custom_credit_customers',
        'user_profiles'
    ];
BEGIN
    FOREACH tbl IN ARRAY tables LOOP
        IF NOT EXISTS (
            SELECT 1 FROM pg_publication_tables
            WHERE pubname = 'supabase_realtime'
              AND schemaname = 'public'
              AND tablename = tbl
        ) THEN
            EXECUTE format('ALTER PUBLICATION supabase_realtime ADD TABLE public.%I', tbl);
            RAISE NOTICE 'Added table % to supabase_realtime', tbl;
        ELSE
            RAISE NOTICE 'Table % already in supabase_realtime — skipped', tbl;
        END IF;
    END LOOP;
END $$;

-- Set REPLICA IDENTITY FULL so DELETE events include all columns of the
-- deleted row (needed for the client to know WHICH row was deleted).
ALTER TABLE public.daily_records           REPLICA IDENTITY FULL;
ALTER TABLE public.fuel_prices             REPLICA IDENTITY FULL;
ALTER TABLE public.tax_entries             REPLICA IDENTITY FULL;
ALTER TABLE public.credit_payments         REPLICA IDENTITY FULL;
ALTER TABLE public.app_settings            REPLICA IDENTITY FULL;
ALTER TABLE public.custom_credit_customers REPLICA IDENTITY FULL;
ALTER TABLE public.user_profiles           REPLICA IDENTITY FULL;

COMMIT;

-- =========================================================================
-- VERIFY
-- =========================================================================
SELECT schemaname, tablename
FROM pg_publication_tables
WHERE pubname = 'supabase_realtime'
ORDER BY tablename;

-- Expected: 7 rows (daily_records, fuel_prices, tax_entries,
--                   credit_payments, app_settings, custom_credit_customers,
--                   user_profiles)
