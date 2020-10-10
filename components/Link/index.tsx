import React from 'react';
import BaseLink, { LinkProps } from 'next/link';
import styled from 'styled-components';
import { colorPalette } from 'stylesheet';

interface Props extends LinkProps {
  target?: string;
  rel?: string;
}

const StyledLink = styled.a`
  cursor: pointer;
  transition: color ease 0.3s;
  text-decoration: underline;
  color: ${colorPalette.darkGrey};

  &:hover,
  &:focus,
  &:active,
  &:visited {
    color: ${colorPalette.blue};
  }
`;

export const Link: React.FC<Props> = ({ href, children, ...rest }) => (
  <BaseLink href={href} passHref>
    {/* @ts-ignore */}
    <StyledLink {...rest}>{children}</StyledLink>
  </BaseLink>
);
