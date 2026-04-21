-- ===== Enable Supabase Realtime on app tables =====
-- Run this ONCE in Supabase SQL Editor.
--
-- IMPORTANT: Run each statement BLOCK one at a time if the whole script
--            shows "Success. No rows returned" at the final SELECT — that
--            means the publication is empty. The simplest cause is that
--            ALTER PUBLICATION was silently skipped or rolled back.


-- =========================================================================
-- STEP 1: Make sure the publication exists
-- =========================================================================
-- Supabase creates this by default, but re-assert just in case.
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
        CREATE PUBLICATION supabase_realtime;
        RAISE NOTICE 'Created publication supabase_realtime';
    ELSE
        RAISE NOTICE 'Publication supabase_realtime already exists';
    END IF;
END $$;


-- =========================================================================
-- STEP 2: Add each table (idempotent — duplicate adds are silently ignored)
-- =========================================================================
-- If a table is already in the publication, ALTER PUBLICATION ... ADD TABLE
-- will raise an error. We catch it so the script can be re-run safely.

DO $$
BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.daily_records;
    RAISE NOTICE '✅ Added daily_records';
EXCEPTION WHEN duplicate_object THEN
    RAISE NOTICE '⏭  daily_records already in publication';
END $$;

DO $$
BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.fuel_prices;
    RAISE NOTICE '✅ Added fuel_prices';
EXCEPTION WHEN duplicate_object THEN
    RAISE NOTICE '⏭  fuel_prices already in publication';
END $$;

DO $$
BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.tax_entries;
    RAISE NOTICE '✅ Added tax_entries';
EXCEPTION WHEN duplicate_object THEN
    RAISE NOTICE '⏭  tax_entries already in publication';
END $$;

DO $$
BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.credit_payments;
    RAISE NOTICE '✅ Added credit_payments';
EXCEPTION WHEN duplicate_object THEN
    RAISE NOTICE '⏭  credit_payments already in publication';
END $$;

DO $$
BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.app_settings;
    RAISE NOTICE '✅ Added app_settings';
EXCEPTION WHEN duplicate_object THEN
    RAISE NOTICE '⏭  app_settings already in publication';
END $$;

DO $$
BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.custom_credit_customers;
    RAISE NOTICE '✅ Added custom_credit_customers';
EXCEPTION WHEN duplicate_object THEN
    RAISE NOTICE '⏭  custom_credit_customers already in publication';
END $$;

DO $$
BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.user_profiles;
    RAISE NOTICE '✅ Added user_profiles';
EXCEPTION WHEN duplicate_object THEN
    RAISE NOTICE '⏭  user_profiles already in publication';
END $$;


-- =========================================================================
-- STEP 3: REPLICA IDENTITY FULL so DELETE events include full old-row data
-- =========================================================================
ALTER TABLE public.daily_records           REPLICA IDENTITY FULL;
ALTER TABLE public.fuel_prices             REPLICA IDENTITY FULL;
ALTER TABLE public.tax_entries             REPLICA IDENTITY FULL;
ALTER TABLE public.credit_payments         REPLICA IDENTITY FULL;
ALTER TABLE public.app_settings            REPLICA IDENTITY FULL;
ALTER TABLE public.custom_credit_customers REPLICA IDENTITY FULL;
ALTER TABLE public.user_profiles           REPLICA IDENTITY FULL;


-- =========================================================================
-- STEP 4: VERIFY — this MUST return 7 rows
-- =========================================================================
SELECT schemaname, tablename
FROM pg_publication_tables
WHERE pubname = 'supabase_realtime'
ORDER BY tablename;

-- ✅ Expected: 7 rows
--    app_settings, credit_payments, custom_credit_customers,
--    daily_records, fuel_prices, tax_entries, user_profiles
--
-- ❌ If you see 0 rows, tables were NOT added. Use the UI instead:
--    Supabase Dashboard → Database → Replication → supabase_realtime
--    → toggle ON for each table above.
