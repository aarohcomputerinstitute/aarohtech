"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                router.push("/admin");
            } else {
                const data = await res.json();
                setError(data.error || "Login failed");
            }
        } catch (err) {
            setError("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="d-flex min-vh-100 align-items-center justify-content-center"
            style={{ backgroundColor: "#f1f5f9" }}
        >
            <div
                className="bg-white rounded-4 shadow-lg p-5"
                style={{ width: "100%", maxWidth: "420px" }}
            >
                {/* Logo / Header */}
                <div className="text-center mb-4">
                    <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1e293b", lineHeight: 1 }}>
                        Aaroh <span style={{ color: "#3b82f6" }}>Tech</span>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#94a3b8", letterSpacing: "2px", textTransform: "uppercase", marginTop: "4px" }}>
                        Admin Portal
                    </div>
                </div>

                <hr className="mb-4" style={{ borderColor: "#e2e8f0" }} />

                <h5 className="fw-bold text-dark mb-1">Sign In</h5>
                <p className="text-muted small mb-4">Enter your credentials to continue</p>

                {error && (
                    <div className="alert alert-danger border-0 rounded-3 small py-2" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="usernameInput" className="form-label small fw-medium text-dark">Email address</label>
                        <input
                            type="email"
                            className="form-control bg-light border-0 rounded-3 py-3"
                            id="usernameInput"
                            placeholder="you@example.com"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="passwordInput" className="form-label small fw-medium text-dark">Password</label>
                        <input
                            type="password"
                            className="form-control bg-light border-0 rounded-3 py-3"
                            id="passwordInput"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100 py-3 rounded-3 fw-semibold"
                        disabled={loading}
                        style={{ fontSize: "0.95rem" }}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Signing in...
                            </>
                        ) : "Sign In"}
                    </button>
                </form>

                <p className="text-center text-muted small mt-4 mb-0">
                    &copy; {new Date().getFullYear()} Aaroh Computer Institute
                </p>
            </div>
        </div>
    );
}
