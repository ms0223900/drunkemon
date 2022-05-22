import Link from 'next/link';
import React, { memo } from 'react';
import styles from './navbar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-inner']}>
        <div className={styles.logo}>
          <Link href={'/'}>
            <a className={styles['logo-img']}>
              <img alt="logo" src="./assets/drunkemon-logo-temp.png" />
            </a>
          </Link>
          <p className={styles['logo-text']}>
            {'ヨッパライ　モンスター ． 醉可夢'}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default memo(NavBar);
