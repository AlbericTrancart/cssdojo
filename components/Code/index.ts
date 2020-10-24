import styled from 'styled-components';
import { colorPalette, typography } from 'stylesheet';

export const Code = styled.kbd`
  ${typography.code}
  background-color: ${colorPalette.lightGrey};
  padding: 0.1rem 0.2rem;
  border-radius: 0.1rem;
`;
