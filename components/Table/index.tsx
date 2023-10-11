import classNames from 'classnames';
import { ComponentProps } from 'react';
import styles from './Table.module.scss';

export const Table = ({ children, className, ...rest }: ComponentProps<'table'>) => (
  <table className={classNames(className, styles['table'])} {...rest}>
    {children}
  </table>
);

export const TableHeader = ({ children, ...rest }: ComponentProps<'thead'>) => (
  <thead {...rest}>{children}</thead>
);

export const TableBody = ({ children, ...rest }: ComponentProps<'tbody'>) => (
  <tbody {...rest}>{children}</tbody>
);

export const TableRow = ({ children, ...rest }: ComponentProps<'tr'>) => (
  <tr {...rest}>{children}</tr>
);

export const TableHeaderCell = ({ children, className, ...rest }: ComponentProps<'th'>) => (
  <th className={classNames(className, styles['table-header-cell'])} {...rest}>
    {children}
  </th>
);

export const TableCell = ({ children, className, ...rest }: ComponentProps<'td'>) => (
  <td className={classNames(className, styles['table-cell'])} {...rest}>
    {children}
  </td>
);
