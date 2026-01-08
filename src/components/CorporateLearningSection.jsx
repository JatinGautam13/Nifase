import styles from "./newsection.module.css";

export default function NewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Unlock Career at the <span>Top 1%</span> of the Industry
          </h2>

          <p className={styles.subheading}>
            Corporate-Style Financial Learning
          </p>

          <ul className={styles.list}>
            <li>
              <div className={styles.cardTitle}>Live Market Exposure</div>
              <div className={styles.preview}>
                Train with real-time NSE/BSE data and professional trading tools.
              </div>
            </li>
            <li>
              <div className={styles.cardTitle}>Corporate Trading Environment</div>
              <div className={styles.preview}>
                Learn in a setup that mirrors real trading desks and financial firms.
              </div>
            </li>
            <li>
              <div className={styles.cardTitle}>Hands-On Trading Practice</div>
              <div className={styles.preview}>
                Practical training in Equity, F&O, Intraday, Swing & Positional Trading.
              </div>
            </li>
            <li>
              <div className={styles.cardTitle}>Real Market Case Studies</div>
              <div className={styles.preview}>
                Work on actual market scenarios from Indian & global markets.
              </div>
            </li>
            <li>
              <div className={styles.cardTitle}>Structured Tasks & Deadlines</div>
              <div className={styles.preview}>
                Trading assignments with timelines and performance benchmarks.
              </div>
            </li>
            <li>
              <div className={styles.cardTitle}>1:1 Expert Mentorship</div>
              <div className={styles.preview}>
                Personal guidance from experienced traders and finance professionals.
              </div>
            </li>
            <li>
              <div className={styles.cardTitle}>Risk & Capital Management</div>
              <div className={styles.preview}>
                Learn professional risk control, position sizing, and discipline.
              </div>
            </li>
            <li>
              <div className={styles.cardTitle}>Trader Psychology Training</div>
              <div className={styles.preview}>
                Build the mindset required to survive and grow in real markets.
              </div>
            </li>
            <li>
              <div className={styles.cardTitle}>Industry-Focused Learning</div>
              <div className={styles.preview}>
                Learn how institutional traders and analysts actually operate.
              </div>
            </li>
             <li>
              <div className={styles.cardTitle}>Corporate-Style Learning</div>
              <div className={styles.preview}>
                Learn how institutional traders and analysts actually operate.
              </div>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE - SVG LOGOS ON LEFT */}
        <div className={styles.right}>
          <h3 className={styles.rightTitle}>Trusted by <span>India's Top</span> Firms</h3>

          <div className={styles.companyGrid}>
            {[
              {
                name: "NSE India",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 40" fill="none">
                    <rect x="8" y="8" width="104" height="24" rx="4" fill="#0066CC"/>
                    <text x="20" y="26" fontSize="16" fontWeight="700" fill="white">NSE</text>
                  </svg>
                )
              },
              {
                name: "BSE India",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 40" fill="none">
                    <circle cx="25" cy="20" r="12" fill="#FF6B00"/>
                    <text x="42" y="26" fontSize="16" fontWeight="700" fill="#FF6B00">BSE</text>
                  </svg>
                )
              },
              {
                name: "HDFC Securities",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 40" fill="none">
                    <rect x="8" y="8" width="104" height="24" rx="6" fill="#D32F2F"/>
                    <text x="20" y="26" fontSize="14" fontWeight="700" fill="white">HDFC Sec</text>
                  </svg>
                )
              },
              {
                name: "ICICI Direct",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 35" fill="none">
                    <rect x="8" y="6" width="104" height="22" rx="4" fill="#0070BA"/>
                    <text x="20" y="23" fontSize="13" fontWeight="700" fill="white">ICICI Direct</text>
                  </svg>
                )
              },
              {
                name: "Zerodha",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 40" fill="#00C4B4">
                    <path d="M15 20 Q60 8 105 20 Q60 32 15 20 Z"/>
                    <text x="40" y="26" fontSize="14" fontWeight="700" fill="white">Zerodha</text>
                  </svg>
                )
              },
              {
                name: "Angel One",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 40" fill="#FF6B35">
                    <path d="M15 15 L60 25 L105 15 Z"/>
                    <text x="35" y="26" fontSize="14" fontWeight="700" fill="white">Angel One</text>
                  </svg>
                )
              },
              {
                name: "Kotak Securities",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 35" fill="#F9A000">
                    <rect x="12" y="6" width="96" height="22" rx="4"/>
                    <text x="24" y="23" fontSize="13" fontWeight="700" fill="#000">Kotak Sec</text>
                  </svg>
                )
              },
              {
                name: "Motilal Oswal",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 40" fill="#0066CC">
                    <circle cx="60" cy="20" r="16"/>
                    <text x="42" y="26" fontSize="16" fontWeight="700" fill="white">MO</text>
                  </svg>
                )
              },
              {
                name: "Sharekhan",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 35" fill="#E50914">
                    <path d="M15 20 Q60 8 105 20 Q60 32 15 20 Z"/>
                    <text x="40" y="24" fontSize="13" fontWeight="700" fill="white">Sharekhan</text>
                  </svg>
                )
              },
              {
                name: "Upstox",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 40" fill="#6251D5">
                    <rect x="12" y="10" width="96" height="20" rx="8"/>
                    <text x="28" y="26" fontSize="14" fontWeight="700" fill="white">Upstox</text>
                  </svg>
                )
              },
              {
                name: "Groww",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 40" fill="#00C4B4">
                    <circle cx="25" cy="20" r="10"/>
                    <circle cx="60" cy="20" r="10"/>
                    <circle cx="95" cy="20" r="10"/>
                  </svg>
                )
              },
              {
                name: "5Paisa",
                svg: (
                  <svg className={styles.svgLogo} viewBox="0 0 120 35" fill="#FF6B00">
                    <rect x="12" y="7" width="96" height="21" rx="6"/>
                    <text x="24" y="24" fontSize="13" fontWeight="700" fill="white">5Paisa</text>
                  </svg>
                )
              }
            ].map(({ name, svg }) => (
              <div key={name} className={styles.companyCard}>
                <div className={styles.logoContainer} aria-hidden="true">{svg}</div>
                <span className={styles.companyName}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
