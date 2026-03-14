import { NextRequest, NextResponse } from 'next/server';
import { supabase } from 'lib/db';
import { verifySession } from 'lib/auth';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const status = searchParams.get('status');

        let query = supabase
            .from('blogs')
            .select('*')
            .order('created_at', { ascending: false });

        if (status) {
            query = query.eq('status', status);
        }

        const { data, error } = await query;

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

        const { 
            title, 
            category, 
            content, 
            image, 
            meta_title, 
            meta_description, 
            keywords, 
            excerpt, 
            author, 
            status, 
            is_featured 
        } = await req.json();

        // Generate slug if not provided, or sanitize it
        const slug = title.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');

        const newBlog = {
            title,
            slug,
            category,
            content,
            image,
            meta_title: meta_title || title,
            meta_description: meta_description || excerpt || "",
            keywords: keywords || "",
            excerpt: excerpt || "",
            author: author || "Aaroh Tech",
            status: status || "published",
            is_featured: is_featured || false,
            updated_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('blogs')
            .insert(newBlog)
            .select('*')
            .single();

        if (error) {
            console.error("Supabase insert error details:", {
                code: error.code,
                message: error.message,
                details: error.details,
                hint: error.hint
            });
            // Handle unique constraint failure on slug
            if (error.code === '23505') {
                return NextResponse.json({ error: 'A blog with a similar title already exists.' }, { status: 400 });
            }
            throw error;
        }

        return NextResponse.json({ success: true, blog: data });
    } catch (error: any) {
        console.error("Uncaught Blog Save Error:", error);
        return NextResponse.json({ 
            error: 'Failed to save blog',
            details: error.message || 'Unknown error'
        }, { status: 500 });
    }
}
