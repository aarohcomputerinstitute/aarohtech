import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Maintain the dbRequest name for compatibility during migration, wrapping supabase logic
export const dbRequest = {
    execute: async (query: string, values: any[] = []) => {
        // This is a temporary shim to help migrate gradually
        // In a real migration, we'd replace the calls directly
        console.warn("Direct SQL execution is not supported by Supabase client. Please migrate to supabase-js methods.");
        throw new Error("Direct SQL execution not supported. Migrate to Supabase client methods.");
    }
};
