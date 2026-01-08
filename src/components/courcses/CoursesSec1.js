import React from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import styles from "./CoursesSec1.module.css";

const CoursesSec1 = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          From Basics to Survive,<br />
          Grow Your <span className={styles.highlight}>Trading Skills</span>
        </h1>
        
        <p className={styles.subtitle}>
          Develop confidence through expert-led lessons, real strategies,<br />
          and a supportive learning community.
        </p>
        
        <div className={styles.actions}>
          <Link className={styles.joinButton} href="#all-courses">
            Join Now
            <ArrowRight className={styles.joinIcon} />
          </Link>

          <Link className={styles.contactButton} href="/contact-us">
            Contact Now
          </Link>
        </div>

        <a href="#reviews" className={styles.reviewsBottom}>
          <Star className={styles.starIcon} />
          72k+ Reviews
        </a>
      </div>
    </section>
  );
};

export default CoursesSec1;