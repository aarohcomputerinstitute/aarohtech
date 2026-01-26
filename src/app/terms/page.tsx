"use client";

import { Fragment } from "react";
import { Element, Link as ScrollLink } from "react-scroll";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer13 } from "components/blocks/footer";
import Breadcrumb from "components/reuseable/Breadcrumb";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
const linkList = [
  { id: 1, title: "1. Terms & Conditions", to: "terms-conditions" },
  { id: 2, title: "2. Privacy Policy", to: "privacy-policy" },
  { id: 3, title: "3. Refund & Cancellation", to: "refund-policy" },
  { id: 4, title: "4. User Policy", to: "user-policy" },
  { id: 5, title: "5. Copyrights", to: "copyrights" },
  { id: 6, title: "6. Cookies", to: "cookies" }
];

const breadcrumb = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Legal & Policies", url: "/terms" }
];

export default function Terms() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          button={<NextLink title="Contact Us" href="/contact-us" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <h1 className="display-1 mb-3">Legal &amp; Policies</h1>
                <Breadcrumb data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row gx-0">
            <aside className="col-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block">
              <div className="widget">
                <nav id="sidebar-nav">
                  <ul className="list-unstyled text-reset">
                    {linkList.map(({ id, title, to }) => (
                      <li key={id}>
                        <ScrollLink smooth spy activeClass="active" to={to} className="nav-link">
                          {title}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            <div className="col-xl-9">
              <Element name="terms-conditions" className="wrapper pt-16">
                <div className="card shadow-lg">
                  <div className="card-body p-10">
                    <h2 className="mb-3">1. Terms and Conditions</h2>
                    <p>
                      Welcome to <strong>Aaroh Tech & AI Institute</strong>. By accessing or using our website and enrolling in our courses, you agree to comply with and be bound by the following terms and conditions.
                    </p>
                    <p>
                      Our services include computer training, AI education, digital marketing courses, and career mentorship. We reserve the right to modify course content, schedules, and fees at our discretion to maintain industry standards.
                    </p>
                    <p>
                      Students are expected to maintain professional conduct during training sessions (offline or online). Any misuse of institute resources or harassment of staff/students will result in immediate termination of enrollment without refund.
                    </p>

                    <List
                      data={[
                        "Students must provide accurate information during registration.",
                        "Course materials are for individual use and cannot be shared publicly.",
                        "Class timings are subject to availability and might change with prior notice.",
                        "Completion certificates are issued only after clearing internal assessments."
                      ]}
                    />
                  </div>
                </div>
              </Element>

              <Element name="privacy-policy" className="wrapper pt-16">
                <div className="card shadow-lg">
                  <div className="card-body p-10">
                    <h2 className="mb-3">2. Privacy Policy</h2>
                    <p>
                      At Aaroh Tech, your privacy is our priority. We collection information such as your name, email, and phone number only to provide course updates, process certifications, and improve our services.
                    </p>
                    <p>
                      We do not sell or share your personal data with third-party marketing agencies. Data is stored securely and accessed only by authorized personnel for administrative and educational purposes.
                    </p>

                    <List
                      data={[
                        "Collection of data via inquiry forms and registration.",
                        "Secure storage of student progress and performance records.",
                        "Use of contact details for course-related announcements only.",
                        "Right to request data deletion after course completion."
                      ]}
                    />

                    <p className="mb-0 mt-5">
                      By using our website, you consent to our privacy policy. We may use cookies to enhance your browsing experience and analyze website traffic to better serve our community.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="refund-policy" className="wrapper pt-16">
                <div className="card shadow-lg border-primary">
                  <div className="card-body p-10">
                    <h2 className="mb-3 text-primary">3. Refund &amp; Cancellation Policy</h2>
                    <p>
                      We strive to provide the highest quality education. However, we understand that circumstances can change. Our refund policy for course enrollments is as follows:
                    </p>

                    <p>
                      <strong>Full Refund:</strong> If a cancellation request is made at least 7 days before the course start date.
                      <br />
                      <strong>Partial Refund (50%):</strong> If requested within 48 hours of the course start date.
                      <br />
                      <strong>No Refund:</strong> Once the student has attended more than 2 sessions or accessed digital course modules.
                    </p>

                    <List
                      data={[
                        "Registration fees are non-refundable in all cases.",
                        "Refunds are processed within 10-15 business days.",
                        "Course transfers to another batch are allowed once for free.",
                        "Digital products and recordings are non-refundable."
                      ]}
                    />
                  </div>
                </div>
              </Element>

              <Element name="user-policy" className="wrapper pt-16">
                <div className="card shadow-lg">
                  <div className="card-body p-10">
                    <h2 className="mb-3">4. User Policy</h2>
                    <p>
                      This policy applies to all users of the Aaroh Tech website and student portal. Users must not attempt to bypass security measures, scrape data, or use the website for any illegal activities.
                    </p>
                    <p>
                      Account credentials provided for the student portal are strictly for personal use. Sharing login details with others will lead to account suspension.
                    </p>
                    <p className="mb-0">
                      We reserve the right to monitor website usage to ensure compliance with our terms and to protect the integrity of our digital platforms.
                    </p>
                  </div>
                </div>
              </Element>

              <Element name="copyrights" className="wrapper pt-16">
                <div className="card shadow-lg">
                  <div className="card-body p-10">
                    <h2 className="mb-3">5. Copyrights</h2>
                    <p>
                      All content on this website, including text, graphics, logos, images, and course materials, is the property of <strong>Aaroh Tech & AI Institute</strong> and is protected by international copyright laws.
                    </p>
                    <p>
                      Reproducing, distributing, or selling our course content, videos, or project source code without express written permission is strictly prohibited and will result in legal action.
                    </p>

                    <List
                      data={[
                        "Proprietary training modules and curriculum.",
                        "Custom software tools and project templates.",
                        "Brand logo and institute name trademarks.",
                        "Video lectures and recorded webinars."
                      ]}
                    />
                  </div>
                </div>
              </Element>

              <Element name="cookies" className="wrapper py-16">
                <div className="card shadow-lg">
                  <div className="card-body p-10">
                    <h2 className="mb-3">6. Cookies Policy</h2>
                    <p>
                      Our website uses cookies to distinguish you from other users. This helps us provide you with a good experience when you browse our website and also allows us to improve our site.
                    </p>
                    <p>
                      We use analytical cookies to understand how visitors interact with our pages, which helps us identify popular courses and topics.
                    </p>
                    <p className="mb-0">
                      You can choose to disable cookies through your browser settings, although this may affect the functionality of certain parts of our website.
                    </p>
                  </div>
                </div>
              </Element>
            </div>
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}

const List = ({ data }: { data: string[] }) => {
  return (
    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
      {data.map((item) => {
        return (
          <li key={item}>
            <span>
              <i className="uil uil-check" />
            </span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};
