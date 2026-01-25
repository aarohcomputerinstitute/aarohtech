import NextLink from "components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate } from "utils/animation";

export default function HeroDA() {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-10 pt-md-14 pb-md-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0">
            <h1 className="display-3 mb-5 mx-md-n5 mx-lg-0" style={slideInDownAnimate("600ms")}>
              Unlock Growth with Data Analytics Skills
            </h1>

            <p className="lead mb-7" style={slideInDownAnimate("900ms")}>
              Learn Data Cleaning, Excel, SQL, Power BI, Python, Dashboards, and Business Analytics—everything you need to analyze data, generate insights, and drive smarter business decisions.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate("1200ms")}>
                <NextLink href="#" title="Enroll Now" className="btn btn-primary rounded me-2" />
              </span>

              <span style={slideInDownAnimate("1500ms")}>
                <NextLink href="#" title="Learn More" className="btn btn-outline-primary rounded" />
              </span>
            </div>
          </div>

          <div className="col-lg-7" style={slideInDownAnimate("0ms")}>
            <figure>
              <img
                alt="illustration"
                className="w-auto"
                src="/img/illustrations/i6.png"
                srcSet="/img/illustrations/i6@2x.png 2x"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
