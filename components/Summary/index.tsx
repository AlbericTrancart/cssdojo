'use client';

import copy from 'copy-text-to-clipboard';
import styles from './Summary.module.scss';

interface Props {
  src: string;
}

const copyLinkToImage = (src: string) => {
  if (window !== undefined) {
    copy(window.location.origin + src);
  }
};

export const Summary = ({ src }: Props) => (
  <div className={styles['container']}>
    <p>
      If you want to share or print this kata’s recap, here it is (click to copy link to clipboard):
    </p>

    <button onClick={() => copyLinkToImage(src)} className={styles['button']}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="CSS Specificity and Selectors summary (click to copy link)"
        loading="lazy"
        className={styles['image']}
      />
    </button>
  </div>
);
