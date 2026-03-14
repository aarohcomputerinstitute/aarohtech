"use client";

export default function Loading() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-50 p-5 text-center">
      <div className="spinner-border text-primary mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h5 className="text-dark fw-bold">Loading Dashboard...</h5>
      <p className="text-muted small">Preparing your professional content hub</p>
    </div>
  );
}
