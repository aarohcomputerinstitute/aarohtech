"use client";

import Image from "next/image";
import teams from "data/team-list";
import styles from "./Team4.module.css";

export default function Team4() {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="fs-16 text-uppercase text-primary mb-3 ls-xl animate">
            Meet Our Experts
          </h2>
          <h3 className="display-4 animate" style={{ animationDelay: '0.1s' }}>
            We have a team of industry-leading <span className="text-primary">Professional Mentors</span>
          </h3>
        </div>

        <div className={styles.teamGrid}>
          {teams.slice(0, 4).map((item, index) => (
            <div
              className={`${styles.teamCard} ${styles.animate}`}
              key={item.id}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.name}
                  className={styles.memberImage}
                />
              </div>

              <div className={styles.memberDesignation}>{item.designation}</div>
              <h4 className={styles.memberName}>{item.name}</h4>
              <p className={styles.memberDescription}>{item.description}</p>

              <nav className={styles.socialLinks}>
                {item.twitterUrl && (
                  <a href={item.twitterUrl} className={styles.socialIcon} aria-label="Twitter">
                    <i className="uil uil-twitter" />
                  </a>
                )}
                {item.facebookUrl && (
                  <a href={item.facebookUrl} className={styles.socialIcon} aria-label="Facebook">
                    <i className="uil uil-facebook-f" />
                  </a>
                )}
                {item.youtubeUrl && (
                  <a href={item.youtubeUrl} className={styles.socialIcon} aria-label="YouTube">
                    <i className="uil uil-youtube" />
                  </a>
                )}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
