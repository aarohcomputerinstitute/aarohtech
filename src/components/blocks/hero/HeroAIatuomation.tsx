"use client";

import Typewriter from "typewriter-effect";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM UTILS
import { slideInDownAnimate, zoomInAnimate } from "utils/animation";

export default function HeroAIatuomation() {
  // typewriter options
  const OPTIONS = {
    loop: true,
    autoStart: true,
    strings: ["ChatGPT", "Midjourney", "DALL-E", "Zapier"]
  };

  return (
    <section className="wrapper bg-soft-primary">
      <div className="container pt-10 pb-10 pt-md-14 pb-md-14">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 mt-lg-n2 text-center text-lg-start order-2 order-lg-0">
            <h1 className="display-1 mb-5 mx-md-10 mx-lg-0" style={slideInDownAnimate("600ms")}>
              Master AI Automation With
              <br />
              <span className="typer text-primary text-nowrap">
                <Typewriter options={OPTIONS} />
              </span>
            </h1>

            <p className="lead fs-lg mb-7" style={slideInDownAnimate("900ms")}>
              Learn AI tools, prompt engineering, and workflow automation to boost productivity and excel in the AI-powered future.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate("1200ms")}>
                <NextLink title="Get Started" href="/contact-us" className="btn btn-lg btn-primary rounded me-2" />
              </span>

              <span style={slideInDownAnimate("1500ms")}>
                <NextLink title="Call Now" href="tel:919828658887" className="btn btn-lg btn-green rounded" />
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-3 offset-1 offset-lg-0 col-lg-4 d-flex flex-column">
                <div className="ms-auto mt-auto" style={zoomInAnimate("300ms")}>
                  <img
                    alt="AI Workflow"
                    src="/img/photos/ai-side1.png"
                    srcSet="/img/photos/ai-side1@2x.png 2x"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>

                <div className="ms-auto mt-5 mb-10" style={zoomInAnimate("600ms")}>
                  <img
                    alt="AI Collaboration"
                    src="/img/photos/ai-side3.png"
                    srcSet="/img/photos/ai-side3@2x.png 2x"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>

              <div className="col-4 col-lg-5" style={zoomInAnimate("0ms")}>
                <div>
                  <img
                    alt="AI Automation Core"
                    src="/img/photos/ai-main.png"
                    srcSet="/img/photos/ai-main@2x.png 2x"
                    className="w-100 img-fluid rounded shadow-lg"
                  />
                </div>
              </div>

              <div className="col-3 d-flex flex-column">
                <div className="mt-auto" style={zoomInAnimate("300ms")}>
                  <img
                    alt="Prompt Engineering"
                    src="/img/photos/ai-side2.png"
                    srcSet="/img/photos/ai-side2@2x.png 2x"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>

                <div className="mt-5" style={zoomInAnimate("600ms")}>
                  <img
                    alt="AI Assistant"
                    src="/img/photos/ai-side4.png"
                    srcSet="/img/photos/ai-side4@2x.png 2x"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>

                <div className="mt-5 mb-10" style={zoomInAnimate("900ms")}>
                  <img
                    alt="Digital Matrix"
                    src="/img/photos/ai-side5.png"
                    srcSet="/img/photos/ai-side5@2x.png 2x"
                    className="img-fluid rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
