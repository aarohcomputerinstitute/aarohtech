import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import ReplaceMe from "components/ReplaceMe";
import Navbar from "components/blocks/navbar/navbar-1";
import CountUp from "components/reuseable/CountUp";
import Carousel from "components/reuseable/Carousel";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM ICON COMPONENT
import Safe from "icons/solid/Safe";
import Layers from "icons/solid/Layers";
import Share from "icons/solid-mono/Share";
import Puzzle from "icons/solid-mono/Puzzle";
import PenTool from "icons/solid-duo/PenTool";
import Devices from "icons/solid-mono/Devices";
import GlobeTwo from "icons/solid-mono/GlobeTwo";
import { Footer13 } from "components/blocks/footer";
import { Hero21 } from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Process14 } from "components/blocks/process";
import { Team4 } from "components/blocks/team";
import { Portfolio3 } from "components/blocks/portfolio";
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
        <Hero21 />

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
