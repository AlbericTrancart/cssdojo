'use client';

import React, { ReactNode } from 'react';
import copy from 'copy-text-to-clipboard';
import classNames from 'classnames';
import styles from './Layout.module.scss';

interface TitleProps {
  className?: string;
  children: ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children, className }) => (
  <h1 className={classNames(styles['title'], className)}> {children}</h1>
);

interface SubtitleProps {
  id: string | null;
  className?: string;
  children: ReactNode;
}

const copyLink = (id: string) => {
  if (window !== undefined) {
    copy(window.location.origin + window.location.pathname + '#' + id);
  }
};

export const Subtitle: React.FC<SubtitleProps> = ({ id, className, children }) => (
  <h2 id={id ?? undefined} className={classNames(styles['subtitle'], className)}>
    {children}
    {id !== null && (
      <a
        className={styles['subtitle-anchor']}
        href={`#${id}`}
        aria-hidden="true"
        onClick={() => copyLink(id)}
        title="Copy link to this section"
      >
        🔗
      </a>
    )}
  </h2>
);

export const Subsubtitle: React.FC<TitleProps> = ({ children, className }) => (
  <h3 className={classNames(styles['subsubtitle'], className)}> {children}</h3>
);
