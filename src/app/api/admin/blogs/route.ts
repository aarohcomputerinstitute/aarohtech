import { NextRequest, NextResponse } from 'next/server';
import { supabase } from 'lib/db';
import { verifySession } from 'lib/auth';

export async function GET(req: NextRequest) {
    try {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        
        return NextResponse.json(data || []);
    } catch (error) {
        console.error("GET blogs error:", error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        // Auth Check
        const token = req.cookies.get('admin_session')?.value;
        const session = await verifySession(token || "");
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { title, category, content, image } = await req.json();
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        const newBlog = {
            title,
            slug,
            category,
            content,
            image
        };

        const { data, error } = await supabase
            .from('blogs')
            .insert(newBlog)
            .select('*')
            .single();

        if (error) {
            console.error("Supabase insert error:", error);
            // Handle unique constraint failure on slug
            if (error.code === '23505') {
                return NextResponse.json({ error: 'A blog with a similar title already exists.' }, { status: 400 });
            }
            throw error;
        }

        return NextResponse.json({ success: true, blog: data });
    } catch (error) {
        console.error("Blog Save Error:", error);
        return NextResponse.json({ error: 'Failed to save blog' }, { status: 500 });
    }
}
