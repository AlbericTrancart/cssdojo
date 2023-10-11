import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import classNames from 'classnames';
import styles from './Link.module.scss';

export interface CustomLinkProps extends LinkProps {
  target?: string;
  rel?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const LinkComponentFactory = (customClassName: string) => {
  const Component: React.FC<CustomLinkProps> = ({ children, className, href, ...props }) =>
    String(href).startsWith('http') ? (
      <a className={classNames(customClassName, className)} href={String(href)} {...props}>
        {children}
      </a>
    ) : (
      <NextLink className={classNames(customClassName, className)} href={href} {...props}>
        {children}
      </NextLink>
    );
  Component.displayName = 'Link';

  return Component;
};

export const Link = LinkComponentFactory(styles['link']);
