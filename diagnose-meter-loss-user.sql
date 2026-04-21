-- ===== Forensic: trace meter-data loss for a specific user =====
-- Read-only. Run in Supabase SQL Editor, section by section.
-- To investigate a different user, change the email in every
-- `WHERE up.email = '...'` clause below (search & replace).
--
-- Context: daily_records keeps only CURRENT state (no history table),
-- so we can't "replay" a wipe. What we CAN do:
--   - compare this user's save pattern vs other users'
--   - find records this user created but someone else last touched
--     (candidate "my data got wiped by another save")
--   - find records this user last touched but meters are now empty
--     (candidate "my own save pushed empty meters — overwrite bug")
--   - look for suspicious time gaps between create and last-update.


-- =========================================================================
-- PART 1: Confirm user exists + auth status
-- =========================================================================
-- If no row returns: user doesn't exist in user_profiles (can't log in).
-- If last_sign_in_at is very old: user hasn't actually been saving recently —
-- their "loss" complaint may actually be about data they never saved.

SELECT
    up.id,
    up.email,
    up.display_name,
    up.role,
    up.created_at,
    au.last_sign_in_at,
    CASE
        WHEN au.id IS NULL THEN '❌ no auth account'
        WHEN au.email_confirmed_at IS NULL THEN '⚠ email not confirmed'
        ELSE '✅ active'
    END AS auth_status
FROM public.user_profiles up
LEFT JOIN auth.users au ON au.id = up.id
WHERE up.email = 'moses022545@gmail.com';


-- =========================================================================
-- PART 2: Every record this user has TOUCHED in the last 30 days
-- =========================================================================
-- Shows: station, date, creator, last-updater, current meter slot counts.
-- "involvement" tells us if user was creator, updater, or both.
-- Look for rows where involvement = 'created only' AND meter_status is empty
-- → strong signal the record was wiped by a subsequent save.

WITH tu AS (
    SELECT id FROM public.user_profiles
    WHERE email = 'moses022545@gmail.com'
)
SELECT
    dr.station_id,
    dr.record_date,
    dr.created_at,
    dr.updated_at,
    up_c.email                          AS created_by_email,
    up_u.email                          AS updated_by_email,
    CASE
        WHEN dr.created_by = (SELECT id FROM tu)
         AND dr.updated_by = (SELECT id FROM tu) THEN 'created + last updated'
        WHEN dr.created_by = (SELECT id FROM tu) THEN 'created only (someone else wrote last)'
        WHEN dr.updated_by = (SELECT id FROM tu) THEN 'last updated only'
        ELSE 'other'
    END                                 AS involvement,
    (SELECT COUNT(*) FROM jsonb_each(dr.meter_readings)) AS total_slots,
    (SELECT COUNT(*) FROM jsonb_each(dr.meter_readings) m
     WHERE (m.value->>'start' IS NOT NULL AND m.value->>'start' <> '')
        OR (m.value->>'end'   IS NOT NULL AND m.value->>'end'   <> '')
    )                                   AS slots_with_data,
    CASE
        WHEN dr.meter_readings IS NULL OR dr.meter_readings = '{}'::jsonb THEN '❌ no meter col'
        WHEN NOT EXISTS (
            SELECT 1 FROM jsonb_each(dr.meter_readings) m
            WHERE (m.value->>'start' IS NOT NULL AND m.value->>'start' <> '')
               OR (m.value->>'end'   IS NOT NULL AND m.value->>'end'   <> '')
        ) THEN '❌ ALL EMPTY'
        ELSE '✅ has data'
    END                                 AS meter_status
FROM public.daily_records dr
CROSS JOIN tu
LEFT JOIN public.user_profiles up_c ON up_c.id = dr.created_by
LEFT JOIN public.user_profiles up_u ON up_u.id = dr.updated_by
WHERE (dr.created_by = tu.id OR dr.updated_by = tu.id)
  AND dr.record_date >= CURRENT_DATE - INTERVAL '30 days'
ORDER BY dr.record_date DESC, dr.station_id;


-- =========================================================================
-- PART 3: SUSPICIOUS — this user CREATED, but SOMEONE ELSE last updated
-- =========================================================================
-- These are the records most likely to represent "my meter data got wiped
-- when another user saved their edits." Especially if slots_with_data = 0.
-- seconds_since_create shows how long after moses created before another
-- user overwrote. Small value = near-simultaneous edits (realtime merge
-- window). Large value = unrelated edit later.

WITH tu AS (
    SELECT id FROM public.user_profiles
    WHERE email = 'moses022545@gmail.com'
)
SELECT
    dr.station_id,
    dr.record_date,
    dr.created_at,
    dr.updated_at,
    up_u.email                          AS last_updater_email,
    up_u.role                           AS last_updater_role,
    (SELECT COUNT(*) FROM jsonb_each(dr.meter_readings) m
     WHERE (m.value->>'start' IS NOT NULL AND m.value->>'start' <> '')
        OR (m.value->>'end'   IS NOT NULL AND m.value->>'end'   <> '')
    )                                   AS slots_with_data_now,
    ROUND(EXTRACT(EPOCH FROM (dr.updated_at - dr.created_at))::numeric, 0)
                                        AS seconds_since_create
FROM public.daily_records dr
CROSS JOIN tu
LEFT JOIN public.user_profiles up_u ON up_u.id = dr.updated_by
WHERE dr.created_by = tu.id
  AND dr.updated_by <> tu.id
  AND dr.record_date >= CURRENT_DATE - INTERVAL '30 days'
ORDER BY slots_with_data_now ASC, dr.record_date DESC;


-- =========================================================================
-- PART 4: SUSPICIOUS — this user was LAST UPDATER but meters are empty now
-- =========================================================================
-- These are records where moses's own save appears to have written empty
-- meters. Strong candidate for the "my save wiped my own data" overwrite
-- bug (stale snapshot / cache-based pre-merge).
-- If many rows here → issue is in moses's own client/browser, not concurrent edits.

WITH tu AS (
    SELECT id FROM public.user_profiles
    WHERE email = 'moses022545@gmail.com'
)
SELECT
    dr.station_id,
    dr.record_date,
    dr.created_at,
    dr.updated_at,
    up_c.email                          AS created_by_email,
    (SELECT COUNT(*) FROM jsonb_each(dr.meter_readings)) AS total_slots,
    (SELECT COUNT(*) FROM jsonb_each(dr.meter_readings) m
     WHERE (m.value->>'start' IS NOT NULL AND m.value->>'start' <> '')
        OR (m.value->>'end'   IS NOT NULL AND m.value->>'end'   <> '')
    )                                   AS slots_with_data
FROM public.daily_records dr
CROSS JOIN tu
LEFT JOIN public.user_profiles up_c ON up_c.id = dr.created_by
WHERE dr.updated_by = tu.id
  AND dr.record_date >= CURRENT_DATE - INTERVAL '30 days'
  AND (
    dr.meter_readings IS NULL
    OR dr.meter_readings = '{}'::jsonb
    OR NOT EXISTS (
        SELECT 1 FROM jsonb_each(dr.meter_readings) m
        WHERE (m.value->>'start' IS NOT NULL AND m.value->>'start' <> '')
           OR (m.value->>'end'   IS NOT NULL AND m.value->>'end'   <> '')
    )
  )
ORDER BY dr.record_date DESC;


-- =========================================================================
-- PART 5: Baseline — how often do empty meters appear overall?
-- =========================================================================
-- Compare moses's empty-meter rate to other users'. If moses's rate is
-- much higher → something is specific to his workflow/device/client.
-- If rates are similar → problem is a general bug, not user-specific.

WITH tu AS (
    SELECT id FROM public.user_profiles
    WHERE email = 'moses022545@gmail.com'
)
SELECT
    CASE WHEN dr.updated_by = (SELECT id FROM tu) THEN 'moses' ELSE 'others' END AS last_updater,
    COUNT(*)                                                                   AS total_records,
    COUNT(*) FILTER (
        WHERE dr.meter_readings IS NULL
           OR dr.meter_readings = '{}'::jsonb
           OR NOT EXISTS (
               SELECT 1 FROM jsonb_each(dr.meter_readings) m
               WHERE (m.value->>'start' IS NOT NULL AND m.value->>'start' <> '')
                  OR (m.value->>'end'   IS NOT NULL AND m.value->>'end'   <> '')
           )
    )                                                                          AS records_empty_meters,
    ROUND(
        100.0 * COUNT(*) FILTER (
            WHERE dr.meter_readings IS NULL
               OR dr.meter_readings = '{}'::jsonb
               OR NOT EXISTS (
                   SELECT 1 FROM jsonb_each(dr.meter_readings) m
                   WHERE (m.value->>'start' IS NOT NULL AND m.value->>'start' <> '')
                      OR (m.value->>'end'   IS NOT NULL AND m.value->>'end'   <> '')
               )
        ) / NULLIF(COUNT(*), 0),
        1
    )                                                                          AS pct_empty
FROM public.daily_records dr
WHERE dr.record_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY 1
ORDER BY 1;


-- =========================================================================
-- PART 6: (Station, date) history — who else touched the same records?
-- =========================================================================
-- For every (station, date) moses was involved in, list all user_profiles
-- who ever appear as created_by or updated_by on that record. Because the
-- table only stores ONE updated_by, if 3+ people touched it we lose middle
-- history — but creator + last-updater is enough to flag contested edits.

WITH tu AS (
    SELECT id FROM public.user_profiles
    WHERE email = 'moses022545@gmail.com'
)
SELECT
    dr.station_id,
    dr.record_date,
    up_c.email                          AS creator,
    up_u.email                          AS last_updater,
    CASE
        WHEN dr.created_by = dr.updated_by THEN 'single user'
        ELSE '⚠ contested (2+ users)'
    END                                 AS edit_pattern,
    (SELECT COUNT(*) FROM jsonb_each(dr.meter_readings) m
     WHERE (m.value->>'start' IS NOT NULL AND m.value->>'start' <> '')
        OR (m.value->>'end'   IS NOT NULL AND m.value->>'end'   <> '')
    )                                   AS slots_with_data,
    dr.updated_at
FROM public.daily_records dr
CROSS JOIN tu
LEFT JOIN public.user_profiles up_c ON up_c.id = dr.created_by
LEFT JOIN public.user_profiles up_u ON up_u.id = dr.updated_by
WHERE (dr.created_by = tu.id OR dr.updated_by = tu.id)
  AND dr.record_date >= CURRENT_DATE - INTERVAL '14 days'
ORDER BY dr.record_date DESC, dr.station_id;
