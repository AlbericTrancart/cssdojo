import { ChangeEvent, ComponentProps } from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';

interface Props extends Omit<ComponentProps<'input'>, 'onChange'> {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox: React.FC<Props> = ({ className, checked, onChange }) => (
  <input
    type="checkbox"
    onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.checked)}
    checked={checked}
    className={classNames(styles['input'], className)}
  />
);
