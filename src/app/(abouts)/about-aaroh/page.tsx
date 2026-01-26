import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Team8 } from "components/blocks/team";
import { Clients1 } from "components/blocks/clients";
import { Process8 } from "components/blocks/process";
import Carousel from "components/reuseable/Carousel";
import ProgressList from "components/common/ProgressList";
import AccordionList from "components/common/AccordionList";
import { TestimonialCard2 } from "components/reuseable/testimonial-cards";
// CUSTOM ICON COMPONENTS
import Target from "icons/lineal/Target";
import BarChart from "icons/lineal/BarChart";
import Megaphone from "icons/lineal/Megaphone";
import SettingsThree from "icons/lineal/SettingsThree";
// CUSTOM DATA
import { testimonialList2 } from "data/testimonial-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aaroh Tech - Jaipur's Premier AI & Tech Institute",
  description: "Learn more about Aaroh Tech & AI Institute. We empower students with practical skills in AI, Data Science, Web Development, and Digital Marketing to launch successful IT careers.",
};

const SERVICES = [
  {
    id: 1,
    title: "Digital Marketing & SEO",
    Icon: <Megaphone />,
    description: `Master SEO, Google Ads, and Social Media Marketing. Learn to drive traffic and generate leads using modern AI-powered marketing tools to dominate the digital landscape.`,
  },
  {
    id: 2,
    title: "IT Career Strategy",
    Icon: <Target className="icon-svg-md text-green mb-3" />,
    description: `Strategic career planning from 12th grade to high-paying tech jobs. We provide personalized mentorship and industry-aligned roadmaps for students entering the IT sector.`,
  },
  {
    id: 3,
    title: "Full Stack Development",
    Icon: <SettingsThree />,
    description: `Become a top-tier developer. Learn React.js, Next.js, Node.js, and Python. Build real-world applications and deploy them to the cloud with expert guidance.`,
  },
  {
    id: 4,
    Icon: <BarChart />,
    title: "Data Science & Analytics",
    description: `Unlock the power of data. Master Advanced Excel, Power BI, SQL, and Python for Data Science. Transform raw data into actionable business insights.`,
  },
];

export default function AboutAaroh() {
  return (
    <Fragment>
      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-20 pt-md-14 pb-md-23 text-center">
          <div className="row">
            <div className="col-xl-5 mx-auto mb-6">
              <h1 className="display-1 mb-3">About Aaroh Tech</h1>
              <p className="lead mb-0">
                Jaipur's Premier Institute for AI, Data Science, and Computer Education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== services section ========== */}
      <section className="wrapper bg-light">
        <div className="container pb-14 pb-md-16">
          <div className="row text-center mb-12 mb-md-15">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22">
              <figure>
                <img
                  alt=""
                  className="w-auto"
                  src="/img/illustrations/i8.png"
                  srcSet="/img/illustrations/i8@2x.png 2x"
                />
              </figure>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <ProgressList />
            </div>

            <div className="col-lg-6">
              <h3 className="display-5 mb-5">
                We empower students with practical tech skills to launch high-paying careers in 2026.
              </h3>

              <p>
                At <strong>Aaroh Tech & AI Institute</strong>, we bridge the gap between traditional education and industry demands.
                Whether you want to become a <strong>Web Developer, Data Analyst, or Digital Marketer</strong>, our specialized
                courses are designed to get you job-ready in 6 months. We focus on hands-on project based learning, not just theory.
              </p>
            </div>
          </div>

          <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
            {SERVICES.map(({ id, Icon, title, description }) => (
              <div className="col-md-6 col-lg-3" key={id}>
                {Icon}
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          {/* ========== how it work section ========== */}
          <Process8 />

          {/* ========== why choose us section ========== */}
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  alt=""
                  className="w-auto"
                  src="/img/illustrations/i2.png"
                  srcSet="/img/illustrations/i2@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h2 className="fs-15 text-uppercase text-line text-primary mb-3">
                Why Choose Us?
              </h2>
              <h3 className="display-5 mb-7">
                A few reasons why our valued customers choose us.
              </h3>
              <AccordionList />
            </div>
          </div>
        </div>
      </section>

      {/* ========== team section ========== */}
      <Team8 />

      <section className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          {/* ========== testimonial section ========== */}
          <div className="row gx-lg-8 gx-xl-12 gy-6 mb-15 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  alt=""
                  className="w-auto"
                  src="/img/illustrations/i4.png"
                  srcSet="/img/illustrations/i4@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5 mt-lg-12">
              <div className="swiper-container dots-closer mb-6">
                <Carousel grabCursor slidesPerView={1} navigation={false}>
                  {testimonialList2.map((item, i) => (
                    <TestimonialCard2 key={i} {...item} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          {/* ========== clients section ========== */}
          <div className="px-lg-5">
            <Clients1 />
          </div>
        </div>
      </section>

      {/* ========== contact section ========== */}
      <section className="wrapper bg-light">
        <div className="container py-14 py-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7">
              <figure>
                <img
                  alt=""
                  className="w-auto"
                  src="/img/illustrations/i5.png"
                  srcSet="/img/illustrations/i5@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h3 className="display-4 mb-7">
                Got any questions? Don't hesitate to get in touch.
              </h3>
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-location-pin-alt" />
                  </div>
                </div>
                <div>
                  <h5 className="mb-1">Address</h5>
                  <address>C1 Kalyanpuri, Niwaru Link Road, Kalwar Road, Govindpura, Jhotwara, Jaipur, Rajasthan, India 302012</address>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-phone-volume" />
                  </div>
                </div>
                <div>
                  <h5 className="mb-1">Phone</h5>
                  <p>+91 9828658887</p>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div>
                  <div className="icon text-primary fs-28 me-4 mt-n1">
                    <i className="uil uil-envelope" />
                  </div>
                </div>
                <div>
                  <h5 className="mb-1">E-mail</h5>
                  <p className="mb-0">
                    <a href="mailto:aarohonline@gmail.com" className="link-body">
                      aarohonline@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
