import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod'; // Import zod for validation
import { supabase } from 'lib/db';

// Define the validation schema using zod
const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    mobile: z.string().regex(/^[0-9]{10,15}$/, 'Invalid mobile number'), // Adjust regex as needed
    course: z.string().optional(),
    message: z.string().min(1, 'Message is required'),
    bot_check: z.string().optional(),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Honeypot check
        if (body.bot_check) {
            console.log('Bot detected via honeypot:', body);
            return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
        }

        // Validate the request body
        const validationResult = contactSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: validationResult.error.format() },
                { status: 400 }
            );
        }

        const { name, email, mobile, course, message } = validationResult.data;

        // Securely insert data into the database using Supabase
        const { error } = await supabase
            .from('contacts')
            .insert([
                { name, email, mobile, course: course || null, message }
            ]);

        if (error) throw error;

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error.message }, // Be careful not to leak info in prod, OK for dev
            { status: 500 }
        );
    }
}
