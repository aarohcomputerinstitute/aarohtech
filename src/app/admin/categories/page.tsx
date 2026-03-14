"use client";

import { useState, useEffect } from "react";
import { MdAdd, MdDelete, MdEdit, MdCategory, MdLink } from "react-icons/md";

export default function CategoryManagement() {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: ""
    });

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
            const res = await fetch("/api/admin/categories");
            const data = await res.json();
            if (Array.isArray(data)) setCategories(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const res = await fetch("/api/admin/categories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setFormData({ name: "", slug: "", description: "" });
                loadCategories();
            } else {
                const err = await res.json();
                alert(`Error: ${err.error}`);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this category?")) return;
        
        try {
            const res = await fetch(`/api/admin/categories/${id}`, { method: "DELETE" });
            if (res.ok) {
                loadCategories();
            }
        } catch (err) {
            console.error(err);
        }
    };

    const generateSlug = (name: string) => {
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        setFormData({ ...formData, name, slug });
    };

    return (
        <div className="container-fluid">
            <div className="mb-4 mt-2">
                <h1 className="h3 mb-1 fw-bold text-dark">Category Management</h1>
                <p className="text-muted small">Organize your blog content with custom categories</p>
            </div>

            <div className="row g-4">
                {/* Create Category Form */}
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '20px' }}>
                        <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
                            <MdAdd className="text-primary" /> Create Category
                        </h5>
                        <form onSubmit={handleCreate}>
                            <div className="mb-3">
                                <label className="form-label small fw-bold">Category Name</label>
                                <input
                                    type="text"
                                    className="form-control border-0 bg-light rounded-3 py-2"
                                    placeholder="e.g. Artificial Intelligence"
                                    required
                                    value={formData.name}
                                    onChange={(e) => generateSlug(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label small fw-bold d-flex align-items-center gap-1">
                                    Slug <MdLink size={14} className="text-muted" />
                                </label>
                                <input
                                    type="text"
                                    className="form-control border-0 bg-light rounded-3 py-2"
                                    placeholder="category-slug"
                                    required
                                    value={formData.slug}
                                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label small fw-bold">Description (Optional)</label>
                                <textarea
                                    className="form-control border-0 bg-light rounded-3 py-2"
                                    rows={3}
                                    placeholder="Short description..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-primary w-100 rounded-pill py-2 shadow-sm fw-bold"
                                disabled={isSaving}
                            >
                                {isSaving ? "Saving..." : "Create Category"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Categories List */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="px-4 py-3 border-0 text-muted small fw-bold text-uppercase">Name</th>
                                            <th className="px-4 py-3 border-0 text-muted small fw-bold text-uppercase">Slug</th>
                                            <th className="px-4 py-3 border-0 text-muted small fw-bold text-uppercase text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan={3} className="text-center py-5">
                                                    <div className="spinner-border spinner-border-sm text-primary"></div>
                                                </td>
                                            </tr>
                                        ) : categories.length === 0 ? (
                                            <tr>
                                                <td colSpan={3} className="text-center py-5 text-muted">
                                                    No categories found.
                                                </td>
                                            </tr>
                                        ) : (
                                            categories.map((cat) => (
                                                <tr key={cat.id}>
                                                    <td className="px-4 py-3">
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="bg-primary-subtle text-primary p-2 rounded-3">
                                                                <MdCategory size={20} />
                                                            </div>
                                                            <div>
                                                                <div className="fw-bold text-dark">{cat.name}</div>
                                                                <div className="text-muted x-small">{cat.description || 'No description'}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3">
                                                        <code className="bg-light px-2 py-1 rounded text-primary small">{cat.slug}</code>
                                                    </td>
                                                    <td className="px-4 py-3 text-end">
                                                        <button 
                                                            onClick={() => handleDelete(cat.id)}
                                                            className="btn btn-light btn-sm rounded-circle p-2 border shadow-none"
                                                            title="Delete"
                                                        >
                                                            <MdDelete size={18} className="text-danger" />
                                                        </button>
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
            </div>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .x-small { font-size: 0.75rem; }
            `}} />
        </div>
    );
}
