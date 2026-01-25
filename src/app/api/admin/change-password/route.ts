import { NextRequest, NextResponse } from 'next/server';
import { dbRequest } from 'lib/db';
import { verifyPassword, hashPassword, verifySession } from 'lib/auth';

export async function POST(req: NextRequest) {
    try {
        // 1. Verify Session
        const token = req.cookies.get('admin_session')?.value;
        if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const session: any = await verifySession(token);
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { currentPassword, newPassword } = await req.json();

        if (!currentPassword || !newPassword) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        // 2. Fetch User
        const [rows]: any = await dbRequest.execute(
            'SELECT * FROM admin_users WHERE id = ?',
            [session.sub]
        );
        const user = rows[0];

        if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

        // 3. Verify Current Password
        const isValid = await verifyPassword(currentPassword, user.password_hash);
        if (!isValid) {
            return NextResponse.json({ error: 'Incorrect current password' }, { status: 400 });
        }

        // 4. Hash New Password
        const newHash = await hashPassword(newPassword);

        // 5. Update Database
        await dbRequest.execute(
            'UPDATE admin_users SET password_hash = ? WHERE id = ?',
            [newHash, session.sub]
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Password change error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
