"use client";

import Image from "next/image";
import teams from "data/team-list";
import styles from "./Team4.module.css";

export default function Team4() {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.sectionHeader} data-cue="fadeIn">
          <h2 className="fs-16 text-uppercase text-primary mb-3 ls-xl">
            Meet Our Experts
          </h2>
          <h3 className="display-4">
            We have a team of industry-leading <span className="text-primary">Professional Mentors</span>
          </h3>
        </div>

        <div className={styles.teamGrid} data-cues="slideInUp">
          {teams.slice(0, 4).map((item) => (
            <div className={styles.teamCard} key={item.id}>
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
                {item.linkedinUrl && (
                  <a href={item.linkedinUrl} className={styles.socialIcon} aria-label="LinkedIn">
                    <i className="uil uil-linkedin" />
                  </a>
                )}
                {item.instagramUrl && (
                  <a href={item.instagramUrl} className={styles.socialIcon} aria-label="Instagram">
                    <i className="uil uil-instagram" />
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
