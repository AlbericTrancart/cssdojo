import styled from 'styled-components';
import { colorPalette, getSpacing } from 'stylesheet';

export const Divider = styled.hr`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  border: none;
  margin: ${getSpacing(4)} 0;

  ::before,
  ::after {
    content: '';
    flex-grow: 1;
    background: ${colorPalette.lightGrey};
    height: 1px;
    /* stylelint-disable-next-line */
    font-size: 0;
    /* stylelint-disable-next-line */
    line-height: 0;
  }
`;
