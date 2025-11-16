import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { FAQ1 } from "components/blocks/faq";
import { Hero1, Hero2} from "components/blocks/hero";
import { About22 } from "components/blocks/about";
import { Facts15 } from "components/blocks/facts";
import { Footer13 } from "components/blocks/footer";
import { Services20} from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";
import { Contact6, Contact10, LocationMap } from "components/blocks/contact";

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
        {/* ========== contact section ========== */}
        <Contact6/>

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
