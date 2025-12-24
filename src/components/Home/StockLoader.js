import React from 'react';
import styles from './StockLoader.module.css';

const StockLoader = () => (
  <div className={styles.loaderBg}>
    <div className={styles.barGraph}>
      {[...Array(7)].map((_, i) => (
        <div key={i} className={styles.bar} style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
    </div>
  </div>
);

export default StockLoader;
