import styles from "./coursessection.module.css";
import Link from "next/link";
import Image from "next/image";
import courses from "@/data/courses.json";
import { Star } from "lucide-react";

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .trim();
}

function isSixMonthDuration(duration) {
  const d = normalize(duration);
  return /\b6\s*month(s)?\b/.test(d);
}

export default function CoursesSection() {
  const coursesToShow = courses
    .map((course, index) => ({ course, index }))
    .sort((a, b) => {
      const aPopular = isSixMonthDuration(a.course?.duration);
      const bPopular = isSixMonthDuration(b.course?.duration);

      if (aPopular !== bPopular) return aPopular ? -1 : 1;
      return a.index - b.index;
    })
    .map(({ course }) => course)
    .slice(0, 6);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Our <span>Professional Programs</span>
        </h2>

        <p className={styles.subheading}>
          Industry-aligned certifications and diplomas designed for real-world
          financial market careers.
        </p>

        <div className={styles.grid}>
          {coursesToShow.map((course) => {
            const highlights = [];
            for (const module of course.modules ?? []) {
              for (const item of module.items ?? []) {
                highlights.push(item);
                if (highlights.length >= 3) break;
              }
              if (highlights.length >= 3) break;
            }

            const rating = Number(course.rating ?? 0);
            const reviewCount = Number(course.reviewCount ?? 0);
            const formattedReviewCount = reviewCount
              ? `(${reviewCount.toLocaleString()} ratings)`
              : "";

            return (
              <article key={course.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  {isSixMonthDuration(course.duration) && (
                    <span
                      className={styles.popularBadge}
                      aria-label="Popular course"
                    >
                      Popular
                    </span>
                  )}
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.image}
                    priority={false}
                  />
                </div>

                <div className={styles.cardInner}>
                  <div className={styles.badges}>
                    <span className={styles.badge}>{course.level}</span>
                    <span className={styles.badge}>{course.duration}</span>
                  </div>

                  {rating > 0 && (
                    <div className={styles.ratingRow} aria-label="Course rating">
                      <Star className={styles.starIcon} aria-hidden="true" />
                      <span className={styles.ratingValue}>
                        {Number.isFinite(rating) ? rating.toFixed(1) : ""}
                      </span>
                      {formattedReviewCount && (
                        <span className={styles.ratingCount}>
                          {formattedReviewCount}
                        </span>
                      )}
                    </div>
                  )}

                  <div className={styles.meta}>{course.category}</div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <p className={styles.desc}>{course.shortDescription}</p>

                  {highlights.length > 0 && (
                    <ul className={styles.highlights} aria-label="Key topics">
                      {highlights.map((text) => (
                        <li key={text} className={styles.highlightItem}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className={styles.actions}>
                    <div className={styles.details}>
                      {course.modules?.length || 0} modules
                    </div>
                    <Link
                      className={styles.button}
                      href={`/courses/${course.slug}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.moreWrap}>
          <Link className={styles.moreButton} href="/courses">
            Explore More Courses
          </Link>
        </div>
      </div>
    </section>
  );
}