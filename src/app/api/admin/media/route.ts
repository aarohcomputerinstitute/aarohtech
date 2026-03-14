import { NextResponse } from "next/server";
import { supabase } from "lib/db";
import { cookies } from "next/headers";

async function isAdmin() {
    const cookieStore = await cookies();
    return cookieStore.get("admin_session")?.value === "true";
}

export async function GET() {
    if (!(await isAdmin())) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { data, error } = await supabase
            .storage
            .from("blog-images")
            .list("", {
                limit: 100,
                offset: 0,
                sortBy: { column: "created_at", order: "desc" }
            });

        if (error) throw error;

        // Generate public URLs for each file
        const filesWithUrls = data.map(file => {
            const { data: { publicUrl } } = supabase
                .storage
                .from("blog-images")
                .getPublicUrl(file.name);
            
            return {
                ...file,
                url: publicUrl
            };
        });

        return NextResponse.json(filesWithUrls);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
