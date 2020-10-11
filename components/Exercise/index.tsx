import { useState } from 'react';
import { Editor } from 'components/Editor';
import styled from 'styled-components';
import { getSpacing, mobileBreakpoint } from 'stylesheet';
import { Button } from 'components/Button';

interface Props {
  task: string;
  initialCode: string;
  solution: string;
}

const Container = styled.div`
  margin-bottom: ${getSpacing(4)};
`;

const Task = styled.p`
  text-align: center;
  font-weight: bold;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    width: 100%;
    @media (min-width: ${mobileBreakpoint}) {
      width: auto;
    }
  }

  > :not(:last-child) {
    margin-bottom: ${getSpacing(2)};
    margin-right: 0;
    @media (min-width: ${mobileBreakpoint}) {
      margin-bottom: 0;
      margin-right: ${getSpacing(2)};
    }
  }
`;

export const Exercise: React.FC<Props> = ({ task, initialCode, solution }) => {
  const [exerciseState, setExerciseState] = useState(initialCode);
  const [solutionState, setSolutionState] = useState(solution);
  const [isSolutionShown, setSolutionShown] = useState(false);

  return (
    <Container>
      <Task>Task: {task}</Task>
      <Editor
        code={isSolutionShown ? solutionState : exerciseState}
        onChange={isSolutionShown ? setSolutionState : setExerciseState}
      />
      <ButtonsWrapper>
        {isSolutionShown ? (
          <>
            <Button onClick={() => setSolutionShown(false)}>Hide solution</Button>
            <Button as="a" href="mailto:cssdojos@gmail.com">
              I have a question
            </Button>
          </>
        ) : (
          <Button onClick={() => setSolutionShown(true)}>Show solution</Button>
        )}
      </ButtonsWrapper>
    </Container>
  );
};
