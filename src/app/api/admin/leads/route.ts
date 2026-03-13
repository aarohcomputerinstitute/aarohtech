import { NextRequest, NextResponse } from 'next/server';
import { supabase } from 'lib/db';
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
        const dateFilter = searchParams.get('dateFilter'); // Today, This Week, This Month
        const search = searchParams.get('search');

        let query = supabase.from('contacts').select('*');

        if (status && status !== 'All') {
            query = query.eq('status', status);
        }

        if (course && course !== 'All') {
            query = query.eq('course', course);
        }

        if (dateFilter) {
            const now = new Date();
            let startDate = new Date();
            if (dateFilter === 'Today') {
                startDate.setHours(0, 0, 0, 0);
                query = query.gte('created_at', startDate.toISOString());
            } else if (dateFilter === 'This Week') {
                // Get start of week (Sunday)
                const day = now.getDay();
                startDate.setDate(now.getDate() - day);
                startDate.setHours(0, 0, 0, 0);
                query = query.gte('created_at', startDate.toISOString());
            } else if (dateFilter === 'This Month') {
                startDate.setDate(1);
                startDate.setHours(0, 0, 0, 0);
                query = query.gte('created_at', startDate.toISOString());
            }
        }

        if (search) {
            query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,mobile.ilike.%${search}%`);
        }

        query = query.order('created_at', { ascending: false });

        const { data, error } = await query;

        if (error) throw error;

        return NextResponse.json(data);
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

        const { error } = await supabase
            .from('contacts')
            .update({ status })
            .eq('id', id);

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Update Lead Status Error:", error);
        return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
    }
}
