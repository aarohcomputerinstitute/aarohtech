import NextLink from "components/reuseable/links/NextLink";
import { ProcessList1 } from "components/reuseable/process-list";
// CUSTOM DATA
import { processList1 } from "data/process";

export default function Process14() {
  return (
    <section className="wrapper bg-light">
      <div className="container pb-14 pb-md-17">
        <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-6 order-lg-2">
            {processList1.map((item) => {
              return <ProcessList1 shadow {...item} key={item.no} />;
            })}
          </div>

          <div className="col-lg-6">
            <h2 className="fs-16 text-uppercase text-primary mb-3">Our Strategy</h2>
            <h3 className="display-3 mb-4">Here are 3 working steps to organize our training approach</h3>
            <p>
             At Aaroh Computer Classes, Kalwar Road, Jaipur, we believe in transforming learning into real-world skills.
            </p>
            <p className="mb-6">
              Our teaching process is designed to give every student hands-on experience with the latest tools and technologies — making learning practical, engaging, and career-focused.
            </p>

            <NextLink title="Learn More" href="#" className="btn btn-primary rounded-pill mb-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
