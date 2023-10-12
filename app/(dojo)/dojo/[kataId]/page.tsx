'use client';

import React from 'react';
import { NextPage } from 'next';
import { Title } from 'components/Layout';
import { SKILLS_LIST } from 'services/skills';
import styles from './Dojo.module.scss';
import { ButtonLinks } from './ButtonLinks';

interface DojoProps {
  params: { kataId: string };
}

const DojoKataPage: NextPage<DojoProps> = ({ params: { kataId } }) => {
  const kata = SKILLS_LIST.find((skill) => skill.id === kataId)!;
  const kataIndex = SKILLS_LIST.indexOf(kata);

  return (
    <section className={styles['dojo']}>
      <Title className={styles['title']}>{kata.skill}</Title>

      {kata.additionalInfos !== undefined && (
        <div className={styles['additional-informations']}>{kata.additionalInfos}</div>
      )}

      <ButtonLinks kataIndex={kataIndex} kataUrl={kata.kataUrl} />
    </section>
  );
};

export const getStaticPaths = async () =>
  Promise.resolve({
    paths: SKILLS_LIST.map((skill) => ({ params: { kataId: skill.id } })),
    fallback: false,
  });

export default DojoKataPage;
