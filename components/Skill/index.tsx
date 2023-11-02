'use client';

import { event } from 'nextjs-google-analytics';
import { useEffect, useState } from 'react';
import { Link } from 'components/Link';
import { Checkbox } from 'components/Checkbox';
import { SKILLS } from 'services/skills';
import { getItem, setItem } from 'services/storage';

const LOCAL_STORAGE_KEY = 'skillslist';

interface Props {
  className?: string;
  skillId: keyof typeof SKILLS;
  showKataLink?: boolean;
}

interface SkillsList {
  [key: string]: boolean;
}

const getSkillsList = () => JSON.parse(getItem(LOCAL_STORAGE_KEY) ?? '{}') as SkillsList;

export const Skill = ({ className, skillId, showKataLink }: Props) => {
  const [skillState, setSkillState] = useState<boolean>(false);

  useEffect(() => {
    const skillsList = getSkillsList();
    setSkillState(skillsList[skillId]);
  }, [skillId]);

  const toggleSkill = (checked: boolean) => {
    const skillsList = getSkillsList();
    const newSkillsListState = { ...skillsList, [skillId]: checked };
    setSkillState(checked);

    setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSkillsListState));

    event('toggle_skill', { label: skillId, value: checked ? 1 : 0 });
  };

  const skill = SKILLS[skillId];

  return (
    <label className={className}>
      <Checkbox checked={skillState} onChange={(checked) => toggleSkill(checked)} /> {skill.skill}{' '}
      {showKataLink && <Link href={skill.kataUrl}>(Go to kata)</Link>}
    </label>
  );
};
