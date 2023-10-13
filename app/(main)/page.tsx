'use client';

import BaseEditor from 'react-simple-code-editor';
import { NextPage } from 'next';
import { highlight, languages } from 'prismjs';
import { useState } from 'react';
import TheodoSponsorImage from 'public/sponsors/Theodo.svg';
import { previewBaseContent } from 'components/Editor';
import { Subtitle } from 'components/Layout';
import { Link } from 'components/Link';
import { Page, PAGES } from 'services/pages';
import { Button } from 'components/Button';
import editorStyles from 'components/Editor/Editor.module.scss';
import styles from './Home.module.scss';

interface Props {
  page: Page;
}

const Kata: React.FC<Props> = ({ page }) => (
  <li>
    <Link href={page.url()}>{page.title}</Link>
  </li>
);

const Home: NextPage = () => {
  const [showChallengeSolution, setShowChallengeSolution] = useState(false);
  const [code, setCode] = useState(`<style>
  span { border: 1px solid black; }
  .item { display: inline-block; }
</style>

<span>Hello</span>
<span class="item">my <div>CSS</div></span>
<span>World!</span>`);

  return (
    <>
      <section>
        <Subtitle id={null}>Why CSS Sometimes Sucks</Subtitle>

        <p>
          Can you predict with 100% confidence what will be the visual result of the following code?
        </p>
        <div className={styles['callout-wrapper']}>
          <div className={styles['editor-wrapper']}>
            <BaseEditor
              value={code}
              highlight={(codeToHighlight) => highlight(codeToHighlight, languages.html, 'html')}
              onValueChange={(value) => setCode(value)}
            />
          </div>
          <div className={styles['solution-wrapper']}>
            {showChallengeSolution ? (
              <iframe
                title="Live code editor preview"
                className={editorStyles['preview-frame']}
                srcDoc={`${previewBaseContent}${code}`}
              />
            ) : (
              <Button onClick={() => setShowChallengeSolution(true)}>Show solution</Button>
            )}
          </div>
        </div>

        <p>
          CSS can be frustrating because it relies on rules and concepts we usually don’t learn and
          practice.
          <br />
          <strong>
            Not knowing those concepts makes CSS code unpredictable and it can annoy the hell out of
            anyone.
          </strong>
        </p>
        <p>
          This website teaches you those concepts, allowing you to face any CSS issue with
          confidence. Straight to the point, information-packed{' '}
          <Link
            href="https://en.wikipedia.org/wiki/Kata"
            target="_blank"
            rel="noopener noreferer"
            aria-label="What is a Kata on Wikipedia"
          >
            katas
          </Link>{' '}
          (= exercises), will lay a strong theoretical base and put those new skills to practice
          with live code editors.
        </p>

        <p>
          <strong>You want to improve your CSS skills?</strong> Read and practice the katas in
          order. <em>100% of the content is useful</em>.
        </p>

        <p>
          <strong>You want to master CSS?</strong> Try to explain every concept in this{' '}
          <Link href={PAGES.SkillsList.url()}>skills list</Link> to someone else. If you succeed in
          making it crystal clear, you truly have mastered CSS.
        </p>
      </section>

      <section>
        <Subtitle id={null}>Basics</Subtitle>

        <p>How to style the UI elements themselves.</p>

        <ol>
          <Kata page={PAGES.WhyCSSHowItWorks} />
          <Kata page={PAGES.SelectorsSpecificity} />
          <Kata page={PAGES.CSSUnitsVariables} />
          <Kata page={PAGES.StylingTextCustomFonts} />
          <Kata page={PAGES.TheBoxModel} />
          <Kata page={PAGES.FlowLayout} />
        </ol>
      </section>

      <section>
        <Subtitle id={null}>Layouts</Subtitle>

        <p>How to arrange the UI elements between each other.</p>

        <ol>
          <li>Position and z-index</li>
          <li>Overflowing content</li>
          <li>The Flex layout</li>
          <li>The Grid layout</li>
          <li>The Table layout</li>
          <li>Media queries</li>
        </ol>
      </section>

      <section>
        <Subtitle id={null}>Advanced CSS</Subtitle>

        <p>
          Although this part will use some Javascript, no previous knowledge of frameworks such as
          React is required.
        </p>

        <ol>
          <li>Animations</li>
          <li>CSS-in-JS</li>
          <li>Best practices and Stylelint</li>
          <li>How to choose your CSS tooling</li>
          <li>How to refactor legacy CSS</li>
        </ol>
      </section>

      <section>
        <Subtitle id={null}>Sponsors</Subtitle>

        <a href="https://www.theodo.fr/">
          <TheodoSponsorImage title="Theodo" className={styles['sponsor']} />
        </a>
      </section>
    </>
  );
};

export default Home;
