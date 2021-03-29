import React from 'react';
import { MAIN_VERTICAL_MARGIN, MAIN_VERTICAL_PADDING, Title } from 'components/Layout';
import { GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next';
import styled from 'styled-components';
import { SKILLS } from 'services/skills';
import { PAGES } from 'services/pages';
import { getSpacing, mobileBreakpoint } from 'stylesheet';
import { Button } from 'components/Button';
import { useHotkeys } from 'react-hotkeys-hook';

const Dojo = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  min-height: calc(100vh - 2 * ${MAIN_VERTICAL_MARGIN} - 2 * ${MAIN_VERTICAL_PADDING});
`;

const AdditionalInfos = styled.div`
  margin: ${getSpacing(2)} 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    width: 100%;
    margin-bottom: ${getSpacing(2)};
  }

  @media (min-width: ${mobileBreakpoint}) {
    > * {
      width: auto;
      margin-bottom: 0;
    }
    > :not(:last-child) {
      margin-right: ${getSpacing(2)};
    }
  }
`;

interface DojoProps {
  kataId: string;
}

const DojoKataPage: NextPage<DojoProps> = ({ kataId }) => {
  const kata = SKILLS.find((skill) => skill.id === kataId)!;
  const kataIndex = SKILLS.indexOf(kata);

  useHotkeys('left', () => {
    if (kataIndex > 0) {
      window.document.getElementById('previousLink')?.click();
    }
  });
  useHotkeys('right', () => {
    if (kataIndex + 1 < SKILLS.length) {
      window.document.getElementById('nextLink')?.click();
    }
  });

  return (
    <Dojo>
      <Title style={{ textAlign: 'center' }}>{kata.skill}</Title>

      {kata.additionalInfos && <AdditionalInfos>{kata.additionalInfos}</AdditionalInfos>}

      <ButtonsWrapper>
        {kataIndex > 0 && (
          <Button id="previousLink" as="a" href={PAGES.Dojo.url(SKILLS[kataIndex - 1].id)}>
            Previous question
          </Button>
        )}

        <Button as="a" href={kata.kataUrl} target="_blank" rel="noopener noreferer">
          Go to kata
        </Button>

        <Button as="a" href={PAGES.Home.url()}>
          Go to home
        </Button>

        {kataIndex + 1 < SKILLS.length && (
          <Button id="nextLink" as="a" href={PAGES.Dojo.url(SKILLS[kataIndex + 1].id)}>
            Next question
          </Button>
        )}
      </ButtonsWrapper>
    </Dojo>
  );
};

export const getStaticProps = async (
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<DojoProps>> => {
  return {
    props: { kataId: context?.params?.kataId as string },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: SKILLS.map((skill) => ({ params: { kataId: skill.id } })),
    fallback: false,
  };
};

export default DojoKataPage;
