import React from 'react';
import styles from './WhyJoinSection.module.css';

export default function WhyJoinSection() {
  const reasons = [
    {
      icon: "📊",
      title: "In-Depth Market Knowledge",
      description: "Learn technical analysis, fundamental analysis, derivatives, and market psychology with structured modules.",
      color: "#6366f1"
    },
    {
      icon: "🛡️",
      title: "Risk & Capital Management",
      description: "Understand how professionals manage risk, protect capital, and build sustainable trading strategies.",
      color: "#8b5cf6"
    },
    {
      icon: "🎯",
      title: "Live Practical Training",
      description: "Gain hands-on experience through live market sessions, real-time analysis, and trading simulations.",
      color: "#ec4899"
    },
    {
      icon: "💰",
      title: "Multiple Income Opportunities",
      description: "Develop skills for trading, investing, portfolio management, and long-term wealth creation.",
      color: "#10b981"
    },
    {
      icon: "🚀",
      title: "Strong Career Pathways",
      description: "Open doors to roles in brokerage firms, research houses, advisory firms, and proprietary trading desks.",
      color: "#f59e0b"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.bgPattern}></div>
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.mainHeading}>
            Why Join <span className={styles.highlight}>Stock Market</span>
          </h2>
          
          <div className={styles.introContainer}>
            <p className={styles.introLarge}>
              Many people believe stock market trading is based on <strong>luck</strong>.
            </p>
            <p className={styles.introNormal}>
              In reality, successful trading is built on <strong>knowledge</strong>, <strong>strategy</strong>, <strong>discipline</strong>, and <strong>risk control</strong>.
            </p>
          </div>
        </div>

        {/* Main Content Box */}
        <div className={styles.mainBox}>
          <div className={styles.boxHeader}>
            <div className={styles.headerLine}></div>
            <h3 className={styles.boxTitle}>
              Transform Your Career with NIFASE Stock Market Program
            </h3>
            <p className={styles.boxSubtitle}>
              Here's what makes our program different from the rest
            </p>
          </div>

          {/* Reasons List */}
          <div className={styles.reasonsList}>
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className={styles.reasonItem}
                style={{ '--accent-color': reason.color, '--delay': `${index * 0.1}s` }}
              >
                <div className={styles.reasonLeft}>
                  <div className={styles.iconCircle}>
                    <span className={styles.icon}>{reason.icon}</span>
                  </div>
                  <div className={styles.reasonContent}>
                    <h4 className={styles.reasonTitle}>{reason.title}</h4>
                    <p className={styles.reasonDesc}>{reason.description}</p>
                  </div>
                </div>
                <div className={styles.numberBadge}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={styles.bottomCta}>
            <div className={styles.ctaContent}>
              <p className={styles.ctaTitle}>Ready to Begin Your Trading Journey?</p>
              <p className={styles.ctaSubtext}>Join thousands of successful traders who started with NIFASE</p>
            </div>
            <button className={styles.ctaBtn}>
              Enroll Now
              <span className={styles.btnArrow}>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}