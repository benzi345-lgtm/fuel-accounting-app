-- ===== Fuel Accounting - Supabase Setup =====
-- Run this SQL in Supabase SQL Editor (supabase.com → project → SQL Editor)

-- 1. Helper function for admin check (bypasses RLS)
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM user_profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Tables
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  display_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'entry' CHECK (role IN ('entry', 'admin')),
  station_ids TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS daily_records (
  id SERIAL PRIMARY KEY,
  station_id TEXT NOT NULL,
  record_date DATE NOT NULL,
  staff_id TEXT DEFAULT '',
  meter_readings JSONB DEFAULT '{}',
  stock_entries JSONB DEFAULT '{}',
  product_sales JSONB DEFAULT '[]',
  product_stock_entries JSONB DEFAULT '{}',
  tax_invoices JSONB DEFAULT '{"abbreviated":[],"full":[]}',
  expenses JSONB DEFAULT '[]',
  credit_customers JSONB DEFAULT '[]',
  finance JSONB DEFAULT '{}',
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(station_id, record_date)
);

CREATE TABLE IF NOT EXISTS fuel_prices (
  id SERIAL PRIMARY KEY,
  fuel_type TEXT NOT NULL UNIQUE,
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  updated_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS tax_entries (
  id SERIAL PRIMARY KEY,
  station_id TEXT NOT NULL,
  record_date DATE NOT NULL,
  data JSONB DEFAULT '{}',
  updated_by UUID REFERENCES auth.users(id),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(station_id, record_date)
);

-- 3. Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE fuel_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE tax_entries ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies

-- user_profiles: all authenticated can read, insert own, admin manages
CREATE POLICY "profiles_read" ON user_profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "profiles_insert_own" ON user_profiles FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "profiles_admin_update" ON user_profiles FOR UPDATE TO authenticated USING (is_admin());
CREATE POLICY "profiles_admin_delete" ON user_profiles FOR DELETE TO authenticated USING (is_admin());

-- daily_records: all authenticated can read/insert/update, only admin can delete
CREATE POLICY "records_read" ON daily_records FOR SELECT TO authenticated USING (true);
CREATE POLICY "records_insert" ON daily_records FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "records_update" ON daily_records FOR UPDATE TO authenticated USING (true);
CREATE POLICY "records_admin_delete" ON daily_records FOR DELETE TO authenticated USING (is_admin());

-- fuel_prices: all authenticated full access
CREATE POLICY "prices_all" ON fuel_prices FOR ALL TO authenticated USING (true);

-- tax_entries: all authenticated full access
CREATE POLICY "tax_all" ON tax_entries FOR ALL TO authenticated USING (true);

-- 5. Migrations
-- Add fuel_prices column to daily_records (per-record pricing)
ALTER TABLE daily_records ADD COLUMN IF NOT EXISTS fuel_prices JSONB DEFAULT '{}';
ALTER TABLE daily_records ADD COLUMN IF NOT EXISTS internal_usage JSONB DEFAULT '[]';
ALTER TABLE daily_records ADD COLUMN IF NOT EXISTS credit_card_entries JSONB DEFAULT '[]';
ALTER TABLE daily_records ADD COLUMN IF NOT EXISTS bluecard_entries JSONB DEFAULT '[]';

-- Credit payments table
CREATE TABLE IF NOT EXISTS credit_payments (
    id TEXT PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_code TEXT DEFAULT '',
    payment_date DATE NOT NULL,
    amount DECIMAL(12,2) NOT NULL DEFAULT 0,
    data JSONB DEFAULT '{}',
    updated_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE credit_payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "credit_payments_all" ON credit_payments FOR ALL TO authenticated USING (true);

-- App settings table (key-value)
CREATE TABLE IF NOT EXISTS app_settings (
    key TEXT PRIMARY KEY,
    data JSONB DEFAULT '{}',
    updated_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE app_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "app_settings_all" ON app_settings FOR ALL TO authenticated USING (true);

-- Custom credit customers (shared across all users)
CREATE TABLE IF NOT EXISTS custom_credit_customers (
    code TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);
ALTER TABLE custom_credit_customers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "custom_cus_all" ON custom_credit_customers FOR ALL TO authenticated USING (true);
