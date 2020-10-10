import styled from 'styled-components';
import { getSpacing, typography } from 'stylesheet';

export const PAGE_WIDTH = getSpacing(100);

export const PageContainer = styled.main`
  max-width: ${PAGE_WIDTH};
  margin: ${getSpacing(4)} auto ${getSpacing(10)};
`;

export const Title = styled.h1`
  ${typography.title}
  margin: 0;
`;

export const Subtitle = styled.h2`
  ${typography.subtitle}
  margin: 0;
`;
