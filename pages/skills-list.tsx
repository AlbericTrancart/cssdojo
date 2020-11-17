import { Title } from 'components/Layout';
import { Link } from 'components/Link';
import { NextPage } from 'next';
import { ReactNode, useEffect, useState } from 'react';
import { Checkbox } from 'components/Checkbox';
import styled from 'styled-components';
import { Code } from 'components/Code';

const LOCAL_STORAGE_KEY = 'skillslist';

interface SkillsList {
  [key: string]: boolean;
}

const SKILLS: { [key: string]: ReactNode } = {
  'introduction-css-browser-rendering-include': 'What are the 3 ways to include CSS in a page?',
  'introduction-css-browser-rendering-crp': (
    <>
      What is the <em>Critical Rendering Path</em>?
    </>
  ),
  'introduction-css-browser-rendering-loading': 'How can CSS impact the load time of a page?',
  'introduction-css-browser-rendering-feature':
    'How can I check if a CSS feature is supported by a browser?',
  'selectors-specificity-main': 'What are the main CSS selectors?',
  'selectors-specificity-specificity': 'What is Specificity?',
  'selectors-specificity-good-practices': 'What makes a good/bad CSS selector?',
  'css-units-variables-units': 'What are the main CSS units?',
  'css-units-variables-px-rem': 'Should I use px or rem/em?',
  'css-units-variables-variables': 'How can I use CSS varaibles?',
  'css-units-variables-keywords': (
    <>
      What are the differences between <Code>inherit</Code>, <Code>initial</Code> and{' '}
      <Code>unset</Code>?
    </>
  ),
  'styling-text-custom-fonts-baseline': (
    <>
      What is the baseline and what are the two purposes of the <Code>vertical-align</Code>{' '}
      property?
    </>
  ),
  'styling-text-custom-fonts-include-fonts': 'How can I include custom fonts?',
  'styling-text-custom-fonts': 'What are the best practices for loading fonts?',
  'box-model-definition': 'What is the box model?',
  'box-model-alternatives': 'What are the two possible box models?',
};

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
    } catch {}
  }, []);

  const toggleSkill = (key: string, checked: boolean) => {
    const newSkillsListState = { ...skillsListState, [key]: checked };
    setSkillsListState(newSkillsListState);

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSkillsListState));
    } catch {}
  };

  const isChecked = (key: string) => key in skillsListState && skillsListState[key];

  return (
    <>
      <section>
        <Title>Skills list</Title>

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
            {Object.keys(SKILLS).map((key) => (
              <Label key={key}>
                <Checkbox
                  checked={isChecked(key)}
                  onChange={(checked) => toggleSkill(key, checked)}
                />{' '}
                {SKILLS[key]}
              </Label>
            ))}
          </Fieldset>
        </Form>
      </section>
    </>
  );
};

export default SkillsListPage;
