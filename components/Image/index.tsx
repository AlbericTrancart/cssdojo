import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

const Figure = styled.figure`
  margin: 0;
  text-align: center;
`;

const Caption = styled.figcaption`
  font-style: italic;
`;

const BaseImage = styled.img`
  max-width: 100%;
`;

export const Image: React.FC<Props> = ({ src, alt, caption, ...rest }) => (
  <Figure>
    <BaseImage src={src} alt={alt} {...rest} />
    {caption !== undefined && <Caption>{caption}</Caption>}
  </Figure>
);
