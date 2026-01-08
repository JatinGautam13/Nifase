import React from 'react';
import styles from './TrainingModules.module.css';

export default function TrainingModules() {
  const modules = [
    {
      title: "Technical Analysis",
      description: "Analyze price charts and patterns to forecast future market movements.",
      icon: "https://cdn-icons-png.flaticon.com/128/2103/2103633.png",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "News Analysis",
      description: "Interpret financial news and global events to anticipate market reactions.",
      icon: "https://cdn-icons-png.flaticon.com/128/3242/3242257.png",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Option Training",
      description: "Use options and futures to hedge risks and analyze market trends.",
      icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Scalping Training",
      description: "Learn Scalping Training with DICC Institute, Learn to trade quickly with us.",
      icon: "https://cdn-icons-png.flaticon.com/128/2920/2920349.png",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Fundamental Analysis",
      description: "Evaluate a company's financial health and economic factors to determine its intrinsic value.",
      icon: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Intraday Training",
      description: "Intraday Training by DICC will make you perfect. Get practical training.",
      icon: "https://cdn-icons-png.flaticon.com/128/1705/1705312.png",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>Training Course Modules</span>
          <h2 className={styles.heading}>What will <span>you learn?</span> </h2>
          <p className={styles.subheading}>
            Master the essential skills to become a successful trader
          </p>
        </div>

        {/* Modules Grid */}
        <div className={styles.modulesGrid}>
          {modules.map((module, index) => (
            <div 
              key={index} 
              className={styles.moduleCard}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className={styles.cardInner}>
                {/* Icon Section */}
                <div 
                  className={styles.iconWrapper}
                  style={{ background: module.gradient }}
                >
                  <img 
                    src={module.icon} 
                    alt={module.title}
                    className={styles.icon}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className={styles.iconGlow}></div>
                </div>

                {/* Content Section */}
                <div className={styles.content}>
                  <h3 className={styles.title}>{module.title}</h3>
                  <p className={styles.description}>{module.description}</p>
                  
                  <div className={styles.learnMore}>
                    <span>Learn more</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                    </svg>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={styles.cardDecor}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className={styles.ctaSection}>
          <p className={styles.ctaText}>Ready to start your trading journey?</p>
          <button className={styles.ctaButton}>
            View Full Curriculum
            <span className={styles.buttonIcon}>→</span>
          </button>
        </div> */}
      </div>
    </section>
  );
}