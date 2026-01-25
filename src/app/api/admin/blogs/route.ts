import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';
import { verifySession } from 'lib/auth';

const BLOG_FILE = path.join(process.cwd(), 'src/data/blogs.json');

// Ensure file exists
async function ensureFile() {
    try {
        await fs.access(BLOG_FILE);
    } catch {
        const dir = path.dirname(BLOG_FILE);
        await fs.mkdir(dir, { recursive: true });
        await fs.writeFile(BLOG_FILE, '[]', 'utf8');
    }
}

export async function GET(req: NextRequest) {
    await ensureFile();
    try {
        const data = await fs.readFile(BLOG_FILE, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    // Auth Check
    const token = req.cookies.get('admin_session')?.value;
    const session = await verifySession(token || "");
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await ensureFile();

    try {
        const { title, category, content, image } = await req.json();
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        const newBlog = {
            id: Date.now().toString(),
            title,
            slug,
            category,
            content,
            image,
            created_at: new Date().toISOString()
        };

        const data = JSON.parse(await fs.readFile(BLOG_FILE, 'utf8'));
        data.unshift(newBlog); // Add to top

        await fs.writeFile(BLOG_FILE, JSON.stringify(data, null, 2), 'utf8');

        return NextResponse.json({ success: true, blog: newBlog });
    } catch (error) {
        console.error("Blog Save Error", error);
        return NextResponse.json({ error: 'Failed to save blog' }, { status: 500 });
    }
}
