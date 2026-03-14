-- Run this in your Supabase SQL Editor to upgrade your blog system to a professional standard.

-- 1. Upgrade blogs table with SEO and metadata fields
ALTER TABLE blogs 
ADD COLUMN IF NOT EXISTS meta_title TEXT,
ADD COLUMN IF NOT EXISTS meta_description TEXT,
ADD COLUMN IF NOT EXISTS keywords TEXT,
ADD COLUMN IF NOT EXISTS excerpt TEXT,
ADD COLUMN IF NOT EXISTS author TEXT DEFAULT 'Aaroh Tech',
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'published', -- 'draft' or 'published'
ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false;

-- 2. Add some comments for clarity
COMMENT ON COLUMN blogs.status IS 'Can be either draft or published';
COMMENT ON COLUMN blogs.is_featured IS 'Whether to show this blog in the featured section of the homepage';

-- 3. Ensure RLS is disabled if you are still facing permission issues
-- ALTER TABLE blogs DISABLE ROW LEVEL SECURITY;
