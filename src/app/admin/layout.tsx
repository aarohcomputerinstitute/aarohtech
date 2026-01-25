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
            <aside className="d-flex flex-column flex-shrink-0 p-3 bg-white shadow-sm" style={{ width: "280px" }}>
                <Link href="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <span className="fs-4 fw-bold">Admin Panel</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link href="/admin" className={`nav-link ${pathname === '/admin' ? 'active' : 'link-dark'}`}>
                            <i className="uil uil-home me-2"></i>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/leads" className={`nav-link ${pathname.startsWith('/admin/leads') ? 'active' : 'link-dark'}`}>
                            <i className="uil uil-users-alt me-2"></i>
                            Leads
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/blogs" className={`nav-link ${pathname.startsWith('/admin/blogs') ? 'active' : 'link-dark'}`}>
                            <i className="uil uil-file-alt me-2"></i>
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/newsletter" className={`nav-link ${pathname.startsWith('/admin/newsletter') ? 'active' : 'link-dark'}`}>
                            <i className="uil uil-envelope me-2"></i>
                            Newsletter
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/settings" className={`nav-link ${pathname.startsWith('/admin/settings') ? 'active' : 'link-dark'}`}>
                            <i className="uil uil-setting me-2"></i>
                            Settings
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <button onClick={handleLogout} className="btn btn-outline-danger w-100 table-responsive text-start">
                        <i className="uil uil-signout me-2"></i> Sign out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow-1 p-6 overflow-auto">
                {children}
            </main>
        </div>
    );
}
