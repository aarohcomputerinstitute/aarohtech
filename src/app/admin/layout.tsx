"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    MdDashboard,
    MdPeople,
    MdArticle,
    MdEmail,
    MdSettings,
    MdLogout
} from "react-icons/md";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/admin/login");
    };

    const navLinks = [
        { href: "/admin", label: "Dashboard", icon: <MdDashboard size={20} />, exact: true },
        { href: "/admin/leads", label: "Leads", icon: <MdPeople size={20} /> },
        { href: "/admin/blogs", label: "Blogs", icon: <MdArticle size={20} /> },
        { href: "/admin/newsletter", label: "Newsletter", icon: <MdEmail size={20} /> },
        { href: "/admin/settings", label: "Settings", icon: <MdSettings size={20} /> },
    ];

    const isActive = (href: string, exact?: boolean) =>
        exact ? pathname === href : pathname.startsWith(href);

    // Login page should render standalone — no sidebar
    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    return (
        <div className="d-flex min-vh-100 bg-light">
            {/* Sidebar */}
            <aside
                className="d-flex flex-column flex-shrink-0 p-3 text-white shadow"
                style={{ width: "260px", backgroundColor: "#1e293b", minHeight: "100vh" }}
            >
                {/* Logo */}
                <Link
                    href="/admin"
                    className="d-flex align-items-center text-white text-decoration-none px-2 py-2"
                >
                    <div>
                        <div style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1.2 }}>
                            Aaroh <span style={{ color: "#3b82f6" }}>Tech</span>
                        </div>
                        <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.45)", letterSpacing: "2px", textTransform: "uppercase", marginTop: "2px" }}>
                            Admin Panel
                        </div>
                    </div>
                </Link>

                <hr style={{ borderColor: "rgba(255,255,255,0.15)", margin: "10px 0" }} />

                {/* Nav Links */}
                <ul className="nav flex-column gap-1 mb-auto">
                    {navLinks.map(({ href, label, icon, exact }) => {
                        const active = isActive(href, exact);
                        return (
                            <li key={href} className="nav-item">
                                <Link
                                    href={href}
                                    className="d-flex align-items-center gap-3 px-3 py-2 rounded-3 text-white text-decoration-none"
                                    style={{
                                        backgroundColor: active ? "#3b82f6" : "transparent",
                                        transition: "background-color 0.2s",
                                        fontWeight: active ? 600 : 400,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!active) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                                    }}
                                >
                                    <span style={{ display: "flex", alignItems: "center", opacity: active ? 1 : 0.75 }}>
                                        {icon}
                                    </span>
                                    <span>{label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <hr style={{ borderColor: "rgba(255,255,255,0.15)", marginTop: "auto" }} />

                {/* Sign out */}
                <div className="px-1">
                    <button
                        onClick={handleLogout}
                        className="btn w-100 d-flex align-items-center gap-3 px-3 py-2 rounded-3 text-white"
                        style={{
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.2)",
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(239,68,68,0.2)";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(239,68,68,0.5)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                        }}
                    >
                        <MdLogout size={20} style={{ opacity: 0.8 }} />
                        <span className="fw-medium">Sign out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow-1 overflow-auto" style={{ padding: "2rem" }}>
                {children}
            </main>
        </div>
    );
}
