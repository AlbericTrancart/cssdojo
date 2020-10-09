import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

// We are in the stylesheet, we can use hardcoded vars here
// stylelint-disable

const SPACING_UNIT = 8;
const MEASUREMENT_UNIT = 'px';
export const getSpacing = (multiplier: number): string =>
  `${multiplier * SPACING_UNIT}${MEASUREMENT_UNIT}`;

export const colorPalette: { [key: string]: string } = {
  black: '#000000',
  white: '#ffffff',
};

export const typography: { [key: string]: FlattenSimpleInterpolation } = {
  main: css`
    font-size: 18px;
    line-height: 1.5;
    letter-spacing: 0.5px;
  `,
};

export const zIndex = {};

export const borderRadius = '5px';

export const screenReaderOnlyStyle = css`
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; /* added line */
`;

export const ScreenReaderOnlyComponent = styled.div`
  ${screenReaderOnlyStyle}
`;
