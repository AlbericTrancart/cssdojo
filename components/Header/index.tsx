import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PAGES } from 'services/pages';
import styles from './Header.module.scss';
import logoWhiteImage from './logo-white.png';

export const Header: React.FC = () => (
  <header className={styles['container']}>
    <h1 style={{ margin: 0 }}>
      <Link
        href={PAGES.Home.url()}
        className={styles['home-link']}
        aria-label="Homepage, CSS dojo, relearn CSS the right way"
      >
        <Image src={logoWhiteImage} alt="css dojo" className={styles['logo']} />

        <span className={styles['description']}>(re)learn CSS, the right way</span>
      </Link>
    </h1>
  </header>
);
