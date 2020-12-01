import styled from 'styled-components';
import { getSpacing, mobileBreakpoint, typography } from 'stylesheet';

export const PAGE_WIDTH = getSpacing(100);

export const PageContainer = styled.main`
  max-width: ${PAGE_WIDTH};
  margin: ${getSpacing(4)} auto;
  padding: ${getSpacing(2)};
  @media (min-width: ${mobileBreakpoint}) {
    margin-bottom: ${getSpacing(8)};
  }
`;

export const Title = styled.h1`
  ${typography.title}
  margin: 0;
`;

export const Subtitle = styled.h2`
  ${typography.subtitle}
  margin: 0;
  margin-top: ${getSpacing(2)};
`;
