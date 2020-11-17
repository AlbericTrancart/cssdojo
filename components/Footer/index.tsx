import React from 'react';
import styled from 'styled-components';
import { Divider } from 'components/Divider';
import { Link } from 'components/Link';
import { PAGE_WIDTH } from 'components/Layout';
import { getSpacing, typography } from 'stylesheet';

const Container = styled.footer`
  max-width: ${PAGE_WIDTH};
  margin: 0 auto;
  padding: 0 ${getSpacing(2)} ${getSpacing(4)} ${getSpacing(2)};
  text-decoration: italic;
  text-align: center;
  ${typography.small}
`;

export const Footer: React.FC = () => (
  <Container>
    <Divider />
    Made with NextJS, ❤ and other hipster technologies.
    <br />
    Design philosophy inspired by{' '}
    <Link
      as="a"
      target="_blank"
      rel="noreferrer noopener"
      href="http://bettermotherfuckingwebsite.com"
    >
      bettermotherfuckingwebsite.com
    </Link>
    .<br />
    <Link as="a" target="_blank" rel="noreferrer noopener" href="https://alberic.trancart.net/">
      About me
    </Link>{' '}
    |{' '}
    <Link
      as="a"
      target="_blank"
      rel="noreferrer noopener"
      href="https://twitter.com/alberictrancart"
    >
      Contact me on Twitter
    </Link>{' '}
    or{' '}
    <Link as="a" target="_blank" rel="noreferrer noopener" href="mailto:cssdojos@gmail.com">
      send me an email at cssdojos@gmail.com
    </Link>
  </Container>
);
