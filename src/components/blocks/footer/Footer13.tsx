"use client";

import Image from "next/image";
// GLOBAL CUSTOM COMPONENTS
import SocialLinks from "components/reuseable/SocialLinks";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import footerNav from "data/footer";
import { useState } from "react";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("LOADING");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("SUCCESS");
        setMessage(data.message || "Subscribed successfully!");
        setEmail("");
      } else {
        setStatus("ERROR");
        setMessage(data.error || "Subscription failed.");
      }
    } catch (error) {
      setStatus("ERROR");
      setMessage("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="validate dark-fields">
      <div className="mc-field-group input-group form-floating">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="required email form-control"
          placeholder="Email Address"
          required
        />
        <label>Email Address</label>
        <button type="submit" className="btn btn-primary" disabled={status === "LOADING"}>
          {status === "LOADING" ? "Joining..." : "Join"}
        </button>
      </div>
      {status === "SUCCESS" && <div className="mt-2 text-success small">{message}</div>}
      {status === "ERROR" && <div className="mt-2 text-danger small">{message}</div>}
    </form>
  );
}

export default function Footer13() {
  return (
    <footer className="bg-navy text-inverse">
      <div className="container pt-12 pt-lg-6 pb-13 pb-md-15">
        <div className="d-lg-flex flex-row align-items-lg-center">
          <h3 className="display-3 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">
            Join our learning community and grow your career with us.

          </h3>

          <NextLink href="#" title="Try Now Free" className="btn btn-primary rounded-pill mb-0 text-nowrap" />
        </div>

        <hr className="mt-11 mb-12" />

        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <Image alt="logo" width={134} height={26} src="/img/logo-aaroh-light.png" className="mb-4" />

              <p className="mb-4">
                © 2025 AAROH. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>

              <SocialLinks className="nav social social-white" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Get in Touch</h4>
              <address className="pe-xl-15 pe-xxl-17">Niwaru Link Road, Kalwar Road,Govindpura, Jhotwara, Jaipur</address>
              <NextLink title="aarohonline@email.com" href="mailto:aarohonline@email.com" />
              <br /> +91 9828658887
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Quick Links</h4>
              <ul className="list-unstyled  mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-12 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
              <p className="mb-5">Subscribe to our newsletter to get our news &amp; deals delivered to you.</p>

              <div className="newsletter-wrapper">
                {/* Custom Newsletter Form */}
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
