"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        // In a real app, you might call an API to clear the cookie server-side too
        // For now, we'll just clear it client-side (if possible) or rely on the API to clear it on a logout route
        // But since our auth is HttpOnly cookie based, we need to hit an API to clear it.
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
    };

    const isActive = (path: string) => pathname === path ? "active" : "";

    return (
        <div className="d-flex min-vh-100 bg-light">
            {/* Sidebar */}
            <aside className="d-flex flex-column flex-shrink-0 p-3 text-white shadow" style={{ width: "280px", backgroundColor: "#1e293b" }}>
                <Link href="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none px-2">
                    <span className="fs-4 fw-bold tracking-tight">Aaroh <span className="text-primary">Admin</span></span>
                </Link>
                <hr className="border-secondary mb-4" />
                <ul className="nav nav-pills flex-column mb-auto gap-1">
                    <li className="nav-item">
                        <Link href="/admin" className={`nav-link text-white d-flex align-items-center py-2 px-3 rounded-3 transition-colors ${pathname === '/admin' ? 'bg-primary' : 'hover-bg-secondary'}`} style={pathname !== '/admin' ? { transition: "background-color 0.2s" } : {}}>
                            <i className="uil uil-home me-3 fs-5"></i>
                            <span className="fw-medium">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/leads" className={`nav-link text-white d-flex align-items-center py-2 px-3 rounded-3 transition-colors ${pathname.startsWith('/admin/leads') ? 'bg-primary' : 'hover-bg-secondary'}`} style={!pathname.startsWith('/admin/leads') ? { transition: "background-color 0.2s" } : {}}>
                            <i className="uil uil-users-alt me-3 fs-5"></i>
                            <span className="fw-medium">Leads</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/blogs" className={`nav-link text-white d-flex align-items-center py-2 px-3 rounded-3 transition-colors ${pathname.startsWith('/admin/blogs') ? 'bg-primary' : 'hover-bg-secondary'}`} style={!pathname.startsWith('/admin/blogs') ? { transition: "background-color 0.2s" } : {}}>
                            <i className="uil uil-file-alt me-3 fs-5"></i>
                            <span className="fw-medium">Blogs</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/newsletter" className={`nav-link text-white d-flex align-items-center py-2 px-3 rounded-3 transition-colors ${pathname.startsWith('/admin/newsletter') ? 'bg-primary' : 'hover-bg-secondary'}`} style={!pathname.startsWith('/admin/newsletter') ? { transition: "background-color 0.2s" } : {}}>
                            <i className="uil uil-envelope me-3 fs-5"></i>
                            <span className="fw-medium">Newsletter</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/settings" className={`nav-link text-white d-flex align-items-center py-2 px-3 rounded-3 transition-colors ${pathname.startsWith('/admin/settings') ? 'bg-primary' : 'hover-bg-secondary'}`} style={!pathname.startsWith('/admin/settings') ? { transition: "background-color 0.2s" } : {}}>
                            <i className="uil uil-setting me-3 fs-5"></i>
                            <span className="fw-medium">Settings</span>
                        </Link>
                    </li>
                </ul>
                <hr className="border-secondary mt-auto mb-4" />
                <div className="px-2">
                    <button onClick={handleLogout} className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center py-2 rounded-3" style={{ transition: "all 0.2s" }}>
                        <i className="uil uil-signout me-2"></i> 
                        <span className="fw-medium">Sign out</span>
                    </button>
                </div>
                
                {/* CSS to assist hover effects */}
                <style jsx>{`
                    .hover-bg-secondary:hover {
                        background-color: rgba(255, 255, 255, 0.1) !important;
                    }
                `}</style>
            </aside>

            {/* Main Content */}
            <main className="flex-grow-1 p-6 overflow-auto">
                {children}
            </main>
        </div>
    );
}
