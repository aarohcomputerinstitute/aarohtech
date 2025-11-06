import { Fragment } from "react";
// CUSTOM DATA
import { serviceList10 } from "data/service";

export default function Services20() {
  return (
    <div className="container mt-10 mt-md-12 py-14 py-md-2">
      <div className="row text-center">
        <div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto">
          <h2 className="fs-16 text-uppercase text-orange mb-3">Know Course Curriculum</h2>
          <h3 className="display-4 mb-9">Complete MERN path from basics to advanced full-stack.
</h3>
        </div>
      </div>

      <div className="row gy-8 mb-17 text-center">
        {serviceList10.map(({ id, title, description, Icon }) => (
          <div className="col-md-6 col-lg-4" key={id}>
            <div className="d-flex flex-column align-items-center">
              <div className="icon-wrapper mb-4">
                <Icon className="icon-svg-lg solid-duo text-grape-fuchsia" />
              </div>
              <h3 className="fs-22 mb-2">{title}</h3>
              <p className="mb-0 px-lg-5">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
