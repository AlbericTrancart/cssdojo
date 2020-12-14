import { CustomCheckboxContainer, CustomCheckboxInput } from '@reach/checkbox';
import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { colorPalette } from 'stylesheet';

interface Props {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Container = styled(CustomCheckboxContainer)`
  &[data-reach-custom-checkbox-container] {
    border: 2px solid ${colorPalette.darkGrey};
    cursor: pointer;
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    border-radius: 0.1rem;
  }
`;

const Input = styled(CustomCheckboxInput)<{ checked: boolean }>``;

const Check = styled.span<{ checked: boolean }>`
  display: block;
  position: absolute;
  width: calc(1rem - 4px);
  height: calc(1rem - 4px);
  top: 2px;
  left: 2px;
  background-color: ${({ checked }) => (checked ? colorPalette.blue : colorPalette.white)};
  transition: ease-in-out background-color 0.3s;
`;

export const Checkbox: React.FC<Props> = ({ checked, onChange }) => (
  <Container
    checked={checked}
    onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.checked)}
  >
    <Input checked={checked} /> <Check aria-hidden checked={checked} />
  </Container>
);
