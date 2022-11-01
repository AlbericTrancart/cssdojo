import { editorStyles, previewBaseContent, PreviewFrame } from 'components/Editor';
import BaseEditor from 'react-simple-code-editor';
import { Subtitle } from 'components/Layout';
import { Link } from 'components/Link';
import { NextPage } from 'next';
import { Page, PAGES } from 'services/pages';
import styled from 'styled-components';
import { highlight, languages } from 'prismjs';
import { getSpacing, mobileBreakpoint } from 'stylesheet';
import { Button } from 'components/Button';
import { useState } from 'react';

interface Props {
  page: Page;
}
const Kata: React.FC<Props> = ({ page }) => (
  <li>
    <Link href={page.url()}>{page.title}</Link>
  </li>
);

const CalloutWrapper = styled.div`
  display: flex;
  gap: ${getSpacing(2)};
  flex-wrap: wrap;
  @media (min-width: ${mobileBreakpoint}) {
    flex-wrap: nowrap;
  }

  & > * {
    @media (min-width: ${mobileBreakpoint}) {
      flex-grow: 1;
      flex-basis: 50%;
      flex-shrink: 1;
    }
  }
  min-height: 160px;
`;
const EditorWrapper = styled.div`
  ${editorStyles}
`;
const SolutionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

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
        <Subtitle id="introduction">Why CSS Sometimes Sucks</Subtitle>

        <p>
          Can you predict with 100% confidence what will be the visual result of the following code?
        </p>
        <CalloutWrapper>
          <EditorWrapper>
            <BaseEditor
              value={code}
              highlight={(codeToHighlight) => highlight(codeToHighlight, languages.html, 'html')}
              onValueChange={(value) => setCode(value)}
            />
          </EditorWrapper>
          <SolutionWrapper>
            {showChallengeSolution ? (
              <PreviewFrame srcDoc={`${previewBaseContent}${code}`} />
            ) : (
              <Button onClick={() => setShowChallengeSolution(true)}>Show solution</Button>
            )}
          </SolutionWrapper>
        </CalloutWrapper>

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
        <Subtitle id="basics">Basics</Subtitle>

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
        <Subtitle id="layouts">Layouts</Subtitle>

        <p>How to arrange the UI elements between each other.</p>

        <ol>
          <li>The Flow layout (part 2) - Overflowing content and floats</li>
          <li>The Flow layout (part 3) - Position and z-index</li>
          <li>The Flex layout</li>
          <li>The Grid layout</li>
          <li>The Table layout</li>
          <li>Media queries</li>
        </ol>
      </section>

      <section>
        <Subtitle id="advanced-css">Advanced CSS</Subtitle>

        <p>
          Although this part will use some Javascript, no previous knowledge of frameworks such as
          React is required.
        </p>

        <ol>
          <li>Animations</li>
          <li>Styled Components (CSS in JS)</li>
          <li>How to organize your CSS</li>
          <li>Best practices and Stylelint</li>
          <li>How to choose your CSS tooling</li>
          <li>How to refactor legacy CSS</li>
        </ol>
      </section>

      <section>
        <Subtitle id="own-design-system">Your own design system</Subtitle>

        <p>
          This part is more a sandbox to practice all the concepts that you learned in the previous
          parts. Keep doing the katas in order though!
        </p>

        <ol>
          <li>Design a Link</li>
          <li>Design a Button</li>
          <li>Design a Table</li>
          <li>Design an Input</li>
          <li>Design Checkboxes/Radio buttons</li>
          <li>Design a Select</li>
          <li>Design a Dropdown Menu</li>
          <li>Design a Tooltip</li>
          <li>Design a Modal</li>
          <li>Design a Tab navigation system</li>
        </ol>
      </section>
    </>
  );
};

export default Home;
