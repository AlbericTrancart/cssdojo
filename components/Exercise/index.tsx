import { useState } from 'react';
import { Editor } from 'components/Editor';
import styled from 'styled-components';
import { getSpacing } from 'stylesheet';
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

  > :not(:last-child) {
    margin-right: ${getSpacing(2)};
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
