import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Aaroh Tech and AI Institute Jaipur",
  description: "Get in touch with Aaroh Tech and AI Institute in Jaipur. Visit our center at Kalwar Road, Govindpura, or call us at +91-9828658887 for admissions and inquiries.",
  keywords: ["Contact Aaroh Tech", "Computer Institute Jaipur Contact", "Aaroh Tech Address", "Learn Coding Jaipur"],
};


export default function ContactUs() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <NextLink
              href="/contact-us"
              title="Contact"
              className="btn btn-sm btn-primary rounded-pill "
            />
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== contact section ========== */}
        <Contact6 />

        {/* ========== form section ========== */}
        <Contact10 />

        {/* ========== map section ========== */}
        <LocationMap />
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
