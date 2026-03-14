"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RichEditor from "components/admin/RichEditor";

export default function NewBlog() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        title: "",
        category: "Computer Courses & Training",
        content: "",
        image: ""
    });

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const body = new FormData();
        body.append("file", file);

        try {
            const res = await fetch("/api/admin/upload", { method: "POST", body });
            const data = await res.json();
            if (data.success) {
                setFormData({ ...formData, image: data.url });
                setImagePreview(data.url);
            }
        } catch (error) {
            console.error("Upload failed", error);
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

            if (res.ok) {
                router.push("/admin/blogs");
            } else {
                alert("Failed to create blog");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Create New Blog</h1>

            <div className="card shadow mb-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Blog Title</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-select"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option>Technology</option>
                                    <option>Computer Courses & Training</option>
                                    <option>Web Development</option>
                                    <option>Software Development</option>
                                    <option>Artificial Intelligence (AI) & AI Tools</option>
                                    <option>Digital Marketing</option>
                                    <option>Graphic Design</option>
                                    <option>IT Career Guidance</option>
                                    <option>Programming Languages</option>
                                    <option>Student Projects & Case Studies</option>
                                    <option>Certifications & Course Syllabus</option>
                                    <option>Tech News & Trends</option>
                                    <option>Institute Updates & Announcements</option>
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label">Featured Image</label>
                                <input type="file" className="form-control" onChange={handleImageUpload} accept="image/*" />
                                {imagePreview && <div className="mt-2"><img src={imagePreview} alt="Preview" height="100" /></div>}
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Content</label>
                            <RichEditor
                                value={formData.content}
                                onChange={(content) => setFormData({ ...formData, content })}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? "Publishing..." : "Publish Blog"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
