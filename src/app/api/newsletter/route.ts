
import { NextResponse } from 'next/server';
import { supabase } from 'lib/db';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }

        const { error } = await supabase
            .from('newsletter_subscribers')
            .insert([{ email }]);

        if (error) {
            if (error.code === '23505') { // Unique constraint violation in Postgres
                return NextResponse.json({ message: "You are already subscribed!" });
            }
            throw error;
        }

        return NextResponse.json({ message: "Subscribed successfully" });
    } catch (error: any) {
        console.error("Newsletter Post Error:", error);
        return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('newsletter_subscribers')
            .select('*')
            .order('subscribed_at', { ascending: false });

        if (error) throw error;

        return NextResponse.json(data);
    } catch (error: any) {
        console.error("Newsletter Get Error:", error);
        return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
    }
}
