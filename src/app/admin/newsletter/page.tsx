"use client";

import { useEffect, useState } from "react";

export default function NewsletterList() {
    const [subscribers, setSubscribers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/newsletter")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setSubscribers(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Newsletter Subscribers</h1>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Subscribers List</h6>
                </div>
                <div className="card-body">
                    {loading ? (
                        <div>Loading...</div>
                    ) : subscribers.length === 0 ? (
                        <div>No subscribers yet.</div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-bordered" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>Date Subscribed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subscribers.map((sub: any) => (
                                        <tr key={sub.id}>
                                            <td>{sub.id}</td>
                                            <td>{sub.email}</td>
                                            <td>{new Date(sub.subscribed_at).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
