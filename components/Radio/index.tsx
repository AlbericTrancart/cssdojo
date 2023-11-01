import { ChangeEvent, ComponentProps } from 'react';
import classNames from 'classnames';
import styles from './Radio.module.scss';

interface Props extends Omit<ComponentProps<'input'>, 'onChange'> {
  checked: boolean;
  onChange: (value: string) => void;
}

export const Radio: React.FC<Props> = ({ className, onChange, ...rest }) => (
  <input
    type="radio"
    onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
    className={classNames(styles['input'], className)}
    {...rest}
  />
);
