import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import styles from './homeSection1.module.css';

const HomeSection1 = ({ user }) => {
    return (
        <div className={styles.container}>
            {/* Hero Content */}
            <div className={styles.heroWrapper}>
                <div className={styles.heroContent}>
                    {/* Badge */}
                    

                    {/* Main Headline */}
                    <h1 className={styles.heading}>
                        Master The <span className={styles.gradient}>Stock Market</span> & <span className={styles.gradient}>Finance</span>
                    </h1>

                    

                    {/* Highlight Line */}
                    <div className={styles.gradient} style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                        Trading, Investment, And Financial Markets
                    </div>

                    {/* Subheadline */}
                    <p className={styles.description}>
                        Launch your career with practical stock market & finance training aligned with real market conditions.<br className={styles.lineBreak} />
                    </p>

                    {/* CTA Button */}
                    <div className={styles.ctaWrapper}>
                        <Link 
                            href={user ? "/dashboard" : "/auth/sign-in"} 
                            className={styles.ctaButton}
                        >
                            Start learning now
                            <ArrowRightIcon className={styles.ctaIcon} />
                        </Link>
                        
                    </div>
                    {/* Scrolling Courses Ticker */}
                   <div className={styles.tickerWrapper}>
  <div className={styles.ticker}>
    <div className={styles.tickerTrack}>
      {[
        "Technical Analysis",
        "Fundamental Analysis",
        "Options Trading",
        "Equity Research",
        "Portfolio Management",
        "Algo Trading",
        "Derivatives",
        "Risk Management",
        "Financial Modelling"
      ].map((course, idx) => (
        <span key={course + idx} className={styles.tickerButton}>
          {course}
        </span>
      ))}

      {/* duplicate */}
      {[
        "Technical Analysis",
        "Fundamental Analysis",
        "Options Trading",
        "Equity Research",
        "Portfolio Management",
        "Algo Trading",
        "Derivatives",
        "Risk Management",
        "Financial Modelling"
      ].map((course, idx) => (
        <span key={course + "dup" + idx} className={styles.tickerButton}>
          {course}
        </span>
      ))}
    </div>
  </div>
</div>

                </div>
            </div>
        </div>
    );
};

export default HomeSection1;