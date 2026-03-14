import { NextRequest, NextResponse } from 'next/server';
import { supabase } from 'lib/db';
import { verifyPassword } from 'lib/passwords';
import { signSession } from 'lib/auth';

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        if (!username || !password) {
            return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });
        }

        // Fetch user from DB
        const { data: user, error } = await supabase
            .from('admin_users')
            .select('*')
            .eq('username', username)
            .single();

        if (error || !user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Verify password
        const isValid = await verifyPassword(password, user.password_hash);

        if (!isValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Create session token
        const token = await signSession({ sub: user.id, username: user.username });

        // Set HttpOnly Cookie
        const response = NextResponse.json({ success: true }, { status: 200 });

        // In strict production, ensure secure: true is set (requires HTTPS)
        const isProd = process.env.NODE_ENV === 'production';
        const isHttps = req.nextUrl.protocol === 'https:';
        
        response.cookies.set('admin_session', token, {
            httpOnly: true,
            secure: isProd && isHttps,
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24, // 1 day
        });

        return response;
    } catch (error: any) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
