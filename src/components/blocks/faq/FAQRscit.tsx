import Accordion from "components/reuseable/accordion";

// CUSTOM DATA
import { accordionListrscit } from "data/faq";

export default function FAQRscit() {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-6 pb-14 pb-md-16">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-15 text-uppercase text-primary mb-3">FAQ</h2>
            <h3 className="display-3 mb-10 px-xxl-15">Frequently Asked Questions About RSCIT Course</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="accordion-wrapper" id="accordion">
              {accordionListrscit.map((item) => (
                <Accordion type="shadow-lg" key={item.no} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
