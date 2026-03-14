"use client";

import { useEffect } from "react";
import { MdErrorOutline, MdRefresh } from "react-icons/md";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Admin Layout Error:", error);
  }, [error]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-white p-4 text-center">
      <div className="bg-danger-subtle p-4 rounded-circle mb-4">
        <MdErrorOutline size={64} className="text-danger" />
      </div>
      <h1 className="h3 fw-bold text-dark mb-2">Something went wrong!</h1>
      <p className="text-muted mb-4" style={{ maxWidth: '450px' }}>
        We encountered an error while loading the admin panel. This might be due to a missing configuration or a temporary connection issue.
      </p>
      
      {error.message && (
        <div className="bg-light p-3 rounded-3 mb-4 text-start border w-100" style={{ maxWidth: '600px' }}>
          <code className="small text-danger">{error.message}</code>
          {error.digest && <div className="mt-1 x-small text-muted">ID: {error.digest}</div>}
        </div>
      )}

      <div className="d-flex gap-3">
        <button
          onClick={() => reset()}
          className="btn btn-primary rounded-pill px-4 d-flex align-items-center gap-2"
        >
          <MdRefresh size={20} /> Try Again
        </button>
        <a href="/admin" className="btn btn-outline-secondary rounded-pill px-4">
            Go to Dashboard
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .x-small { font-size: 0.7rem; }
      `}} />
    </div>
  );
}
