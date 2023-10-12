'use client';

import { useHotkeys } from 'react-hotkeys-hook';
import { ButtonLink } from 'components/Button';
import { PAGES } from 'services/pages';
import { SKILLS_LIST } from 'services/skills';
import styles from './Dojo.module.scss';

interface Props {
  kataIndex: number;
  kataUrl: string;
}

export const ButtonLinks: React.FC<Props> = ({ kataIndex, kataUrl }) => {
  useHotkeys('left', () => {
    if (kataIndex > 0) {
      window.document.getElementById('previousLink')?.click();
    }
  });
  useHotkeys('right', () => {
    if (kataIndex + 1 < SKILLS_LIST.length) {
      window.document.getElementById('nextLink')?.click();
    }
  });

  return (
    <div className={styles['buttons-wrapper']}>
      {kataIndex > 0 && (
        <ButtonLink id="previousLink" href={PAGES.Dojo.url(SKILLS_LIST[kataIndex - 1].id)}>
          Previous question
        </ButtonLink>
      )}

      <ButtonLink href={kataUrl} target="_blank" rel="noopener noreferer">
        Go to kata
      </ButtonLink>

      <ButtonLink href={PAGES.Home.url()}>Go to home</ButtonLink>

      {kataIndex + 1 < SKILLS_LIST.length && (
        <ButtonLink id="nextLink" href={PAGES.Dojo.url(SKILLS_LIST[kataIndex + 1].id)}>
          Next question
        </ButtonLink>
      )}
    </div>
  );
};
