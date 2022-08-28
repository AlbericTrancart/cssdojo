import { Subtitle } from 'components/Layout';
import { Link } from 'components/Link';
import { NextPage } from 'next';
import { ReactNode } from 'react';
import { Page, PAGES } from 'services/pages';

interface Props {
  children: ReactNode;
  page: Page;
}
const Kata: React.FC<Props> = ({ children, page }) => (
  <li>
    <Link href={page.url()}>{children}</Link>
  </li>
);

const Home: NextPage = () => (
  <>
    <section>
      <Subtitle id="introduction">Introduction</Subtitle>

      <p>
        <strong>Why another CSS guide?</strong> Some tutorials lack theory, some lack practice. Some
        are really light and some give too much information. This is my personal compilation of what
        I think is the CSS must-know of any frontend developer.{' '}
        <strong>
          Straight to the point, information-packed{' '}
          <Link
            href="https://en.wikipedia.org/wiki/Kata"
            target="_blank"
            rel="noopener noreferer"
            aria-label="What is a Kata on Wikipedia"
          >
            katas
          </Link>{' '}
          (= exercises), with practice after laying a strong theoretical base.
        </strong>
      </p>

      <p>
        <strong>You are a beginner?</strong> Read and practice the katas in order.
      </p>

      <p>
        <strong>You already know some stuff?</strong> Read and practice the katas in order,{' '}
        <em>even more carefully</em>. Maybe you need solid theoretical foundations, maybe you need
        more practice. Whatever reason brought you here, don’t skip any kata,{' '}
        <em>100% of the content is useful</em>.
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
        <Kata page={PAGES.WhyCSSHowItWorks}>
          Introduction to CSS and How the browser renders the page
        </Kata>
        <Kata page={PAGES.SelectorsSpecificity}>Selectors and Specificity</Kata>
        <Kata page={PAGES.CSSUnitsVariables}>CSS units and variables</Kata>
        <Kata page={PAGES.StylingTextCustomFonts}>Styling text and custom fonts</Kata>
        <Kata page={PAGES.TheBoxModel}>The Box Model</Kata>
        <Kata page={PAGES.FlowLayout}>The Flow layout (part 1) - the block formatting context</Kata>
      </ol>
    </section>

    <section>
      <Subtitle id="layouts">Advanced layouts</Subtitle>

      <p>How to arrange the UI elements between each other.</p>

      <ol>
        <li>The flow layout (part 2) - Overflowing content and floats</li>
        <li>The Flex layout</li>
        <li>The Grid layout</li>
        <li>The Table layout</li>
        <li>Position and z-index</li>
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
        This part is more a sandbox to practice all the concepts that you learnt in the previous
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

export default Home;
