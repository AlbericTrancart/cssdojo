import { NextPage } from 'next';
import { Title } from 'components/Layout';
import { Link } from 'components/Link';
import { Skill } from 'components/Skill';
import { SKILLS } from 'services/skills';
import { PAGES } from 'services/pages';
import styles from './SkillsList.module.scss';

const SkillsListPage: NextPage = () => (
  <>
    <section>
      <Title>Skills list</Title>

      <p>
        You want to test your CSS skills?{' '}
        <Link href={PAGES.Dojo.url('introduction-css-browser-rendering-vocabulary')}>
          Enter Dojo mode
        </Link>
        .
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
          {Object.keys(SKILLS).map((skillId) => (
            <Skill
              key={skillId}
              skillId={skillId as keyof typeof SKILLS}
              className={styles['label']}
              showKataLink
            />
          ))}
        </fieldset>
      </form>
    </section>
  </>
);

export default SkillsListPage;
