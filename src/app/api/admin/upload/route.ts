import { NextRequest, NextResponse } from 'next/server';
import { supabase } from 'lib/db';
import { verifySession } from 'lib/auth';

export async function POST(req: NextRequest) {
    try {
        // Authenticate
        const token = req.cookies.get('admin_session')?.value;
        const session = await verifySession(token || "");
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        // Parse FormData
        const formData = await req.formData();
        const file = formData.get('image') as File | null;

        if (!file) {
            return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Sanitize filename
        const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
            .from('blog-images')
            .upload(`images/${filename}`, buffer, {
                contentType: file.type,
                upsert: false
            });

        if (error) {
            console.error("Storage upload error:", error);
            throw new Error(error.message);
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from('blog-images')
            .getPublicUrl(data.path);

        return NextResponse.json({ success: true, url: publicUrl });

    } catch (error: any) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
    }
}
