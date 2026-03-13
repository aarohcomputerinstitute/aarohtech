import { NextRequest, NextResponse } from 'next/server';
import { supabase } from 'lib/db';
import { verifySession } from 'lib/auth';

export async function GET(req: NextRequest) {
    // 1. Verify Session
    const token = req.cookies.get('admin_session')?.value;
    const session = await verifySession(token || "");
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        // Fetch total leads
        const { count: totalLeads, error: totalError } = await supabase
            .from('contacts')
            .select('*', { count: 'exact', head: true });

        // Fetch today's leads
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const { count: todayLeads, error: todayError } = await supabase
            .from('contacts')
            .select('*', { count: 'exact', head: true })
            .gte('created_at', today.toISOString());

        // Fetch recent leads
        const { data: recentLeads, error: recentError } = await supabase
            .from('contacts')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(5);

        if (totalError || todayError || recentError) {
            throw totalError || todayError || recentError;
        }

        return NextResponse.json({
            totalLeads: totalLeads || 0,
            todayLeads: todayLeads || 0,
            recentLeads: recentLeads || [],
        });

    } catch (error) {
        console.error("Stats API Error", error);
        return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
    }
}
