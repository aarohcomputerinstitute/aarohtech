"use client";

import { useEffect, useState, useCallback } from "react";


// Simple CSV export function to avoid extra dependencies if possible, 
// but user asked for "export option csv". 
// Let's implement a manual CSV generator for simplicity without large deps.
const downloadCSV = (data: any[]) => {
    if (!data || !data.length) return;

    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(obj => Object.values(obj).map(val => `"${val}"`).join(","));
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "leads_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default function AdminLeads() {
    const [leads, setLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters
    const [statusFilter, setStatusFilter] = useState("All");
    const [courseFilter, setCourseFilter] = useState("All");
    const [dateFilter, setDateFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const fetchLeads = useCallback(async () => {
        setLoading(true);
        const params = new URLSearchParams();
        if (statusFilter !== "All") params.append("status", statusFilter);
        if (courseFilter !== "All") params.append("course", courseFilter);
        if (dateFilter !== "All") params.append("dateFilter", dateFilter);
        if (searchTerm) params.append("search", searchTerm);

        try {
            const res = await fetch(`/api/admin/leads?${params.toString()}`);
            if (res.ok) {
                setLeads(await res.json());
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [statusFilter, courseFilter, dateFilter, searchTerm]);

    useEffect(() => {
        fetchLeads();
    }, [fetchLeads]); // fetchLeads is now a stable dependency

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        fetchLeads();
    };

    const updateStatus = async (id: number, newStatus: string) => {
        // Optimistic update
        setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));

        try {
            await fetch('/api/admin/leads', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: newStatus })
            });
        } catch (error) {
            console.error("Failed to update status");
            fetchLeads(); // Revert on failure
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Lead Management</h1>

            {/* Filters */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Filters & Actions</h6>
                </div>
                <div className="card-body">
                    <div className="row gy-3">
                        <div className="col-md-3">
                            <select className="form-select" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
                                <option value="All">All Dates</option>
                                <option value="Today">Today</option>
                                <option value="This Week">This Week</option>
                                <option value="This Month">This Month</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                                <option value="All">All Statuses</option>
                                <option value="Pending">Pending</option>
                                <option value="Admission">Admission</option>
                                <option value="Not Interested">Not Interested</option>
                                <option value="Wrong Number">Wrong Number</option>
                                <option value="Follow Up">Follow Up</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <form onSubmit={handleSearch} className="d-flex">
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    placeholder="Search Name/Email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button type="submit" className="btn btn-primary"><i className="uil uil-search"></i></button>
                            </form>
                        </div>
                        <div className="col-md-3 text-md-end">
                            <button onClick={() => downloadCSV(leads)} className="btn btn-success">
                                <i className="uil uil-export me-2"></i> Export CSV
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Course</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan={6} className="text-center">Loading...</td></tr>
                                ) : leads.length === 0 ? (
                                    <tr><td colSpan={6} className="text-center">No leads found.</td></tr>
                                ) : (
                                    leads.map((lead) => (
                                        <tr key={lead.id}>
                                            <td>{new Date(lead.created_at).toLocaleDateString()}</td>
                                            <td>{lead.name}</td>
                                            <td>
                                                <div>{lead.mobile}</div>
                                                <div className="small text-muted">{lead.email}</div>
                                            </td>
                                            <td>{lead.course || "-"}</td>
                                            <td title={lead.message} style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {lead.message}
                                            </td>
                                            <td>
                                                <select
                                                    className={`form-select form-select-sm ${lead.status === 'Admission' ? 'bg-success text-white' :
                                                        lead.status === 'Not Interested' ? 'bg-danger text-white' :
                                                            lead.status === 'Pending' ? 'bg-warning text-dark' : ''
                                                        }`}
                                                    value={lead.status}
                                                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Admission">Admission</option>
                                                    <option value="Not Interested">Not Interested</option>
                                                    <option value="Wrong Number">Wrong Number</option>
                                                    <option value="Follow Up">Follow Up</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
