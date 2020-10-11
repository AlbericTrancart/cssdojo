import styled from 'styled-components';
import { colorPalette, getSpacing } from 'stylesheet';

export const Button = styled.button`
  display: inline-block;
  padding: ${getSpacing(1)} ${getSpacing(2)};
  border: 1px solid ${colorPalette.darkGrey};
  cursor: pointer;
  background-color: transparent;
  font: inherit;
  color: inherit;
  text-decoration: none;
  text-align: center;
`;
