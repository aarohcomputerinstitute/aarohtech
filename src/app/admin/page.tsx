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

    if (loading) return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    return (
        <div className="container-fluid py-4">
            <div className="d-flex align-items-center justify-content-between mb-5">
                <div>
                    <h1 className="h2 mb-1 fw-bold text-dark">Dashboard Overview</h1>
                    <p className="text-muted mb-0">Welcome back! Here's what's happening today.</p>
                </div>
                <Link href="/admin/blogs/new" className="btn btn-primary rounded-pill px-4 shadow-sm d-flex align-items-center">
                    <i className="uil uil-plus me-2"></i> New Blog
                </Link>
            </div>

            <div className="row g-4 mb-5">
                {/* Total Leads Card */}
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden position-relative" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}>
                        <div className="card-body p-4 position-relative z-1">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <h6 className="text-uppercase fw-semibold text-primary mb-1" style={{ letterSpacing: '0.5px', fontSize: '0.85rem' }}>Total Leads</h6>
                                    <h2 className="mb-0 fw-bold text-dark display-5">{stats?.totalLeads || 0}</h2>
                                </div>
                                <div className="p-3 bg-white bg-opacity-50 rounded-circle text-primary">
                                    <i className="uil uil-users-alt fs-3"></i>
                                </div>
                            </div>
                            <div className="text-muted small">
                                <span className="text-success fw-medium"><i className="uil uil-arrow-up"></i> All time metric</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Today's Leads Card */}
                <div className="col-12 col-md-6 col-xl-4">
                    <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden position-relative" style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)' }}>
                        <div className="card-body p-4 position-relative z-1">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <h6 className="text-uppercase fw-semibold text-success mb-1" style={{ letterSpacing: '0.5px', fontSize: '0.85rem' }}>Today's Leads</h6>
                                    <h2 className="mb-0 fw-bold text-dark display-5">{stats?.todayLeads || 0}</h2>
                                </div>
                                <div className="p-3 bg-white bg-opacity-50 rounded-circle text-success">
                                    <i className="uil uil-calendar-alt fs-3"></i>
                                </div>
                            </div>
                            <div className="text-muted small">
                                <span className="text-success fw-medium">in the last 24 hours</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Manage Blogs Card */}
                <div className="col-12 col-md-12 col-xl-4">
                    <Link href="/admin/blogs" className="text-decoration-none">
                        <div className="card border-0 shadow-sm rounded-4 h-100 overflow-hidden position-relative transition-all" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', transition: 'transform 0.2s', ':hover': { transform: 'translateY(-3px)' } } as any}>
                            <div className="card-body p-4 position-relative z-1">
                                <div className="d-flex justify-content-between align-items-start mb-3">
                                    <div>
                                        <h6 className="text-uppercase fw-semibold text-purple mb-1" style={{ color: '#6d28d9', letterSpacing: '0.5px', fontSize: '0.85rem' }}>Manage Blogs</h6>
                                        <h2 className="mb-0 fw-bold text-dark fs-3 mt-2">Content Hub</h2>
                                    </div>
                                    <div className="p-3 bg-white bg-opacity-50 rounded-circle" style={{ color: '#6d28d9' }}>
                                        <i className="uil uil-file-edit-alt fs-3"></i>
                                    </div>
                                </div>
                                <div className="text-muted small">
                                    Click here to edit and publish posts
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Recent Leads Table */}
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="card-header bg-white border-bottom-0 pt-4 pb-3 px-4 d-flex align-items-center justify-content-between">
                    <div>
                        <h5 className="mb-0 fw-bold text-dark">Recent Inquiries</h5>
                        <p className="text-muted small mb-0 mt-1">Latest leads from the contact form</p>
                    </div>
                    <Link href="/admin/leads" className="btn btn-sm btn-light rounded-pill px-3 text-primary fw-medium border shadow-sm">
                        View All
                    </Link>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light text-muted small text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                                <tr>
                                    <th className="px-4 py-3 fw-semibold border-0">Name</th>
                                    <th className="px-4 py-3 fw-semibold border-0">Course / Interest</th>
                                    <th className="px-4 py-3 fw-semibold border-0 text-end">Date</th>
                                </tr>
                            </thead>
                            <tbody className="border-top-0">
                                {stats?.recentLeads?.length > 0 ? stats.recentLeads.map((lead: any) => (
                                    <tr key={lead.id} style={{ cursor: 'pointer' }}>
                                        <td className="px-4 py-3 border-light">
                                            <div className="fw-medium text-dark">{lead.name}</div>
                                            <div className="text-muted small">{lead.email}</div>
                                        </td>
                                        <td className="px-4 py-3 border-light text-muted">
                                            {lead.course || "-"}
                                        </td>
                                        <td className="px-4 py-3 border-light text-end text-muted small">
                                            {new Date(lead.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={3} className="text-center py-5 text-muted border-light">
                                            <div className="mb-2"><i className="uil uil-inbox fs-2 text-light-gray"></i></div>
                                            <p className="mb-0">No recent leads found</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
}
