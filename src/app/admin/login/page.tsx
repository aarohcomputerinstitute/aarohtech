"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
        <div className="d-flex min-vh-100 bg-white">
            {/* Left Graphic Side */}
            <div className="d-none d-lg-flex col-lg-6 bg-primary align-items-center justify-content-center p-5 position-relative overflow-hidden">
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{
                    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent), radial-gradient(circle at bottom left, rgba(0,0,0,0.1), transparent)'
                }}></div>
                <div className="text-white text-center position-relative z-index-1">
                    <h1 className="display-4 fw-bold mb-4">Aaroh Tech</h1>
                    <p className="lead opacity-75">Secure Administrative Portal</p>
                </div>
            </div>

            {/* Right Login Side */}
            <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-4 p-md-5">
                <div className="w-100" style={{ maxWidth: '420px' }}>
                    <div className="mb-5 text-center text-lg-start">
                        <h2 className="fw-bold fs-2 mb-2 text-dark">Welcome back</h2>
                        <p className="text-muted">Please enter your credentials to access the dashboard.</p>
                    </div>

                    {error && (
                        <div className="alert alert-danger d-flex align-items-center border-0 shadow-sm" role="alert">
                            <i className="uil uil-info-circle me-2 fs-5"></i>
                            <div>{error}</div>
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="needs-validation">
                        <div className="form-floating mb-4">
                            <input
                                type="email"
                                className="form-control bg-light border-0 shadow-none px-4"
                                id="usernameInput"
                                placeholder="name@example.com"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <label htmlFor="usernameInput" className="px-4 text-muted">Email address</label>
                        </div>

                        <div className="form-floating mb-5">
                            <input
                                type="password"
                                className="form-control bg-light border-0 shadow-none px-4"
                                id="passwordInput"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="passwordInput" className="px-4 text-muted">Password</label>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary w-100 py-3 rounded-pill shadow-sm fw-semibold fs-6 d-flex justify-content-center align-items-center transition-all"
                            disabled={loading}
                            style={{ transition: 'transform 0.2s', ':hover': { transform: 'translateY(-2px)' } } as any}
                        >
                            {loading ? (
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            ) : (
                                <i className="uil uil-signin me-2 fs-5"></i>
                            )}
                            {loading ? "Authenticating..." : "Sign In to Dashboard"}
                        </button>
                    </form>
                    
                    <div className="text-center mt-5 text-muted small">
                        &copy; {new Date().getFullYear()} Aaroh Computer Institute. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}
