-- ===== Add audit columns to daily_records =====
-- Run once in Supabase SQL Editor.
-- Idempotent (uses IF NOT EXISTS); safe to re-run.
--
-- Purpose: lets admins mark a (station, date) record as "ตรวจแล้ว" so
-- the new audit page (เมนู "ตรวจสอบงาน") can show check-status without
-- re-reading every field. audited_at becomes the cutoff: if updated_at
-- moves past audited_at, the row is flagged as "modified after audit"
-- in the UI.


ALTER TABLE public.daily_records
    ADD COLUMN IF NOT EXISTS audited_at timestamptz,
    ADD COLUMN IF NOT EXISTS audited_by uuid REFERENCES auth.users(id);


-- Light index for "show me audited records on date X" type queries.
-- Partial (WHERE audited_at IS NOT NULL) keeps the index tiny since most
-- rows will be unaudited at any given moment.
CREATE INDEX IF NOT EXISTS idx_daily_records_audited_at
    ON public.daily_records (audited_at)
    WHERE audited_at IS NOT NULL;


-- NOTE on RLS: audited_at / audited_by are NOT column-level write-protected.
-- The existing records_update policy lets any authenticated user UPDATE the
-- row (including these columns). The app gates the mark-audited action behind
-- Auth.isAdmin() in the UI. If you ever need server-side enforcement, wrap
-- the update in a SECURITY DEFINER function and revoke direct UPDATE on
-- these two columns from the authenticated role.


-- Verify both columns exist:
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
  AND table_name = 'daily_records'
  AND column_name IN ('audited_at', 'audited_by')
ORDER BY column_name;
-- Expected: 2 rows
--   audited_at | timestamp with time zone | YES
--   audited_by | uuid                     | YES
