import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

// We are in the stylesheet, we can use hardcoded vars here
// stylelint-disable

const SPACING_UNIT = 0.5;
const MEASUREMENT_UNIT = 'rem';
export const getSpacing = (multiplier: number): string =>
  `${multiplier * SPACING_UNIT}${MEASUREMENT_UNIT}`;

export const colorPalette = {
  black: '#000000',
  darkGrey: '#414141',
  lightGrey: '#dcdcdc',
  white: '#ffffff',
  blue: '#57a3e8',
};

export const fonts = {
  main: 'IBM Plex Sans, sans-serif',
  code: 'monospace',
};

export const mobileBreakpoint = '50em';

export const typography: { [key: string]: FlattenSimpleInterpolation } = {
  main: css`
    font-family: ${fonts.main};
    font-size: 125%;
    line-height: 1.5;
  `,
  title: css`
    font-size: 1.75rem;
    line-height: 1.5;
    @media (min-width: ${mobileBreakpoint}) {
      font-size: 2.5rem;
    }
  `,
  subtitle: css`
    font-size: 1.25rem;
    line-height: 1.5;
    @media (min-width: ${mobileBreakpoint}) {
      font-size: 1.75rem;
    }
  `,
  code: css`
    font-size: 0.8rem;
    font-family: ${fonts.code};
  `,
  small: css`
    font-size: 0.8rem;
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
