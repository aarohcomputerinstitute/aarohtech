import { NextResponse } from "next/server";
import { supabase } from "@/lib/db";
import { cookies } from "next/headers";

async function isAdmin() {
    const cookieStore = await cookies();
    return cookieStore.get("admin_session")?.value === "true";
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    if (!(await isAdmin())) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;
        const { error } = await supabase
            .from("blog_categories")
            .delete()
            .eq("id", id);

        if (error) throw error;
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    if (!(await isAdmin())) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { id } = await params;
        const { name, slug, description } = await req.json();

        const { data, error } = await supabase
            .from("blog_categories")
            .update({ name, slug, description })
            .eq("id", id)
            .select()
            .single();

        if (error) throw error;
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
