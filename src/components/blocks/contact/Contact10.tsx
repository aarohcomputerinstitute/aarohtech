"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Email from "icons/lineal/Email";

// Hardcoded list of courses based on project structure
const courses = [
  { id: "advance-excel", name: "Advance Excel" },
  { id: "ai-automation", name: "AI Automation" },
  { id: "coding-language", name: "Coding Language" },
  { id: "data-analyst", name: "Data Analyst" },
  { id: "digital-marketing", name: "Digital Marketing" },
  { id: "rscit", name: "RSCIT" },
  { id: "tally-prime", name: "Tally Prime" },
  { id: "video-editing", name: "Video Editing" },
  { id: "web-development", name: "Web Development" },
  { id: "other", name: "Other" },
];

export default function Contact10() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");


    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic client-side check for honeypot (though server-side is key)
    if (data.bot_check) {
      // Silently fail or just return
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to send message");
      }

      // Redirect on success
      router.push("/thank-you");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="card bg-soft-primary mb-8">
          <div className="card-body p-12">
            <div className="row gx-md-8 gx-xl-12 gy-10">
              <div className="col-lg-6">
                <Email />
                <h2 className="display-4 mb-3 pe-lg-10">If you like what you see, let's work together.</h2>
                <p className="lead pe-lg-12 mb-0">
                  I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me
                  from this contact form and I will get back to you shortly.
                </p>
              </div>

              <div className="col-lg-6">
                <form className="contact-form needs-validation" onSubmit={handleSubmit}>
                  <div className="messages">
                    {error && <div className="alert alert-danger">{error}</div>}
                  </div>

                  {/* Honeypot Field - Hidden */}
                  <div style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }}>
                    <label htmlFor="bot_check">Do not fill this field</label>
                    <input type="text" name="bot_check" id="bot_check" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="row gx-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="text"
                          name="name"
                          id="frm_name"
                          placeholder="Jane"
                          className="form-control border-0"
                        />
                        <label htmlFor="frm_name">Name *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="email"
                          name="email"
                          id="frm_email"
                          className="form-control border-0"
                          placeholder="jane.doe@example.com"
                        />
                        <label htmlFor="frm_email">Email *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="tel"
                          name="mobile"
                          id="frm_mobile"
                          className="form-control border-0"
                          placeholder="1234567890"
                          pattern="[0-9]{10,15}"
                        />
                        <label htmlFor="frm_mobile">Mobile Number *</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-select-wrapper mb-4">
                        <select
                          className="form-select border-0"
                          id="frm_course"
                          name="course"
                          defaultValue=""
                        >
                          <option value="" disabled>Select a Course</option>
                          {courses.map((course) => (
                            <option key={course.id} value={course.name}>
                              {course.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <textarea
                          required
                          name="message"
                          id="frm_message"
                          placeholder="Your message"
                          className="form-control border-0"
                          style={{ height: 150 }}
                        />
                        <label htmlFor="frm_message">Message *</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-outline-primary rounded-pill btn-send mb-3"
                      >
                        {loading ? "Sending..." : "Send message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
