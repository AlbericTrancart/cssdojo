'use client';

import { useState } from 'react';
import { Editor } from 'components/Editor';
import { Button, ButtonLink } from 'components/Button';
import styles from './Exercise.module.scss';

interface Props {
  task: string;
  initialCode: string;
  solution: string;
}

export const Exercise: React.FC<Props> = ({ task, initialCode, solution }) => {
  const [exerciseState, setExerciseState] = useState(initialCode);
  const [solutionState, setSolutionState] = useState(solution);
  const [isSolutionShown, setSolutionShown] = useState(false);

  return (
    <div className={styles['container']}>
      <p className={styles['task']}>Task: {task}</p>

      <Editor
        code={isSolutionShown ? solutionState : exerciseState}
        onChange={isSolutionShown ? setSolutionState : setExerciseState}
      />

      <div className={styles['buttons-wrapper']}>
        {isSolutionShown ? (
          <>
            <Button onClick={() => setSolutionShown(false)}>Hide solution</Button>
            <ButtonLink href="mailto:cssdojos@gmail.com">I have a question</ButtonLink>
          </>
        ) : (
          <Button onClick={() => setSolutionShown(true)}>Show solution</Button>
        )}
      </div>
    </div>
  );
};
