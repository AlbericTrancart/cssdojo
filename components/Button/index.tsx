import classNames from 'classnames';
import { ComponentProps } from 'react';
import { LinkComponentFactory } from 'components/Link';
import styles from './Button.module.scss';

interface Props extends ComponentProps<'button'> {
  small?: boolean;
}

export const Button = ({ children, className, small, ...rest }: Props) => (
  <button
    className={classNames(className, styles['button'], { [styles['small']]: small })}
    {...rest}
  >
    {children}
  </button>
);

export const ButtonLink = LinkComponentFactory(styles['button']);
