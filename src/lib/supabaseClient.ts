import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Pengecekan untuk memastikan variabel tersedia saat build
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Variabel lingkungan Supabase tidak ditemukan. Pastikan .env.local sudah diisi.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);