import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM ICON COMPONENT
import { Footer13 } from "components/blocks/footer";
import { HeroMain } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Process14 } from "components/blocks/process";
import { Team4 } from "components/blocks/team";
import { Testimonial17 } from "components/blocks/testimonial";
import { FAQ6 } from "components/blocks/faq";
import { Facts15 } from "components/blocks/facts";
import { Services24 } from "components/blocks/services";

export default function Home() {
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
        <HeroMain />

        {/* ========== services section ========== */}
        <Services24 />

        {/* ========== our strategy section ========== */}
        <Process14 />

        {/* ========== why choose us section ========== */}
        <About22 />

        <section className="wrapper bg-light">
          <div className="container pt-12 pt-lg-8 pb-14 pb-md-16">
            {/* ========== company facts section ========== */}
            <Facts15 />

            {/* ========== team section ========== */}
            <Team4 />
          </div>

          {/* ========== customer section ========== */}
          <Testimonial17 />

          {/* ========== faq section ========== */}
          <FAQ6 />
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
