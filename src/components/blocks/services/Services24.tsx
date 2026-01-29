"use client";

import NextLink from "components/reuseable/links/NextLink";
import { serviceList12 } from "data/service";
import styles from "./Services24.module.css";

export default function Services24() {
  return (
    <section className={styles.serviceSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={`fs-16 text-uppercase text-primary mb-3 ls-xl ${styles.animate}`}>
            Top Computer Training Institute
          </h2>
          <h3 className={`display-4 ${styles.animate}`} style={{ animationDelay: '0.1s' }}>
            Master High-Demand <span className={styles.textGradient}>IT & AI Skills</span> for Career Growth
          </h3>
        </div>

        <div className="row grid-view gy-8 gx-lg-8 gx-xl-10" data-cues="slideInUp">
          {serviceList12.map(({ id, image, title, description, gotolink }, index) => (
            <div className="col-md-6 col-lg-4 mb-5" key={id}>
              <div className={styles.courseCard}>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.courseImage}
                    src={image["1x"]}
                    alt={title}
                    loading="lazy"
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.courseTitle}>{title}</h3>
                  <p className={styles.courseDescription}>{description}</p>

                  <div className={styles.courseFooter}>
                    <NextLink
                      title={
                        <span className={styles.learnMoreBtn}>
                          Explore Details
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      }
                      href={gotolink || '#'}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
