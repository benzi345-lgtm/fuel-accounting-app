-- ===== Diagnose: can each user save meter readings? =====
-- Run this in Supabase SQL Editor.
-- Checks both the user directory (who exists? what role?) and the RLS
-- policies that control whether each user can SELECT / INSERT / UPDATE
-- daily_records.


-- =========================================================================
-- PART 1: List all users in the app + their role + status
-- =========================================================================
-- Shows: email, display name, role (admin vs employee), created_at
-- If any real user is MISSING here, they can't log in at all.

SELECT
    up.id,
    up.email,
    up.display_name,
    up.role,
    up.created_at,
    CASE
        WHEN au.id IS NULL THEN '❌ no auth account'
        WHEN au.email_confirmed_at IS NULL THEN '⚠ email not confirmed'
        ELSE '✅ active'
    END AS auth_status,
    au.last_sign_in_at
FROM public.user_profiles up
LEFT JOIN auth.users au ON au.id = up.id
ORDER BY up.created_at;


-- =========================================================================
-- PART 2: Show ALL RLS policies on daily_records
-- =========================================================================
-- Each policy defines WHO (roles) can do WHAT (cmd) under which condition.
-- For meter-saving to work, we need both INSERT and UPDATE policies that
-- allow any authenticated user.

SELECT
    policyname,
    cmd                                      AS operation,
    roles,
    permissive,
    COALESCE(qual,   '(no USING clause)')    AS using_clause,
    COALESCE(with_check, '(no WITH CHECK)')  AS check_clause
FROM pg_policies
WHERE schemaname = 'public' AND tablename = 'daily_records'
ORDER BY cmd, policyname;

-- Expected (after fix-rls-reset.sql / fix-rls-warnings.sql):
--   records_admin_delete | DELETE | is_admin()
--   records_insert       | INSERT | (no USING)         | auth.uid() IS NOT NULL
--   records_read         | SELECT | auth.uid() IS NOT NULL
--   records_update       | UPDATE | auth.uid() IS NOT NULL | auth.uid() IS NOT NULL


-- =========================================================================
-- PART 3: Is RLS actually enforced on daily_records?
-- =========================================================================
SELECT
    tablename,
    rowsecurity       AS rls_enabled,
    forcerowsecurity  AS rls_forced
FROM pg_tables
WHERE schemaname = 'public' AND tablename = 'daily_records';

-- Expected: rls_enabled = true


-- =========================================================================
-- PART 4: Who WROTE each record today? (Sanity check)
-- =========================================================================
-- If employee X's records show updated_by = admin's id, something's off.
-- Normal: each record's updated_by = the user who last saved it.

SELECT
    dr.station_id,
    dr.record_date,
    dr.updated_at,
    up.email                      AS last_updater_email,
    up.role                       AS last_updater_role,
    jsonb_object_keys_count(dr.meter_readings) AS meter_slot_count,
    CASE
        WHEN dr.meter_readings IS NULL OR dr.meter_readings = '{}'::jsonb THEN '❌ no meters'
        WHEN NOT EXISTS (
            SELECT 1
            FROM jsonb_each(dr.meter_readings) m
            WHERE (m.value->>'start' IS NOT NULL AND m.value->>'start' <> '')
               OR (m.value->>'end'   IS NOT NULL AND m.value->>'end'   <> '')
        ) THEN '⚠ all meter slots empty'
        ELSE '✅ has meter data'
    END AS meter_status
FROM public.daily_records dr
LEFT JOIN public.user_profiles up ON up.id = dr.updated_by
WHERE dr.record_date >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY dr.record_date DESC, dr.station_id;

-- Note: if this errors with "function jsonb_object_keys_count does not exist",
-- replace that column with:
--   COALESCE(jsonb_array_length(jsonb_path_query_array(dr.meter_readings,'$.*')), 0)
-- or simply drop that column.


-- =========================================================================
-- PART 5: Simulate an INSERT as a specific user (role-based test)
-- =========================================================================
-- This doesn't actually write, just evaluates the policy USING/WITH CHECK
-- clauses against a test JWT. Requires pg_has_role / has_table_privilege.

SELECT
    up.email,
    up.role,
    has_table_privilege(up.id::text, 'public.daily_records', 'SELECT') AS can_select,
    has_table_privilege(up.id::text, 'public.daily_records', 'INSERT') AS can_insert,
    has_table_privilege(up.id::text, 'public.daily_records', 'UPDATE') AS can_update,
    has_table_privilege(up.id::text, 'public.daily_records', 'DELETE') AS can_delete
FROM public.user_profiles up
ORDER BY up.role DESC, up.email;

-- Note: these privileges are GRANT-level (usually all TRUE for authenticated).
-- The actual write-ability is gated by RLS policies (Part 2), which is what
-- matters in practice.


-- =========================================================================
-- PART 6: is_admin() function — does it work?
-- =========================================================================
-- The DELETE policy uses public.is_admin(). If this function is missing or
-- broken, admin users can't delete records.

SELECT
    proname              AS function_name,
    prosrc               AS source_code,
    proconfig            AS config_settings
FROM pg_proc
WHERE proname = 'is_admin' AND pronamespace = 'public'::regnamespace;

-- Expected: 1 row, with "SET search_path TO public, pg_temp" in proconfig
