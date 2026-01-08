"use client";

import styles from "./TeamSection.module.css";

const trainer = {
  role: "Head Trainer • NSE & Derivatives",
  name: "Gaurav Heera",
  image: "/team/gaurav.png",
  experience: "8+ years live market experience",
  highlight:
    "Specializes in intraday, index trading, and building rule‑based systems for retail traders.",
  rating: 4.9,
  ratingCount: "320+ reviews",
};

export default function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.gradientOrb} />
      <div className={styles.gradientOrbRight} />

      <div className={styles.inner}>
        {/* LEFT – TEXT ABOUT TRAINER */}
        <div className={styles.left}>
          <div className={styles.chipRow}>
            <span className={styles.chipDot} />
            <span className={styles.chipText}>Meet Your Trainer</span>
          </div>

          <h2 className={styles.heading}>
            Learn Directly from
            <br />
            <span>Our Lead Market Mentor</span>
          </h2>

          <p className={styles.subtext}>
            At NIFASE, you don’t learn from generic YouTube educators or
            recorded slides. Your trainer is a full‑time trader who reads price,
            orderflow, and sentiment every single day.
          </p>

          <ul className={styles.points}>
            <li>
              Designs step‑by‑step frameworks so even beginners can understand
              complex market structures.
            </li>
            <li>
              Focuses on execution, risk management, and psychology — not just
              theory and patterns.
            </li>
            <li>
              Reviews student trades, gives actionable feedback, and helps you
              build your own trading plan.
            </li>
          </ul>
        </div>

        {/* RIGHT – SINGLE TRAINER CARD */}
        <div className={styles.right}>
          <article className={styles.card}>
            <div className={styles.cardGlow} />

            <div className={styles.avatarRing}>
              <div className={styles.avatarGlow} />
              <img
                src={trainer.image}
                alt={trainer.name}
                className={styles.avatar}
              />
            </div>

            <div className={styles.cardBody}>
              <p className={styles.role}>{trainer.role}</p>
              <p className={styles.name}>{trainer.name}</p>
              <p className={styles.experience}>{trainer.experience}</p>
              <p className={styles.highlight}>{trainer.highlight}</p>

              {/* rating row */}
              <div className={styles.ratingRow}>
                <div
                  className={styles.stars}
                  aria-label={`Rated ${trainer.rating} out of 5`}
                >
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.star}>★</span>
                  <span className={styles.starHalf}>★</span>
                </div>
                <div className={styles.ratingText}>
                  <span className={styles.ratingValue}>{trainer.rating}</span>
                  <span className={styles.ratingCount}>
                    {trainer.ratingCount}
                  </span>
                </div>
              </div>

              <div className={styles.badgeRow}>
                <div className={styles.badge}>
                  <span className={styles.badgeDot} />
                  <span>Live Market Sessions</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeDotSecondary} />
                  <span>1:1 Doubt Support</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
