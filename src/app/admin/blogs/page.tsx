"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminBlogList() {
    const [blogs, setBlogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/admin/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch((err) => setLoading(false));
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Manage Blogs</h1>
                <Link href="/admin/blogs/new" className="btn btn-sm btn-primary shadow-sm">
                    <i className="uil uil-plus me-1"></i> Create New Blog
                </Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan={4} className="text-center">Loading...</td></tr>
                                ) : blogs.length === 0 ? (
                                    <tr><td colSpan={4} className="text-center">No blogs found.</td></tr>
                                ) : (
                                    blogs.map((blog: any) => (
                                        <tr key={blog.id}>
                                            <td style={{ width: '100px' }}>
                                                {blog.image && <img src={blog.image} alt={blog.title} style={{ height: '50px', objectFit: 'cover' }} />}
                                            </td>
                                            <td>{blog.title}</td>
                                            <td><span className="badge bg-secondary">{blog.category}</span></td>
                                            <td>{new Date(blog.created_at).toLocaleDateString()}</td>
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
