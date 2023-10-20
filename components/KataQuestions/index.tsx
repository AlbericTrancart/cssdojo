import { Skill } from 'components/Skill';
import { Divider } from 'components/Divider';
import { SKILLS } from 'services/skills';
import { Link } from 'components/Link';
import { PAGES } from 'services/pages';
import styles from './KataQuestions.module.scss';

interface Props {
  skillIds: (keyof typeof SKILLS)[];
}

export const KataQuestions = ({ skillIds }: Props) => (
  <>
    <p>
      <strong>In this kata, we’re going to answer the following questions:</strong>

      {skillIds.map((skillId) => (
        <span key={skillId} className={styles['question']}>
          <Skill skillId={skillId} />
        </span>
      ))}

      <em className={styles['link']}>
        <Link href={PAGES.SkillsList.url()}>(link to the complete list of questions)</Link>
      </em>
    </p>

    <Divider />
  </>
);
