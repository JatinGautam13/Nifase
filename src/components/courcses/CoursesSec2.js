"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import styles from "./CoursesSec2.module.css";

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .trim();
}

function isSixMonthDuration(duration) {
  const d = normalize(duration);
  return /\b6\s*month(s)?\b/.test(d);
}

function courseSearchText(course) {
  const parts = [
    course?.title,
    course?.shortDescription,
    course?.category,
    course?.level,
    course?.duration,
    ...(course?.skills ?? []),
  ];

  for (const mod of course?.modules ?? []) {
    parts.push(mod?.title);
    for (const item of mod?.items ?? []) parts.push(item);
  }

  return normalize(parts.filter(Boolean).join(" "));
}

export default function CoursesSec2({ courses = [] }) {
  const [query, setQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const categories = useMemo(() => {
    const set = new Set();
    for (const c of courses) if (c?.category) set.add(c.category);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [courses]);

  const levels = useMemo(() => {
    const set = new Set();
    for (const c of courses) if (c?.level) set.add(c.level);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [courses]);

  const filtered = useMemo(() => {
    const q = normalize(query);

    const matches = courses.filter((course) => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(course.category)) {
        return false;
      }
      if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
        return false;
      }
      if (!q) return true;
      return courseSearchText(course).includes(q);
    });

    return matches
      .map((course, index) => ({ course, index }))
      .sort((a, b) => {
        const aPopular = isSixMonthDuration(a.course?.duration);
        const bPopular = isSixMonthDuration(b.course?.duration);

        if (aPopular !== bPopular) return aPopular ? -1 : 1;
        return a.index - b.index;
      })
      .map(({ course }) => course);
  }, [courses, query, selectedCategories, selectedLevels]);

  const toggleInList = (list, value, setList) => {
    setList((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const clearAll = () => {
    setQuery("");
    setSelectedCategories([]);
    setSelectedLevels([]);
  };

  return (
    <main id="all-courses" className={styles.page}>
      <div className={styles.container}>
        <section className={styles.wrapper} aria-label="Search and filter courses">
          <header className={styles.header}>
            <h1 className={styles.title}>
              All <span>Courses</span>
            </h1>
            <p className={styles.subtitle}>
              Explore job-oriented programs. Use search and filters to find the right course.
            </p>
          </header>

          <div className={styles.topbar}>
            <div className={styles.searchBox}>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
                placeholder="Search courses, topics, skills…"
                aria-label="Search courses"
              />
            </div>

            <div className={styles.topbarMeta}>
              <div className={styles.count}>{filtered.length} results</div>
              <button type="button" onClick={clearAll} className={styles.clearBtn}>
                Clear
              </button>
            </div>
          </div>

          <div className={styles.layout}>
            <aside className={styles.sidebar} aria-label="Filters">
              <button type="button" onClick={clearAll} className={styles.resetBtn}>
                Reset filters
              </button>

              <div className={styles.filterCard}>
                <div className={styles.filterTitle}>Category</div>
                <div className={styles.filterList}>
                  {categories.map((cat) => (
                    <label key={cat} className={styles.filterItem}>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleInList(selectedCategories, cat, setSelectedCategories)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.filterCard}>
                <div className={styles.filterTitle}>Level</div>
                <div className={styles.filterList}>
                  {levels.map((lvl) => (
                    <label key={lvl} className={styles.filterItem}>
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(lvl)}
                        onChange={() => toggleInList(selectedLevels, lvl, setSelectedLevels)}
                      />
                      <span>{lvl}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div className={styles.results}>
              <section className={styles.grid} aria-label="Course list">
                {filtered.map((course) => {
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
                          <span className={styles.popularBadge} aria-label="Popular course">
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
                              <span className={styles.ratingCount}>{formattedReviewCount}</span>
                            )}
                          </div>
                        )}

                        <div className={styles.meta}>{course.category}</div>

                        <h2 className={styles.courseTitle}>{course.title}</h2>
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
                          <div className={styles.details}>{course.modules?.length || 0} modules</div>
                          <Link className={styles.button} href={`/courses/${course.slug}`}>
                            View Details
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}