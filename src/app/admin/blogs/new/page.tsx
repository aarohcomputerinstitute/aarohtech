"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RichEditor from "components/admin/RichEditor";
import { MdArrowBack, MdSave, MdRocketLaunch, MdImage, MdSearch, MdSettings } from "react-icons/md";
import Link from "next/link";

export default function NewBlog() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: "",
        category: "Technology",
        content: "",
        image: "",
        excerpt: "",
        meta_title: "",
        meta_description: "",
        keywords: "",
        author: "Aaroh Tech",
        status: "published",
        is_featured: false
    });

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const body = new FormData();
        body.append("image", file);

        try {
            const res = await fetch("/api/admin/upload", { method: "POST", body });
            const data = await res.json();
            if (data.success) {
                setFormData({ ...formData, image: data.url });
                setImagePreview(data.url);
            }
        } catch (error) {
            console.error("Upload failed", error);
            alert("Featured image upload failed.");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/admin/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await res.json();

            if (res.ok) {
                router.push("/admin/blogs");
            } else {
                alert(`Error: ${result.details || result.error || "Failed to create blog"}`);
            }
        } catch (error) {
            console.error(error);
            alert("A network error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid pb-5">
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-4 mt-2">
                <div className="d-flex align-items-center gap-3">
                    <Link href="/admin/blogs" className="btn btn-light rounded-circle p-2 shadow-sm border">
                        <MdArrowBack size={24} />
                    </Link>
                    <div>
                        <h1 className="h3 mb-1 fw-bold text-dark">Create New Blog</h1>
                        <p className="text-muted small mb-0">Craft a professional story for your audience</p>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <button 
                        onClick={() => setFormData({...formData, status: 'draft'})}
                        className="btn btn-outline-secondary rounded-pill px-4"
                        disabled={loading}
                    >
                        Save as Draft
                    </button>
                    <button 
                        onClick={handleSubmit}
                        className="btn btn-primary rounded-pill px-4 shadow-sm d-flex align-items-center gap-2"
                        disabled={loading}
                    >
                        {loading ? <span className="spinner-border spinner-border-sm" /> : <MdRocketLaunch size={20} />}
                        Publish Blog
                    </button>
                </div>
            </div>

            <div className="row g-4">
                {/* Main Content (Left) */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                        <div className="mb-4">
                            <label className="form-label fw-bold text-dark">Blog Title</label>
                            <input
                                type="text"
                                className="form-control form-control-lg border-0 bg-light rounded-3 px-4 py-3"
                                placeholder="Enter a catchy title..."
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-bold text-dark">Content</label>
                            <RichEditor
                                value={formData.content}
                                onChange={(content) => setFormData({ ...formData, content })}
                            />
                        </div>

                        <div className="mb-0">
                            <label className="form-label fw-bold text-dark">Short Excerpt</label>
                            <textarea
                                className="form-control border-0 bg-light rounded-3 px-4 py-3"
                                rows={3}
                                placeholder="A brief summary for cards and social sharing..."
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            ></textarea>
                            <p className="text-muted small mt-2">This is shown in the blog list and social media previews.</p>
                        </div>
                    </div>

                    {/* SEO Real-time Preview */}
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        <h5 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                            <MdSearch className="text-primary" /> Google Search Preview
                        </h5>
                        <div className="bg-light p-4 rounded-3 border">
                            <div className="text-primary fs-5 fw-medium mb-1 truncate" style={{ maxWidth: '100%', color: '#1a0dab' }}>
                                {formData.meta_title || formData.title || "Your Blog Title Will Appear Here"}
                            </div>
                            <div className="text-success small mb-1">
                                aarhtech.com › blogs › {formData.title.toLowerCase().replace(/ /g, '-')}
                            </div>
                            <div className="text-muted small" style={{ color: '#4d5156' }}>
                                {formData.meta_description || formData.excerpt || "Your meta description will appear here to attract visitors from search engines..."}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar (Right) */}
                <div className="col-lg-4">
                    {/* Featured Image */}
                    <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 text-center">
                        <h6 className="fw-bold text-dark mb-3 text-start">Featured Image</h6>
                        <div 
                            className="bg-light rounded-4 border-2 border-dashed d-flex flex-column align-items-center justify-content-center overflow-hidden position-relative"
                            style={{ height: '220px', cursor: 'pointer' }}
                            onClick={() => document.getElementById('featuredImage')?.click()}
                        >
                            {imagePreview ? (
                                <img src={imagePreview} alt="Preview" className="w-100 h-100 object-fit-cover" />
                            ) : (
                                <div className="text-muted">
                                    <MdImage size={48} className="mb-2 opacity-50" />
                                    <p className="small mb-0">Click to upload cover image</p>
                                </div>
                            )}
                            <input 
                                type="file" 
                                id="featuredImage" 
                                className="d-none" 
                                onChange={handleImageUpload} 
                                accept="image/*" 
                            />
                        </div>
                        {imagePreview && (
                            <button 
                                className="btn btn-link btn-sm text-danger mt-2 text-decoration-none"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setImagePreview(null);
                                    setFormData({...formData, image: ""});
                                }}
                            >
                                Remove Image
                            </button>
                        )}
                        <p className="text-muted x-small mt-3 mb-0 text-start">Recommended size: 1200x630px</p>
                    </div>

                    {/* Settings & Categories */}
                    <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                        <h6 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                            <MdSettings className="text-primary" /> Settings
                        </h6>

                        <div className="mb-3">
                            <label className="form-label small fw-bold">Category</label>
                            <select
                                className="form-select border-0 bg-light rounded-3 py-2"
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            >
                                <option>Technology</option>
                                <option>Computer Courses</option>
                                <option>Web Development</option>
                                <option>AI & Future Tech</option>
                                <option>Digital Marketing</option>
                                <option>IT Career Advice</option>
                                <option>Programming</option>
                                <option>News & Updates</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold">Author Name</label>
                            <input
                                type="text"
                                className="form-control border-0 bg-light rounded-3 py-2"
                                value={formData.author}
                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                            />
                        </div>

                        <div className="form-check form-switch mt-4">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                id="featuredSwitch" 
                                checked={formData.is_featured}
                                onChange={(e) => setFormData({...formData, is_featured: e.target.checked})}
                            />
                            <label className="form-check-label small fw-bold" htmlFor="featuredSwitch">Mark as Featured</label>
                        </div>
                    </div>

                    {/* SEO Settings */}
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        <h6 className="fw-bold text-dark mb-4">SEO Metadata</h6>
                        
                        <div className="mb-3">
                            <label className="form-label small fw-bold">SEO Title</label>
                            <input
                                type="text"
                                className="form-control border-0 bg-light rounded-3 py-2"
                                placeholder="Google meta title..."
                                value={formData.meta_title}
                                onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold">SEO Description</label>
                            <textarea
                                className="form-control border-0 bg-light rounded-3 py-2"
                                rows={4}
                                placeholder="Google meta description..."
                                value={formData.meta_description}
                                onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                            ></textarea>
                        </div>

                        <div className="mb-0">
                            <label className="form-label small fw-bold">Keywords</label>
                            <input
                                type="text"
                                className="form-control border-0 bg-light rounded-3 py-2"
                                placeholder="react, nextjs, tech (comma separated)"
                                value={formData.keywords}
                                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
