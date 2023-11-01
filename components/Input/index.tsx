import { ChangeEvent, ComponentProps } from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

interface Props extends Omit<ComponentProps<'input'>, 'onChange'> {
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({ className, onChange, ...rest }) => (
  <input
    onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
    className={classNames(styles['input'], className)}
    {...rest}
  />
);

interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'onChange'> {
  onChange: (value: string) => void;
}

export const Textarea: React.FC<TextareaProps> = ({ className, onChange, ...rest }) => (
  <textarea
    onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value)}
    className={classNames(styles['input'], className)}
    {...rest}
  />
);
