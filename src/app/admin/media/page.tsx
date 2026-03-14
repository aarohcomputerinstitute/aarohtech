"use client";

import { useState, useEffect } from "react";
import { MdImage, MdContentCopy, MdDelete, MdAddPhotoAlternate, MdSearch } from "react-icons/md";
import Image from "next/image";

export default function MediaGallery() {
    const [media, setMedia] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        loadMedia();
    }, []);

    const loadMedia = async () => {
        try {
            const res = await fetch("/api/admin/media");
            const data = await res.json();
            if (Array.isArray(data)) setMedia(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const body = new FormData();
        body.append("image", file);

        try {
            const res = await fetch("/api/admin/upload", { method: "POST", body });
            if (res.ok) {
                loadMedia();
            } else {
                alert("Upload failed");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setUploading(false);
        }
    };

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url);
        alert("Image URL copied to clipboard!");
    };

    const filteredMedia = media.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between mb-4 mt-2">
                <div>
                    <h1 className="h3 mb-1 fw-bold text-dark">Media Library</h1>
                    <p className="text-muted small mb-0">Manage and reuse your uploaded images</p>
                </div>
                <div className="d-flex gap-3">
                    <div className="input-group input-group-sm" style={{ width: '250px' }}>
                        <span className="input-group-text bg-white border-0 shadow-sm rounded-start-pill ps-3">
                            <MdSearch className="text-muted" />
                        </span>
                        <input 
                            type="text" 
                            className="form-control border-0 shadow-sm rounded-end-pill py-2" 
                            placeholder="Search images..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <label className="btn btn-primary rounded-pill px-4 shadow-sm d-flex align-items-center gap-2 cursor-pointer">
                        {uploading ? <span className="spinner-border spinner-border-sm" /> : <MdAddPhotoAlternate size={20} />}
                        <span>Upload New</span>
                        <input type="file" className="d-none" onChange={handleUpload} accept="image/*" disabled={uploading} />
                    </label>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            ) : filteredMedia.length === 0 ? (
                <div className="card border-0 shadow-sm rounded-4 p-5 text-center">
                    <div className="opacity-25 mb-3">
                        <MdImage size={64} />
                    </div>
                    <h5>No media found</h5>
                    <p className="text-muted small">Upload your first image to get started.</p>
                </div>
            ) : (
                <div className="row g-4 px-1">
                    {filteredMedia.map((item) => (
                        <div key={item.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
                            <div className="card border-0 shadow-sm rounded-4 overflow-hidden media-card h-100">
                                <div className="position-relative" style={{ aspectRatio: '1/1' }}>
                                    <Image 
                                        src={item.url} 
                                        alt={item.name} 
                                        fill 
                                        style={{ objectFit: 'cover' }}
                                        className="bg-light"
                                    />
                                    <div className="media-overlay d-flex align-items-center justify-content-center gap-2">
                                        <button 
                                            onClick={() => copyToClipboard(item.url)}
                                            className="btn btn-white btn-sm rounded-circle shadow-sm"
                                            title="Copy URL"
                                        >
                                            <MdContentCopy size={18} />
                                        </button>
                                        <button 
                                            className="btn btn-white btn-sm rounded-circle shadow-sm text-danger"
                                            title="Delete"
                                            onClick={() => alert("Delete functionality pending storage permissions check.")}
                                        >
                                            <MdDelete size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div className="small text-dark text-truncate fw-medium" title={item.name}>
                                        {item.name}
                                    </div>
                                    <div className="x-small text-muted">
                                        {(item.metadata?.size / 1024).toFixed(1)} KB
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style dangerouslySetInnerHTML={{ __html: `
                .media-card {
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .media-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
                }
                .media-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0.4);
                    opacity: 0;
                    transition: opacity 0.2s;
                }
                .media-card:hover .media-overlay {
                    opacity: 1;
                }
                .btn-white {
                    background: white;
                    border: none;
                    width: 36px;
                    height: 36px;
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .x-small { font-size: 0.7rem; }
            `}} />
        </div>
    );
}
