import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQ1, FAQ6 } from "components/blocks/faq";
import { Team4 } from "components/blocks/team";
import { Hero1, Hero2} from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { Process14 } from "components/blocks/process";
import { Services20, Services24 } from "components/blocks/services";
import { Portfolio3 } from "components/blocks/portfolio";
import { Testimonial17, Testimonial4 } from "components/blocks/testimonial";
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
              href="#"
              title="Contact"
              className="btn btn-sm btn-orange rounded-pill "
            />
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero1 />

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
                <h2 className="display-2 text-orange mb-0">Get Certified</h2>
              </div>
            </div>
            <Hero2/>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
