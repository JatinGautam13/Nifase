"use client";

import { useState } from "react";
import styles from "./gallerysection.module.css";

export default function GallerySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const UsersIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const BuildingIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M3 21h18" />
      <path d="M6 21V5a2 2 0 0 1 2-2h3v18" />
      <path d="M13 21V9a2 2 0 0 1 2-2h3v14" />
      <path d="M9 7h.01" />
      <path d="M9 11h.01" />
      <path d="M9 15h.01" />
      <path d="M16 11h.01" />
      <path d="M16 15h.01" />
    </svg>
  );

  const GraduationCapIcon = (props) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  );

  const images = [
    { src: "6.webp", label: "Trading Floor" },
    { src: "7.webp", label: "Study Zone" },
    { src: "IMG_4066.webp", label: "Corridor" },
    { src: "IMG_4067.webp", label: "Classroom" },
    { src: "IMG_1785.jpg", label: "Library" },
    { src: "IMG_1797.jpg", label: "Live Analysis" },
    { src: "18.webp", label: "Group Discussion Tech Lab" },
    { src: "IMG_4064.webp", label: "Group Discussion" },
    { src: "classes with gulshan sir.webp", label: "Mentor Session" }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT — GALLERY (3x3 with Labels) */}
        <div className={styles.galleryBlock}>
          <div className={`${styles.gallery} ${!isExpanded ? styles.galleryCollapsed : ""}`}>
            {images.map(({ src, label }, idx) => (
              <div 
                className={`${styles.imageCard} ${styles[`row${Math.floor(idx / 3) + 1}`]} ${styles[`col${(idx % 3) + 1}`]}`} 
                key={src + idx}
              >
                <img src={`/center/${src}`} alt={label} loading="lazy" />
                <div className={styles.imageLabel}>
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>

          {images.length > 4 && (
            <div className={styles.seeMoreWrap}>
              <button
                type="button"
                className={styles.seeMoreButton}
                onClick={() => setIsExpanded((v) => !v)}
                aria-label={isExpanded ? "See less images" : "See more images"}
              >
                {isExpanded ? "See less" : "See more"}
              </button>
            </div>
          )}
        </div>

        {/* RIGHT — ENHANCED CONTENT */}
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Experience Learning in a <span>Professional Campus</span>
          </h2>

          <p className={styles.description}>
            Our NIFASE campus reflects a real corporate trading environment — focused, distraction-free, and performance-driven with state-of-the-art facilities.
          </p>
{/* 
          <p className={styles.description}>
            From collaborative trading floors and advanced classrooms to mentor-led discussion zones and tech labs, everything is structured for seamless industry transition.
          </p> */}

          <div className={styles.featureGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <UsersIcon />
              </div>
              <div>
                <h4 className={styles.featureTitle}>Small Batches</h4>
                <p className={styles.featureText}>Max 15 students per batch for personalized attention</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <BuildingIcon />
              </div>
              <div>
                <h4 className={styles.featureTitle}>Corporate Setup</h4>
                <p className={styles.featureText}>Real trading desks & live NSE data feeds</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <GraduationCapIcon />
              </div>
              <div>
                <h4 className={styles.featureTitle}>Expert Mentors</h4>
                <p className={styles.featureText}>15+ years industry experience instructors</p>
              </div>
            </div>
          </div>

          <button className={styles.ctaButton}>
            Book Campus Tour
          </button>
        </div>
      </div>
    </section>
  );
}
