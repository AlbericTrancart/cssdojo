'use client';

import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Title } from 'components/Layout';
import { Link } from 'components/Link';
import { Checkbox } from 'components/Checkbox';
import { SKILLS } from 'services/skills';
import { PAGES } from 'services/pages';
import styles from './SkillsList.module.scss';

const LOCAL_STORAGE_KEY = 'skillslist';

interface SkillsList {
  [key: string]: boolean;
}

const SkillsListPage: NextPage = () => {
  const [skillsListState, setSkillsListState] = useState<SkillsList>({});

  useEffect(() => {
    try {
      setSkillsListState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}') as SkillsList);
    } catch {
      console.warn('There was an issue with local storage!');
    }
  }, []);

  const toggleSkill = (key: string, checked: boolean) => {
    const newSkillsListState = { ...skillsListState, [key]: checked };
    setSkillsListState(newSkillsListState);

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSkillsListState));
    } catch {
      console.warn('There was an issue with local storage!');
    }
  };

  const isChecked = (key: string) => key in skillsListState && skillsListState[key];

  return (
    <>
      <section>
        <Title>Skills list</Title>

        <p>
          You want to test your CSS skills?{' '}
          <Link href={PAGES.Dojo.url(SKILLS[0].id)}>Enter Dojo mode</Link>.
        </p>

        <p>
          You can use this list to keep track of your CSS skills. You think something is missing?
          Please{' '}
          <Link as="a" target="_blank" rel="noreferrer noopener" href="mailto:cssdojos@gmail.com">
            help me improve this skills list!
          </Link>
        </p>

        <form>
          <fieldset className={styles['fieldset']}>
            <legend className={styles['legend']}>
              Tick a box only if you are able to explain the concept clearly to someone else.
            </legend>
            {SKILLS.map(({ id, skill, kataUrl }) => (
              <label key={id} className={styles['label']}>
                <Checkbox
                  checked={isChecked(id)}
                  onChange={(checked) => toggleSkill(id, checked)}
                />{' '}
                {skill} <Link href={kataUrl}>(Go to kata)</Link>
              </label>
            ))}
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default SkillsListPage;
