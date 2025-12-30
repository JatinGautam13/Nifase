import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./courseDetail.module.css";
import courseCardStyles from "../courses.module.css";
import courses from "@/data/courses.json";
import HomeSection7 from "@/components/Home/HomeSection7";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: course.title,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  const moduleCount = course.modules?.length ?? 0;
  const rating = Number(course.rating ?? 4.8);
  const reviewCount = Number(course.reviewCount ?? 0);
  const likedPercent = Number(course.likedPercent ?? 97);
  const enrolledCount = Number(course.enrolledCount ?? 0);
  const schedule = String(course.schedule ?? "Flexible schedule");
  const startDateLabel = String(course.startDateLabel ?? "Starts soon");
  const instructor = String(course.instructor ?? "NIFASE Faculty");

  const skills = Array.isArray(course.skills) && course.skills.length
    ? course.skills
    : (() => {
        const seen = new Set();
        const result = [];
        for (const module of course.modules ?? []) {
          const text = String(module?.title ?? "")
            .replace(/^Module\s*\d+\s*:\s*/i, "")
            .replace(/\(.*?\)/g, "")
            .trim();

          for (const piece of text
            .split(/&|,|\band\b|\bvs\b|\bfor\b|\bto\b/i)
            .map((v) => v.trim())
            .filter(Boolean)) {
            const key = piece.toLowerCase();
            if (seen.has(key)) continue;
            seen.add(key);
            result.push(piece);
            if (result.length >= 10) return result;
          }
        }
        return result;
      })();

  const initials = instructor
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  const formattedRating = Number.isFinite(rating) ? rating.toFixed(1) : "4.8";
  const formattedReviews = reviewCount
    ? `(${reviewCount.toLocaleString()} reviews)`
    : "";
  const formattedEnrolled = enrolledCount
    ? `${enrolledCount.toLocaleString()} already enrolled`
    : "";

  const getDurationMonths = (value) => {
    const text = String(value ?? "");

    const monthsMatch = text.match(/(\d+(?:\.\d+)?)\s*months?/i);
    if (monthsMatch) {
      const months = Number(monthsMatch[1]);
      return Number.isFinite(months) ? months : 0;
    }

    const weeksRangeMatch = text.match(/(\d+)\s*[–-]\s*(\d+)\s*weeks?/i);
    if (weeksRangeMatch) {
      const maxWeeks = Math.max(Number(weeksRangeMatch[1]), Number(weeksRangeMatch[2]));
      return Number.isFinite(maxWeeks) ? maxWeeks / 4 : 0;
    }

    const weeksMatch = text.match(/(\d+)\s*weeks?/i);
    if (weeksMatch) {
      const weeks = Number(weeksMatch[1]);
      return Number.isFinite(weeks) ? weeks / 4 : 0;
    }

    return 0;
  };

  const exploreCourses = courses
    .filter((c) => c.slug !== slug)
    .slice()
    .sort((a, b) => getDurationMonths(b.duration) - getDurationMonths(a.duration))
    .slice(0, 3);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.providerRow}>
              <div className={styles.provider}>NIFASE</div>
              <div className={styles.providerMeta}>{course.category}</div>
            </div>

            <h1 className={styles.title}>{course.title}</h1>

            <div className={styles.instructorRow}>
              <span className={styles.avatar} aria-hidden="true">
                {initials || "NF"}
              </span>
              <span className={styles.instructorText}>
                Instructor: <strong>{instructor}</strong>
              </span>
            </div>

            <div className={styles.ctaRow}>
              <Link className={styles.ctaButton} href="/contact-us">
                Enroll now
                <span className={styles.ctaSub}>{startDateLabel}</span>
              </Link>

              <div className={styles.ctaMeta}>
                <div className={styles.enrolled}>{formattedEnrolled}</div>
                <div className={styles.included}>
                  Included with <span className={styles.plus}>NIFASE Institute</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <div className={styles.heroArt}>
              <div className={styles.heroRings} />
              {course.image && (
                <div className={styles.heroImageWrap}>
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className={styles.heroImage}
                    priority={false}
                  />
                </div>
              )}
            </div>
          </div>
        </header>

        <section className={styles.stats} aria-label="Course stats">
          <div className={styles.stat}>
            <div className={styles.statTop}>{moduleCount} modules</div>
            <div className={styles.statBottom}>Module-wise syllabus</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statTop}>
              {formattedRating} <span className={styles.star} aria-hidden="true">★</span>
            </div>
            <div className={styles.statBottom}>{formattedReviews || "Rating"}</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statTop}>{course.level}</div>
            <div className={styles.statBottom}>Level</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statTop}>{schedule}</div>
            <div className={styles.statBottom}>Learn at your own pace</div>
          </div>

          <div className={styles.stat}>
            <div className={styles.statTop}>{likedPercent}%</div>
            <div className={styles.statBottom}>Learners liked this course</div>
          </div>
        </section>

        <nav className={styles.tabs} aria-label="Course navigation">
          <a className={styles.tab} href="#about">About</a>
          <a className={styles.tab} href="#modules">Modules</a>
        </nav>

        <section id="about" className={styles.about} aria-label="About this course">
          <p className={styles.desc}>{course.shortDescription}</p>

          {skills.length > 0 && (
            <div className={styles.skillsBlock} id="skills">
              <h2 className={styles.sectionTitle}>Skills you'll gain</h2>
              <div className={styles.skills}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.skillChip}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        <section id="modules" className={styles.modules} aria-label="Course modules">
          <h2 className={styles.sectionTitle}>Modules</h2>
          <div className={styles.moduleGrid}>
            {course.modules.map((module, idx) => (
              <details key={`${course.id}-${idx}`} className={styles.module}>
                <summary className={styles.moduleSummary}>
                  <span className={styles.moduleTitle}>{module.title}</span>
                  <span className={styles.chevron} aria-hidden="true">
                    ▾
                  </span>
                </summary>
                <div className={styles.moduleBody}>
                  <ul className={styles.list}>
                    {module.items.map((item, itemIdx) => (
                      <li key={`${course.id}-${idx}-${itemIdx}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        {exploreCourses.length > 0 && (
          <section className={styles.exploreSection} aria-label="Explore courses">
            <div className={styles.exploreHeader}>
              <h2 className={styles.exploreTitle}>
                Explore <span>Courses</span>
              </h2>
              <p className={styles.exploreSubtitle}>
                Top programs with the longest duration.
              </p>
            </div>

            <div className={courseCardStyles.grid}>
              {exploreCourses.map((item) => {
                const highlights = [];
                for (const module of item.modules ?? []) {
                  for (const text of module.items ?? []) {
                    highlights.push(text);
                    if (highlights.length >= 3) break;
                  }
                  if (highlights.length >= 3) break;
                }

                return (
                  <article key={item.id} className={courseCardStyles.card}>
                    <div className={courseCardStyles.imageWrap}>
                      {item.popular && (
                        <span
                          className={courseCardStyles.popularBadge}
                          aria-label="Popular course"
                        >
                          Popular
                        </span>
                      )}
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={courseCardStyles.image}
                        priority={false}
                      />
                    </div>

                    <div className={courseCardStyles.cardInner}>
                      <div className={courseCardStyles.badges}>
                        <span className={courseCardStyles.badge}>{item.level}</span>
                        <span className={courseCardStyles.badge}>{item.duration}</span>
                      </div>

                      <div className={courseCardStyles.meta}>{item.category}</div>
                      <h3 className={courseCardStyles.courseTitle}>{item.title}</h3>
                      <p className={courseCardStyles.desc}>{item.shortDescription}</p>

                      {highlights.length > 0 && (
                        <ul
                          className={courseCardStyles.highlights}
                          aria-label="Key topics"
                        >
                          {highlights.map((text) => (
                            <li key={text} className={courseCardStyles.highlightItem}>
                              {text}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className={courseCardStyles.actions}>
                        <div className={courseCardStyles.details}>
                          {item.modules?.length || 0} modules
                        </div>
                        <Link
                          className={courseCardStyles.button}
                          href={`/courses/${item.slug}`}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className={styles.exploreMoreWrap}>
              <Link className={styles.exploreMoreButton} href="/courses">
                Explore More Courses
              </Link>
            </div>
          </section>
        )}
        <HomeSection7 />
      </div>
    </main>
  );
}
