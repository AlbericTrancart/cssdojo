import styled, { css } from 'styled-components';
import { colorPalette, getSpacing } from 'stylesheet';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

const cellStyles = css`
  text-align: left;
  border: 1px solid ${colorPalette.lightGrey};
  padding: ${getSpacing(1)} ${getSpacing(2)};
`;

export const TableHeaderCell = styled.th`
  ${cellStyles}
`;

export const TableCell = styled.td`
  ${cellStyles}
`;
