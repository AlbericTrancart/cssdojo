import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { colorPalette, getSpacing, typography } from 'stylesheet';
import { PAGES } from 'services/pages';

const Container = styled.header`
  background-color: ${colorPalette.darkGrey};
  color: ${colorPalette.white};
  padding: ${getSpacing(3)} 0;
  margin-bottom: ${getSpacing(4)};
`;

const HomeLink = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  font: inherit;
  color: inherit;
  text-decoration: none;
`;

const Title = styled.p`
  ${typography.title}
  margin: 0;
`;

const Description = styled.p`
  ${typography.subtitle}
  margin: 0;
`;

export const Header: React.FC = () => (
  <Container>
    <Link href={PAGES.Home.url} passHref>
      <HomeLink aria-label="Homepage, CSS dojo, relearn CSS the right way">
        <Title>cssdojo</Title>

        <Description>(re)learn CSS, the right way</Description>
      </HomeLink>
    </Link>
  </Container>
);
