import Accordion from "components/reuseable/accordion";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import { accordionListAiautomation } from "data/faq";

export default function FAQAiautomation() {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-6 pb-14 pb-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10">
          <div className="col-lg-6 mb-0">
            <h2 className="fs-16 text-uppercase text-primary mb-4">A frequently asked questions (FAQ)</h2>
            <h3 className="display-6 mb-4">
              If you don’t see an answer to your question, feel free to contact us through our inquiry form or visit our center at Kalwar Road, Jaipur.
            </h3>
            <p className="mb-6">
              Our friendly team at Aaroh Computer Classes is always ready to help you choose the right course and guide you with complete details about Data Analyst.
            </p>
            <NextLink title="Call Now" href="tel:+919828658887" className="btn btn-primary rounded-pill text-white" />
          </div>

          <div className="col-lg-6">
            <div className="accordion-wrapper" id="accordion">
              {accordionListAiautomation.map((item) => (
                <Accordion type="shadow-lg" key={item.no} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
