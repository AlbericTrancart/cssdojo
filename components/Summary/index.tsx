'use client';

import { useState } from 'react';
import copy from 'copy-text-to-clipboard';
import { Divider } from 'components/Divider';
import { Button } from 'components/Button';
import styles from './Summary.module.scss';

interface Props {
  src: string;
}

const copyLinkToImage = (src: string) => {
  if (window !== undefined) {
    copy(window.location.origin + src);
  }
};

export const Summary = ({ src }: Props) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  return (
    <>
      <Divider />

      <div className={styles['container']}>
        <div className={styles['callout']}>
          <p>
            <em>If you want to share or print this kata’s recap, here it is in an A4 format!</em>
          </p>

          <Button
            onClick={() => {
              setIsLinkCopied(true);
              copyLinkToImage(src);
            }}
            small
          >
            {isLinkCopied ? 'Link copied!' : 'Copy link to clipboard'}
          </Button>
        </div>

        <a href={src} target="_blank" rel="noreferrer noopener">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="CSS Specificity and Selectors summary (click to copy link)"
            loading="lazy"
            className={styles['image']}
          />
        </a>
      </div>
    </>
  );
};
