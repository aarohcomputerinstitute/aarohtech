"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/stats")
            .then((res) => res.json())
            .then((data) => {
                setStats(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="p-4">Loading dashboard...</div>;

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            <div className="row">
                {/* Total Leads Card */}
                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card shadow h-100 py-2" style={{ borderLeft: "5px solid #4e73df" }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total Leads
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {stats?.totalLeads || 0}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="uil uil-users-alt fa-2x text-gray-300 display-6"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Today's Leads Card */}
                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card shadow h-100 py-2" style={{ borderLeft: "5px solid #1cc88a" }}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Today's Leads
                                    </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                                        {stats?.todayLeads || 0}
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="uil uil-calendar-alt fa-2x text-gray-300 display-6"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Manage Blogs Card */}
                <div className="col-xl-4 col-md-6 mb-4">
                    <Link href="/admin/blogs" className="text-decoration-none">
                        <div className="card shadow h-100 py-2" style={{ borderLeft: "5px solid #36b9cc" }}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                                            Manage Blogs
                                        </div>
                                        <div className="text-sm font-weight-bold text-gray-800">
                                            Create & Edit
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="uil uil-file-edit-alt fa-2x text-gray-300 display-6"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Recent Leads Table */}
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Recent Inquiries</h6>
                    <Link href="/admin/leads" className="btn btn-sm btn-primary">View All</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Course</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats?.recentLeads?.length > 0 ? stats.recentLeads.map((lead: any) => (
                                    <tr key={lead.id}>
                                        <td>{lead.name}</td>
                                        <td>{lead.course || "-"}</td>
                                        <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                                    </tr>
                                )) : (
                                    <tr><td colSpan={3} className="text-center">No recent leads</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}
