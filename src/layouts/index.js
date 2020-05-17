import React from 'react';
import styles from './index.css';
import Header from './Header';

function Layout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;