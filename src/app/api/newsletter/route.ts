
import { NextResponse } from 'next/server';
import { dbRequest } from 'lib/db';

async function ensureTable() {
    // Lazy initialization of the table
    const query = `
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    if (dbRequest) {
        await dbRequest.query(query);
    }
}

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        await ensureTable();

        if (!dbRequest) throw new Error("Database connection failed");

        // Insert ignore to handle duplicates gracefully or just standard insert
        try {
            await dbRequest.query('INSERT INTO newsletter_subscribers (email) VALUES (?)', [email]);
        } catch (err: any) {
            if (err.code === 'ER_DUP_ENTRY') {
                return NextResponse.json({ message: "You are already subscribed!" });
            }
            throw err;
        }

        return NextResponse.json({ message: "Subscribed successfully" });
    } catch (error: any) {
        console.error("Newsletter Post Error:", error);
        return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }
}

export async function GET() {
    try {
        await ensureTable();

        if (!dbRequest) throw new Error("Database connection failed");

        const [rows] = await dbRequest.query('SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC');
        return NextResponse.json(rows);
    } catch (error: any) {
        console.error("Newsletter Get Error:", error);
        return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
    }
}
