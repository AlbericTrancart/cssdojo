import { ComponentProps } from 'react';
import classNames from 'classnames';
import styles from './Code.module.scss';

export const Code = ({ children, className, ...rest }: ComponentProps<'kbd'>) => (
  <kbd className={classNames(className, styles['table'])} {...rest}>
    {children}
  </kbd>
);
