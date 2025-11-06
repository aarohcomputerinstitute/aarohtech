export default function Hero1() {
  return (
    <section className="wrapper bg-gradient-orange">
      <div className="container pt-10 pt-md-14 pb-8 text-center">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img
                alt="hero"
                className="w-auto"
                src="/img/illustrations/i2.png"
                srcSet="/img/illustrations/i2@2x.png 2x"
              />
            </figure>
          </div>

          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start">
            <h1 className="display-3 mb-5 mx-md-n5 mx-lg-0">Full Stack MERN Program – Industry-Ready Training</h1>
            <p className="lead fs-lg mb-7">
              Become a skilled MERN Stack Developer with expert-led training, real projects, and job-ready skills. Learn MongoDB, Express, React, and Node.js to build modern web applications from scratch.
            </p>
            <a className="btn btn-orange rounded-pill me-2">Join Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
