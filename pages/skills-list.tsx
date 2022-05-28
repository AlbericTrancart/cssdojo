import { Title } from 'components/Layout';
import { Link } from 'components/Link';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Checkbox } from 'components/Checkbox';
import styled from 'styled-components';
import { SKILLS } from 'services/skills';
import { PAGES } from 'services/pages';

const LOCAL_STORAGE_KEY = 'skillslist';

interface SkillsList {
  [key: string]: boolean;
}

const Form = styled.form``;

const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

const Legend = styled.legend`
  font-weight: bold;
`;

const Label = styled.label`
  display: block;
  margin-top: 1rem;
`;

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

        <Form>
          <Fieldset>
            <Legend>
              Tick a box only if you are able to explain the concept clearly to someone else.
            </Legend>
            {SKILLS.map(({ id, skill }) => (
              <Label key={id}>
                <Checkbox
                  checked={isChecked(id)}
                  onChange={(checked) => toggleSkill(id, checked)}
                />{' '}
                {skill}
              </Label>
            ))}
          </Fieldset>
        </Form>
      </section>
    </>
  );
};

export default SkillsListPage;
