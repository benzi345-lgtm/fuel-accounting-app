-- ===== Fix: Reset ALL policies on daily_records (clean slate) =====
-- Problem: 10 records fail with RLS 42501 even though auth.uid() is valid
--          (688 other records succeed on UPDATE). This strongly suggests an
--          orphan policy left behind from an earlier migration is blocking
--          INSERT. Fix by dropping every policy on the table, then creating
--          the canonical four.
--
-- Run this in Supabase SQL Editor while logged in as project owner.


-- 1. Drop every existing policy on daily_records (whatever it's named)
DO $$
DECLARE pol RECORD;
BEGIN
    FOR pol IN
        SELECT policyname
        FROM pg_policies
        WHERE schemaname = 'public' AND tablename = 'daily_records'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.daily_records', pol.policyname);
    END LOOP;
END$$;


-- 2. Ensure RLS is enabled
ALTER TABLE public.daily_records ENABLE ROW LEVEL SECURITY;


-- 3. Create the four canonical policies (authenticated users; admin-only delete)
CREATE POLICY "records_read"         ON public.daily_records
    FOR SELECT TO authenticated
    USING (auth.uid() IS NOT NULL);

CREATE POLICY "records_insert"       ON public.daily_records
    FOR INSERT TO authenticated
    WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "records_update"       ON public.daily_records
    FOR UPDATE TO authenticated
    USING (auth.uid() IS NOT NULL)
    WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "records_admin_delete" ON public.daily_records
    FOR DELETE TO authenticated
    USING (public.is_admin());


-- 4. Verify
SELECT policyname, permissive, roles, cmd,
       COALESCE(qual,   '(none)') AS using_clause,
       COALESCE(with_check, '(none)') AS check_clause
FROM pg_policies
WHERE schemaname = 'public' AND tablename = 'daily_records'
ORDER BY cmd, policyname;

-- Expected output: exactly 4 rows
--   records_admin_delete | DELETE | is_admin()
--   records_insert       | INSERT | (none) | auth.uid() IS NOT NULL
--   records_read         | SELECT | auth.uid() IS NOT NULL
--   records_update       | UPDATE | auth.uid() IS NOT NULL | auth.uid() IS NOT NULL
