import React from 'react';
import BaseLink, { LinkProps } from 'next/link';
import classNames from 'classnames';
import styles from './Link.module.scss';

export interface CustomLinkProps extends LinkProps {
  target?: string;
  rel?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Link: React.FC<CustomLinkProps> = ({ children, className, ...props }) => (
  <BaseLink className={classNames(styles['link'], className)} {...props}>
    {children}
  </BaseLink>
);
