// GLOBAL CUSTOM COMPONENTS
import Carousel from "components/reuseable/Carousel";
import { TestimonialCard3 } from "components/reuseable/testimonial-cards";
// CUSTOM UTILS LIBRARY FUNCTIONS
import carouselBreakpoints from "utils/carouselBreakpoints";
// CUSTOM DATA
import { testimonialList2 } from "data/testimonial-list";

export default function Testimonial4() {
  return (
    <div className="wrapper bg-light">
      <div className="container py-14 py-md-1">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
            <h2 className="display-6 mb-3">Our Successful Students
</h2>
            <h3 className="fs-15 mb-6 px-xl-10 px-xxl-15">
              See what learners say about our Full Stack Web Development Course.
            </h3>
          </div>
        </div>

        <div className="swiper-container dots-closer mb-6">
          <Carousel
            spaceBetween={0}
            grabCursor
            navigation={false}
            breakpoints={carouselBreakpoints}>
            {testimonialList2.map((item, i) => (
              <div className="item-inner" key={i}>
                <TestimonialCard3 {...item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
