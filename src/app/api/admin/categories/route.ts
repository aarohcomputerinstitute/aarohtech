import { NextResponse } from "next/server";
import { supabase } from "lib/db";
import { cookies } from "next/headers";

// Helper to check admin session
async function isAdmin() {
    const cookieStore = await cookies();
    return cookieStore.get("admin_session")?.value === "true";
}

export async function GET() {
    try {
        const { data, error } = await supabase
            .from("blog_categories")
            .select("*")
            .order("name", { ascending: true });

        if (error) throw error;
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    if (!(await isAdmin())) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { name, slug, description } = await req.json();

        if (!name || !slug) {
            return NextResponse.json({ error: "Name and Slug are required" }, { status:400 });
        }

        const { data, error } = await supabase
            .from("blog_categories")
            .insert([{ name, slug, description }])
            .select()
            .single();

        if (error) throw error;
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
