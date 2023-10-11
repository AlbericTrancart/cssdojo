import React from 'react';
import Link from 'next/link';
import { PAGES } from 'services/pages';
import styles from './Header.module.scss';

interface Props {
  isHomepage: boolean;
}

export const Header: React.FC<Props> = ({ isHomepage }) => {
  const homeLink = (
    <Link
      href={PAGES.Home.url()}
      className={styles['home-link']}
      aria-label="Homepage, CSS dojo, relearn CSS the right way"
    >
      <span className={styles['title']}>cssdojo</span>

      <span className={styles['description']}>(re)learn CSS, the right way</span>
    </Link>
  );

  return (
    <header className={styles['container']}>
      {isHomepage ? <h1>{homeLink}</h1> : <p>{homeLink}</p>}
    </header>
  );
};
