import styled from 'styled-components';
import { colorPalette, typography } from 'stylesheet';

export const Code = styled.kbd`
  ${typography.code}
  background-color: ${colorPalette.lightGrey};
  padding: 2px 4px;
  border-radius: 2px;
`;
