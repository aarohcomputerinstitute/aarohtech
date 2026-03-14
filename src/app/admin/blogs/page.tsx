"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MdAdd, MdEdit, MdDelete, MdVisibility, MdStar, MdCheckCircle, MdFiberManualRecord } from "react-icons/md";

export default function AdminBlogList() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = async () => {
        try {
            const res = await fetch("/api/admin/blogs");
            const data = await res.json();
            setBlogs(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid">
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-4 mt-2">
                <div>
                    <h1 className="h3 mb-1 fw-bold text-dark">Blog Management</h1>
                    <p className="text-muted small mb-0">Control and publish your institute's latest stories</p>
                </div>
                <Link 
                    href="/admin/blogs/new" 
                    className="btn btn-primary rounded-pill px-4 shadow-sm d-flex align-items-center gap-2"
                >
                    <MdAdd size={20} />
                    <span>Create New Blog</span>
                </Link>
            </div>

            {/* Stats Summary (Optional/Small) */}
            <div className="row g-3 mb-4">
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
                        <div className="text-muted small fw-bold text-uppercase mb-1">Total Blogs</div>
                        <div className="h4 fw-bold mb-0">{blogs.length}</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white">
                        <div className="text-muted small fw-bold text-uppercase mb-1">Published</div>
                        <div className="h4 fw-bold mb-0 text-success">
                            {blogs.filter(b => b.status === 'published').length}
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Card */}
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden mt-2">
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th className="px-4 py-3 border-0 text-muted small fw-bold text-uppercase" style={{ width: '120px' }}>Article</th>
                                    <th className="px-4 py-3 border-0 text-muted small fw-bold text-uppercase">Title & Info</th>
                                    <th className="px-4 py-3 border-0 text-muted small fw-bold text-uppercase text-center">Status</th>
                                    <th className="px-4 py-3 border-0 text-muted small fw-bold text-uppercase text-center">Date</th>
                                    <th className="px-4 py-3 border-0 text-muted small fw-bold text-uppercase text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan={5} className="text-center py-5">
                                            <div className="spinner-border spinner-border-sm text-primary me-2" role="status"></div>
                                            <span className="text-muted">Loading your amazing blogs...</span>
                                        </td>
                                    </tr>
                                ) : blogs.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="text-center py-5">
                                            <div className="mb-3 opacity-25">
                                                <MdVisibility size={48} />
                                            </div>
                                            <h5 className="text-dark">No blogs found</h5>
                                            <p className="text-muted small">Start by creating your first professional blog post.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    blogs.map((blog: any) => (
                                        <tr key={blog.id}>
                                            <td className="px-4 py-3">
                                                <div className="rounded-3 overflow-hidden bg-light border" style={{ width: '80px', height: '50px' }}>
                                                    {blog.image ? (
                                                        <img src={blog.image} alt="" className="w-100 h-100 object-fit-cover" />
                                                    ) : (
                                                        <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted opacity-50">
                                                            <MdImage size={24} />
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="d-flex align-items-center gap-2 mb-1">
                                                    <span className="fw-bold text-dark">{blog.title}</span>
                                                    {blog.is_featured && (
                                                        <span className="badge rounded-pill bg-warning-subtle text-warning border border-warning-subtle d-flex align-items-center gap-1 x-small py-1">
                                                            <MdStar size={12} /> Featured
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="badge bg-primary-subtle text-primary border border-primary-subtle x-small py-1">
                                                        {blog.category}
                                                    </span>
                                                    <span className="text-muted x-small">By {blog.author}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                {blog.status === 'published' ? (
                                                    <span className="badge rounded-pill bg-success-subtle text-success border border-success-subtle d-flex align-items-center gap-1 justify-content-center small py-1 mx-auto" style={{ width: 'fit-content' }}>
                                                        <MdCheckCircle size={14} /> Published
                                                    </span>
                                                ) : (
                                                    <span className="badge rounded-pill bg-secondary-subtle text-secondary border border-secondary-subtle d-flex align-items-center gap-1 justify-content-center small py-1 mx-auto" style={{ width: 'fit-content' }}>
                                                        <MdFiberManualRecord size={14} /> Draft
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3 text-center text-muted small">
                                                {new Date(blog.created_at).toLocaleDateString(undefined, {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </td>
                                            <td className="px-4 py-3 text-end">
                                                <div className="d-flex justify-content-end gap-1">
                                                    <Link 
                                                        href={`/blogs/${blog.slug}`} 
                                                        target="_blank"
                                                        className="btn btn-light btn-sm rounded-circle p-2 border shadow-none"
                                                        title="View Publicly"
                                                    >
                                                        <MdVisibility size={18} className="text-muted" />
                                                    </Link>
                                                    <Link 
                                                        href={`/admin/blogs/edit/${blog.id}`} 
                                                        className="btn btn-light btn-sm rounded-circle p-2 border shadow-none"
                                                        title="Edit Blog"
                                                    >
                                                        <MdEdit size={18} className="text-primary" />
                                                    </Link>
                                                    <button 
                                                        className="btn btn-light btn-sm rounded-circle p-2 border shadow-none"
                                                        title="Delete Blog"
                                                    >
                                                        <MdDelete size={18} className="text-danger" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .x-small { font-size: 0.7rem; }
                .truncate {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            `}</style>
        </div>
    );
}

// Add missing icon
function MdImage({size}: {size: number}) {
    return <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height={size} width={size} xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"></path></svg>
}
