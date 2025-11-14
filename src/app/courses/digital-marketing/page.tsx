import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQdm } from "components/blocks/faq";
import { Hero12, Hero2 } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { Process14 } from "components/blocks/process";
import { Services1 } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";

export default function DigitalMarketing() {
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
              className="btn btn-sm btn-primary rounded-pill "
            />
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero12 />
         
         {/* ========== company facts section ========== */}
        <div className="container pt-6 pb-6">
            <Facts15 />
        </div>

        {/* ========== services section ========== */}
        <Services1 />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          {/* ========== faq section ========== */}
          <FAQdm />
        </section>

        <div className="container pt-lg-8">
                      <div className="row">
                        <div className="col-12 text-center mb-16">
                          <h2 className="display-2 text-primary mb-0">Get Certified</h2>
                        </div>
                      </div>
                      <Hero2/>
          </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
