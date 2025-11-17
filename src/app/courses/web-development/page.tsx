import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQ1 } from "components/blocks/faq";
import { HeroWebDev, HeroGetCertificate} from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { Services20 } from "components/blocks/services";
import { Testimonial4 } from "components/blocks/testimonial";
import NextLink from "components/reuseable/links/NextLink";

export default function WebDevelopment() {
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
        {/* ========== hero section ========== */}
        <HeroWebDev />

        {/* ==========  course curriculum ========== */}
        <Services20 />
        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          <div className="container pt-12 pt-lg-8 pb-14 pb-md-16">
            {/* ========== company facts section ========== */}
            <Facts15 />
            </div>

          {/* ========== customer section ========== */}
          <Testimonial4 />
          <div className="container pt-12 pt-lg-8 pb-14 pb-md-16">
          {/* ========== faq section ========== */}
          <FAQ1/>
          </div>
          <div className="container pt-12 pt-lg-8 pb-14 pb-md-16">
            <div className="row">
              <div className="col-12 text-center mb-16">
                <h2 className="display-2 text-primary mb-0">Get Certified</h2>
              </div>
            </div>
            <HeroGetCertificate/>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
