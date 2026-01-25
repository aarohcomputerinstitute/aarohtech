
import { NextResponse } from 'next/server';
import { dbRequest } from '../../../lib/db';

export async function GET() {
    try {
        console.log("Setup DB Route Triggered");
        console.log("DB Config Check:", {
            host: process.env.DB_HOST ? "Defined" : "Undefined",
            user: process.env.DB_USER ? "Defined" : "Undefined",
            db: process.env.DB_NAME ? "Defined" : "Undefined"
        });

        if (!dbRequest) {
            throw new Error("dbRequest is undefined");
        }

        const query = `
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

        await dbRequest.query(query);
        console.log("Table created successfully");

        return NextResponse.json({ message: 'Table created successfully' });
    } catch (error: any) {
        console.error("Setup DB Error:", error);
        return NextResponse.json({
            error: error.message,
            stack: error.stack
        }, { status: 500 });
    }
}
