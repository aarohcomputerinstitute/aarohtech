"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const phoneNumber = "919828658887";

    useEffect(() => {
        const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
        const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
        setIsMobile(mobile);
    }, []);

    // Hide on admin pages
    if (pathname?.startsWith("/admin")) return null;

    const whatsappUrl = isMobile
        ? `https://wa.me/${phoneNumber}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="position-fixed bottom-0 start-0 m-4 shadow-lg rounded-circle d-flex align-items-center justify-content-center"
            style={{
                zIndex: 9999,
                width: "60px",
                height: "60px",
                backgroundColor: "#25D366",
                transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            title="Chat with us on WhatsApp"
        >
            <i className="uil uil-whatsapp text-white fs-30"></i>
        </a>
    );
}
