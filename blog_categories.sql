-- Create categories table
CREATE TABLE IF NOT EXISTS blog_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for categories (optional but good practice)
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read-only access for categories" ON blog_categories FOR SELECT USING (true);
CREATE POLICY "Allow admin full access for categories" ON blog_categories ALL USING (true);

-- Add category_id to blogs table if it doesn't exist
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='blogs' AND column_name='category_id') THEN
        ALTER TABLE blogs ADD COLUMN category_id UUID REFERENCES blog_categories(id);
    END IF;
END $$;
