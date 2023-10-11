import classNames from 'classnames';
import { ComponentProps } from 'react';
import { LinkComponentFactory } from 'components/Link';
import styles from './Button.module.scss';

export const Button = ({ children, className, ...rest }: ComponentProps<'button'>) => (
  <button className={classNames(className, styles['button'])} {...rest}>
    {children}
  </button>
);

export const ButtonLink = LinkComponentFactory(styles['button']);
