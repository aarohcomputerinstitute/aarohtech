import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { existsSync, mkdirSync } from "fs";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
        return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Ensure directory exists
    const uploadDir = path.join(process.cwd(), "public/uploads/blogs");
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true });
    }

    const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");
    const relativePath = "/uploads/blogs/" + filename;
    const filePath = path.join(uploadDir, filename);

    try {
        await writeFile(filePath, buffer);
        return NextResponse.json({ success: true, url: relativePath });
    } catch (error) {
        console.error("Error occurred ", error);
        return NextResponse.json({ error: "Failed to upload file." }, { status: 500 });
    }
}
