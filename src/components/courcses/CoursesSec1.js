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
          <Link className={styles.joinButton} href="/contact-us">
            Join Now
            <ArrowRight className={styles.joinIcon} />
          </Link>
          
          <a href="#reviews" className={styles.reviewsLink}>
            <Star className={styles.starIcon} />
            72k+ Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSec1;