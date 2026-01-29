"use client";

import Image from "next/image";
import NextLink from "components/reuseable/links/NextLink";
import styles from "./HeroMain.module.css";

export default function HeroMain() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Content Area */}
          <div className={styles.heroContent} data-cue="fadeIn">
            <h1 className={styles.heroHeading}>
              Master Advanced Computer & AI Skills with{" "}
              <span className={styles.brandHighlight}>Aaroh</span>
            </h1>

            <p className={styles.heroDescription}>
              Gain industry-leading expertise in Computer Programming, AI Tools, and
              Future-Tech Development. Join Jaipur's premier institute to build a
              high-growth career in the digital era.
            </p>

            {/* Two-Column Checkmark List */}
            <div className={styles.checkmarkGrid} data-cues="fadeIn">
              <div className={styles.checkmarkItem}>
                <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Computer Programming</span>
              </div>

              <div className={styles.checkmarkItem}>
                <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>AI & Automation</span>
              </div>

              <div className={styles.checkmarkItem}>
                <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Web Development</span>
              </div>

              <div className={styles.checkmarkItem}>
                <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Industry Training</span>
              </div>

              <div className={styles.checkmarkItem}>
                <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Digital Marketing</span>
              </div>

              <div className={styles.checkmarkItem}>
                <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Career Certification</span>
              </div>
            </div>

            {/* CTA and Satisfaction */}
            <div className={styles.ctaRow} data-cue="fadeIn" data-delay="300">
              <NextLink
                href="/courses"
                className={styles.ctaButton}
                title="Explore Our Courses"
              />
              <div className={styles.satisfactionBadge}>
                <span className={styles.percentageText}>98%</span>
                <span className={styles.badgeLabel}>Student<br />Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Visual Area - Circular Image */}
          <div className={styles.heroVisual} data-cue="zoomIn">
            <div className={styles.circleContainer}>
              {/* Dotted Rings */}
              <div className={styles.dottedRing1}></div>
              <div className={styles.dottedRing2}></div>
              <div className={styles.dottedRing3}></div>

              <div className={styles.circleOuter}>
                <div className={styles.circleInner}>
                  <Image
                    src="/img/hero-professional-illustration.png"
                    alt="Aaroh Tech - Professional Programming and AI Training"
                    width={400}
                    height={400}
                    priority
                    className={styles.circleImage}
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className={`${styles.floatingBadge} ${styles.badge1}`}>
                <span className={styles.badgeText}>10K+ Students</span>
              </div>
              <div className={`${styles.floatingBadge} ${styles.badge2}`}>
                <span className={styles.badgeText}>Expert Trainers</span>
              </div>
              <div className={`${styles.floatingBadge} ${styles.badge3}`}>
                <span className={styles.badgeText}>100% Placement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
