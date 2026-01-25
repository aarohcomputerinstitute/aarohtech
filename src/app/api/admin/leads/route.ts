import { NextRequest, NextResponse } from 'next/server';
import { dbRequest } from 'lib/db';
import { verifySession } from 'lib/auth';

export async function GET(req: NextRequest) {
    try {
        // 1. Auth Check
        const token = req.cookies.get('admin_session')?.value;
        const session = await verifySession(token || "");
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        // 2. Parse Query Params
        const { searchParams } = new URL(req.url);
        const status = searchParams.get('status');
        const course = searchParams.get('course');
        const dateFilter = searchParams.get('dateFilter'); // today, week, month
        const search = searchParams.get('search');

        let query = 'SELECT * FROM contacts WHERE 1=1';
        const params: any[] = [];

        if (status && status !== 'All') {
            query += ' AND status = ?';
            params.push(status);
        }

        if (course && course !== 'All') {
            query += ' AND course = ?';
            params.push(course);
        }

        if (dateFilter) {
            const today = new Date();
            if (dateFilter === 'Today') {
                query += ' AND DATE(created_at) = CURDATE()';
            } else if (dateFilter === 'This Week') {
                query += ' AND YEAR(created_at) = YEAR(CURDATE()) AND WEEK(created_at) = WEEK(CURDATE())';
            } else if (dateFilter === 'This Month') {
                query += ' AND YEAR(created_at) = YEAR(CURDATE()) AND MONTH(created_at) = MONTH(CURDATE())';
            }
        }

        if (search) {
            query += ' AND (name LIKE ? OR email LIKE ? OR mobile LIKE ?)';
            const likeSearch = `%${search}%`;
            params.push(likeSearch, likeSearch, likeSearch);
        }

        query += ' ORDER BY created_at DESC';

        const [rows]: any = await dbRequest.execute(query, params);

        return NextResponse.json(rows);
    } catch (error) {
        console.error("Leads API Error:", error);
        return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    try {
        // 1. Auth Check
        const token = req.cookies.get('admin_session')?.value;
        const session = await verifySession(token || "");
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const { id, status } = await req.json();

        if (!id || !status) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        await dbRequest.execute('UPDATE contacts SET status = ? WHERE id = ?', [status, id]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Update Lead Status Error:", error);
        return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
    }
}
