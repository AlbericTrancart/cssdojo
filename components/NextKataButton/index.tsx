import styled from 'styled-components';
import { Button } from 'components/Button';
import { getSpacing } from 'stylesheet';

const Wrapper = styled.div`
  text-align: center;
  margin-top: ${getSpacing(4)};
`;

interface Props {
  href: string;
}

export const NextKataButton: React.FC<Props> = ({ href }) => (
  <Wrapper>
    <Button as="a" href={href}>
      Go to the next kata!
    </Button>
  </Wrapper>
);
