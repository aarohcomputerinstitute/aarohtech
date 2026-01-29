import Accordion from "components/reuseable/accordion";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import { accordionList3 } from "data/faq";

export default function FAQ6() {
  return (
    <section className="wrapper bg-gradient-primary position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
      {/* Decorative Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ pointerEvents: 'none' }}>
        <div className="position-absolute rounded-circle bg-primary" style={{ width: '300px', height: '300px', top: '-150px', right: '-100px', opacity: 0.1 }}></div>
        <div className="position-absolute rounded-circle bg-primary" style={{ width: '200px', height: '200px', bottom: '-50px', left: '-50px', opacity: 0.1 }}></div>
      </div>

      <div className="container pt-14 pt-md-16 pb-14 pb-md-18 position-relative">
        {/* Section Header */}
        <div className="row mb-10 mb-md-12 text-center" data-cue="fadeIn">
          <div className="col-lg-10 col-xl-8 mx-auto">
            <span className="badge bg-primary rounded-pill px-4 py-2 mb-4 fs-14 fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>
              FAQ
            </span>
            <h2 className="display-3 fw-bold mb-4 text-navy" style={{ lineHeight: '1.2' }}>
              Frequently Asked Questions
            </h2>
            <p className="lead fs-18 mb-0 text-muted px-lg-8">
              Got questions? We've got answers! Find everything you need to know about our courses, training programs, and enrollment process at Aaroh Computer Classes.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-start">
          {/* Left Column - Contact Info */}
          <div className="col-lg-5 col-xl-4" data-cue="slideInUp">
            <div className="card shadow-lg border-0 rounded-4 p-6 p-lg-7 sticky-top" style={{ top: '100px' }}>
              <div className="mb-5">
                <div className="icon btn btn-circle btn-lg btn-soft-primary mb-4">
                  <i className="uil uil-question-circle fs-28"></i>
                </div>
                <h3 className="h4 mb-3 fw-bold text-navy">Still Have Questions?</h3>
                <p className="mb-4 text-muted">
                  Can't find the answer you're looking for? Our friendly team at Aaroh Computer Classes is here to help you.
                </p>
              </div>

              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="icon btn btn-circle btn-sm btn-soft-primary me-3 flex-shrink-0">
                    <i className="uil uil-map-marker"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">Visit Us</h6>
                    <p className="mb-0 text-muted fs-15">Kalwar Road, Jaipur, Rajasthan</p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <div className="icon btn btn-circle btn-sm btn-soft-primary me-3 flex-shrink-0">
                    <i className="uil uil-phone"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">Call Us</h6>
                    <p className="mb-0 text-muted fs-15">+91 98286 58887</p>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="icon btn btn-circle btn-sm btn-soft-primary me-3 flex-shrink-0">
                    <i className="uil uil-clock"></i>
                  </div>
                  <div>
                    <h6 className="mb-1 fw-bold">Working Hours</h6>
                    <p className="mb-0 text-muted fs-15">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2">
                <NextLink
                  title="Call Now"
                  href="tel:+919828658887"
                  className="btn btn-primary rounded-pill btn-lg shadow-sm hover-lift text-white"
                />
                <NextLink
                  title="Visit Center"
                  href="/contact-us"
                  className="btn btn-outline-primary rounded-pill btn-lg"
                />
              </div>

              <div className="mt-5 pt-4 border-top">
                <p className="fs-14 text-muted mb-2">
                  <i className="uil uil-check-circle text-primary me-2"></i>
                  Expert Guidance Available
                </p>
                <p className="fs-14 text-muted mb-2">
                  <i className="uil uil-check-circle text-primary me-2"></i>
                  Free Demo Classes
                </p>
                <p className="fs-14 text-muted mb-0">
                  <i className="uil uil-check-circle text-primary me-2"></i>
                  Flexible Batch Timings
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="col-lg-7 col-xl-8">
            <div className="accordion-wrapper" id="accordion" data-cues="slideInUp" data-group="accordion">
              {accordionList3.map((item) => (
                <div key={item.no} className="mb-3">
                  <Accordion type="shadow-lg" {...item} />
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="card bg-soft-primary border-0 rounded-4 mt-6 p-5 text-center" data-cue="fadeIn">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-8">
                  <h4 className="mb-2 fw-bold text-navy">Ready to Start Your Learning Journey?</h4>
                  <p className="mb-3 text-muted">Join thousands of students who have transformed their careers with us.</p>
                  <NextLink
                    title="Enroll Now"
                    href="/contact-us"
                    className="btn btn-primary rounded-pill px-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="overflow-hidden">
        <div className="divider text-navy mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="currentColor"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
