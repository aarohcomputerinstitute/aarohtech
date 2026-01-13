import { ServiceCard1 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { videoEditingCurriculaum } from "data/service";

export default function VideoEditingCurriculaum() {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-5 pb-5">
        <div className="row text-center">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className="fs-20 text-uppercase b-3 text-primary">Course Curriculaum</h2>
            <h3 className="display-4 px-xl-10">
              What You’ll Learn in This Video Editing Program
            </h3>
            <p className=" mb-10 px-xl-10">Master the art of storytelling through video. Learn industry-standard software like Premiere Pro, After Effects, and DaVinci Resolve to create professional cinematics, social media reels, and motion graphics.</p>
          </div>
        </div>

        <div className="position-relative">
          <div
            className="shape rounded-circle bg-soft-blue rellax w-16 h-16"
            style={{ zIndex: 0, right: "-2.2rem", bottom: "-0.5rem" }}
          />

          <div
            className="shape bg-dot primary rellax w-16 h-17"
            style={{ zIndex: 0, top: "-0.5rem", left: "-2.2rem" }}
          />

          <div className="row gx-md-5 gy-5 text-center">
            {videoEditingCurriculaum.map((item) => (
              <ServiceCard1
                key={item.id}
                Icon={item.icon}
                title={item.title}
                linkUrl={item.link}
                linkType={item.linkType}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
