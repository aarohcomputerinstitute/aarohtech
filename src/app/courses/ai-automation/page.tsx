import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQDataAnalyst } from "components/blocks/faq";
import { Hero2 } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import DaCourseCurriculaum from "components/blocks/services/DaCourseCurriculaum";
import NextLink from "components/reuseable/links/NextLink";
import HeroDA from "components/blocks/hero/HeroDA";

export default function AiAutomation() {
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
        <HeroDA/>
         
         {/* ========== company facts section ========== */}
        <div className="container pt-6 pb-6">
            <Facts15 />
        </div>

        {/* ========== services section ========== */}
        <DaCourseCurriculaum />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          {/* ========== faq section ========== */}
          <FAQDataAnalyst />
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
