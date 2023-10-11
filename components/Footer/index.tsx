import React from 'react';
import { Divider } from 'components/Divider';
import { Link } from 'components/Link';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => (
  <footer className={styles['container']}>
    <Divider />
    Made with NextJS, ❤ and other hipster technologies.
    <br />
    Design philosophy inspired by{' '}
    <Link
      as="a"
      target="_blank"
      rel="noreferrer noopener"
      href="http://bettermotherfuckingwebsite.com"
    >
      bettermotherfuckingwebsite.com
    </Link>
    .<br />
    <Link as="a" target="_blank" rel="noreferrer noopener" href="https://alberic.trancart.net/">
      About me
    </Link>{' '}
    |{' '}
    <Link
      as="a"
      target="_blank"
      rel="noreferrer noopener"
      href="https://twitter.com/alberictrancart"
    >
      Contact me on Twitter
    </Link>{' '}
    or{' '}
    <Link as="a" target="_blank" rel="noreferrer noopener" href="mailto:cssdojos@gmail.com">
      send me an email at cssdojos@gmail.com
    </Link>
  </footer>
);
