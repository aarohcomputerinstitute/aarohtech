import NextLink from "components/reuseable/links/NextLink";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { slideInDownAnimate, zoomInAnimate } from "utils/animation";

export default function Hero2() {
  return (
    <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-16 align-items-center">
      <div
        className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2"
        style={zoomInAnimate("0ms")}>
        <div className="shape bg-dot orange rellax w-17 h-19" style={{ top: "-1.7rem", left: "-1.5rem" }} />
        <div
          className="shape rounded bg-soft-orange rellax d-md-block"
          style={{ width: "85%", height: "90%", right: "-0.8rem", bottom: "-1.8rem" }}
        />

        <figure className="rounded">
          <img src="/img/photos/about7.jpg" srcSet="/img/photos/about7@2x.jpg 2x" alt="hero" />
        </figure>
      </div>

      <div className="col-lg-5 mt-lg-n10 text-center text-lg-start">
        <h3 className="h3 mb-2" style={slideInDownAnimate("600ms")}>
          Start Today
        </h3>

        <p className="lead fs-18 lh-sm mb-5 px-md-10 px-lg-0" style={slideInDownAnimate("900ms")}>
          Your dream tech career is just a few months away.
        </p>
        <h3 className="h3 mb-2" style={slideInDownAnimate("600ms")}>
          Believe in Yourself
        </h3>
        <p className="lead fs-18 lh-sm mb-5 px-md-10 px-lg-0" style={slideInDownAnimate("900ms")}>
          Coding becomes easier with the right guidance and regular practice.
          Stay consistent, keep learning, and prepare confidently for internships and placements in top companies.
        </p>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <span style={slideInDownAnimate("1200ms")}>
            <NextLink title="Explore Now" href="#" className="btn btn-orange rounded-pill me-2" />
          </span>

          <span style={slideInDownAnimate("1500ms")}>
            <NextLink title="Call Now" href="tel:+919828658887" className="btn btn-outline-orange rounded-pill" />
          </span>
        </div>
      </div>
    </div>
  );
}
