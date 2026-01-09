import NextLink from "components/reuseable/links/NextLink";

export default function HeroRscit() {
  return (
    <section
      className="wrapper image-wrapper bg-cover bg-image bg-xs-none bg-gray"
      style={{ backgroundImage: "url(/img/photos/bg37.jpg)" }}>
      <div className="container py-sm-17">
        <div className="row">
          <div
            className="col-sm-6 col-xxl-5 text-center text-sm-start"
            data-cues="slideInDown"
            data-group="page-title"
            data-interval="-200"
            data-delay="500">
            <h2 className="display-5 fs-35 mb-4 mt-0 mt-lg-5 ls-xs pe-xl-5 pe-xxl-0">
              Start Your Digital Career with <span className="underline-3 style-3 primary">(RSCIT)</span>
            </h2>
            <p className="lead fs-20 lh-sm mb-7 pe-xxl-0">
              Unlock your potential with the government-recognized RSCIT course. Master Computer Fundamentals, MS Office, Internet, and Digital Payments.
            </p>

            <div>
              <NextLink title="Enroll Now" href="/contact-us" className="btn btn-lg btn-primary rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
