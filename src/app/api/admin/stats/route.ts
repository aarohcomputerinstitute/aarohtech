import { NextRequest, NextResponse } from 'next/server';
import { dbRequest } from 'lib/db';
import { verifySession } from 'lib/auth';

export async function GET(req: NextRequest) {
    // 1. Verify Session
    const token = req.cookies.get('admin_session')?.value;
    const session = await verifySession(token || "");
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        // Parallel queries
        const [totalLeadsResult]: any = await dbRequest.execute('SELECT COUNT(*) as count FROM contacts');
        const [todayLeadsResult]: any = await dbRequest.execute('SELECT COUNT(*) as count FROM contacts WHERE DATE(created_at) = CURDATE()');
        const [recentLeadsResult]: any = await dbRequest.execute('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5');

        return NextResponse.json({
            totalLeads: totalLeadsResult[0].count,
            todayLeads: todayLeadsResult[0].count,
            recentLeads: recentLeadsResult,
        });

    } catch (error) {
        console.error("Stats API Error", error);
        return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
    }
}
