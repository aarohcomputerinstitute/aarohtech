import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySession } from 'lib/auth';

export async function middleware(req: NextRequest) {
    // Only protect /admin routes
    if (req.nextUrl.pathname.startsWith('/admin')) {
        // Allow access to login page
        if (req.nextUrl.pathname === '/admin/login') {
            return NextResponse.next();
        }

        const token = req.cookies.get('admin_session')?.value;

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', req.url));
        }

        const session = await verifySession(token);

        if (!session) {
            // Invalid token, delete it and redirect
            const response = NextResponse.redirect(new URL('/admin/login', req.url));
            response.cookies.delete('admin_session');
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
