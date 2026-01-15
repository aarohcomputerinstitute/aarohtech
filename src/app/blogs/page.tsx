import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Footer13 } from "components/blocks/footer";
import NextLink from "components/reuseable/links/NextLink";
import { Blog2 } from "components/blocks/blog";
export default function Blogs() {
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
      <main className="content-wrapper container pb-15">
        <Blog2 />
      </main>

      {/* ========== footer section ========== */}
      <Footer13 />
    </Fragment>
  );
}
