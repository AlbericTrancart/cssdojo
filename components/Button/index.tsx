import styled from 'styled-components';
import BaseLink from 'next/link';
import { colorPalette, getSpacing } from 'stylesheet';
import { CustomLinkProps } from 'components/Link';

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

export const Link: React.FC<CustomLinkProps> = ({ href, children, ...rest }) => (
  <BaseLink href={href} passHref>
    {/* @ts-ignore */}
    <Button as="a" {...rest}>
      {children}
    </Button>
  </BaseLink>
);
