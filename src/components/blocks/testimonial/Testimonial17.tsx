import MasonryGrid from "components/MasonryGrid";
import { TestimonialCard3 } from "components/reuseable/testimonial-cards";
// CUSTOM DATA
import { testimonialList } from "data/demo-7";

export default function Testimonial17() {
  return (
    <section className="wrapper bg-gradient-primary">
      <div className="container pt-12 pt-lg-8 pb-14 pb-md-17">
        <div className="row text-center">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="fs-16 text-uppercase text-primary mb-3">🌟 Our Happy Students 🌟
</h2>
            <h3 className="display-3 mb-10 px-xxl-10">
Don’t just take our word for it — hear from our learners!
            </h3>
            <p>At Aaroh Computer Classes, Kalwar Road Jaipur, we’re proud to have trained hundreds of students who’ve transformed their skills and careers through our practical computer courses.</p>
          </div>
        </div>

        <div className="grid">
          <MasonryGrid className="row isotope gy-6">
            {testimonialList.map((item) => (
              <div className="item col-md-4" key={item.id}>
                <TestimonialCard3 {...item} shadow />
              </div>
            ))}
          </MasonryGrid>
        </div>
      </div>
    </section>
  );
}
