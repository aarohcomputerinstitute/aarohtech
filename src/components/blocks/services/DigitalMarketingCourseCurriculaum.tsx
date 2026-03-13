import { ServiceCard1 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { DigitalMarketingCourseCurriculaum } from "data/service";
import styles from "./DigitalMarketingCourseCurriculaum.module.css";

export default function DMCourseCurriculaum() {
  return (
    <section className={`wrapper bg-light ${styles.section}`}>
      <div className={`container pt-16 pb-16 ${styles.container}`}>
        <div className={`row text-center ${styles.headerRow}`}>
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 className={`fs-20 text-uppercase b-3 text-primary ${styles.eyebrow}`}>Course Curriculaum</h2>
            <h3 className={`display-4 px-xl-10 ${styles.title}`}>
              What You'll Master in This Course
            </h3>
            <p className={`mb-10 px-xl-10 ${styles.subtitle}`}>
              Gain practical accounting skills with Tally Prime, GST, payroll, and business finance to build a strong career in accounting.
            </p>
          </div>
        </div>

        <div className={`position-relative ${styles.gridWrapper}`}>
          <div
            className={`shape rounded-circle bg-soft-blue rellax w-16 h-16 ${styles.shapePrimary}`}
            style={{ zIndex: 0, right: "-2.2rem", bottom: "-0.5rem" }}
          />

          <div
            className={`shape bg-dot primary rellax w-16 h-17 ${styles.shapeDots}`}
            style={{ zIndex: 0, top: "-0.5rem", left: "-2.2rem" }}
          />

          <div className={`row gx-md-5 gy-5 text-center ${styles.cardGrid}`}>
            {DigitalMarketingCourseCurriculaum.map((item) => (
              <ServiceCard1
                key={item.id}
                Icon={item.icon}
                title={item.title}
                linkUrl={item.link}
                linkType={item.linkType}
                description={item.description}
                cardClassName={styles.card}
                iconClassName={styles.cardIcon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
