import { Subtitle } from 'components/Layout';
import { Link } from 'components/Link';
import { NextPage } from 'next';
import { PAGES } from 'services/pages';

const Home: NextPage = () => (
  <>
    <section>
      <Subtitle>Introduction</Subtitle>
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
          ( = exercices), with practice after laying a strong theorical base.
        </strong>
      </p>
      <p>
        <strong>If you are a beginner:</strong> read and practice the katas in order.
      </p>
      <p>
        <strong>If you already know some stuff:</strong> read and practice the katas in order,{' '}
        <em>even more carefully</em>. Maybe you need solid theorical foundations, maybe you need
        more practice. Whatever reason brought you here, don’t skip any kata,{' '}
        <em>100% of the content is useful</em>.
      </p>
    </section>

    <section>
      <Subtitle>Basics</Subtitle>
      <ol>
        <li>Why CSS and How it works</li>
        <li>Selectors and specificity</li>
        <li>Styling text</li>
        <li>
          <Link href={PAGES.TheBoxModel.url}>The box model</Link>
        </li>
        <li>Overflowing content</li>
      </ol>
    </section>

    <section>
      <Subtitle>Layouts</Subtitle>
      <ol>
        <li>The flow layout</li>
        <li>The flex layout</li>
        <li>The grid layout</li>
        <li>The table layout</li>
        <li>Position and z-index</li>
        <li>Media queries</li>
      </ol>
    </section>

    <section>
      <Subtitle>Advanced CSS</Subtitle>
      <ol>
        <li>Styled Components (CSS in JS)</li>
        <li>How to organize your CSS</li>
        <li>Best practices and Stylelint</li>
        <li>How to choose your CSS tooling</li>
        <li>Animations</li>
      </ol>
    </section>

    <section>
      <Subtitle>Your own design system</Subtitle>
      <ol>
        <li>Design a Link</li>
        <li>Design a Button</li>
        <li>Design a Dropdown Menu</li>
        <li>Design an Input</li>
        <li>Design a Select</li>
        <li>Design a Modal</li>
        <li>Design Checkboxes/Radio buttons</li>
        <li>Design a Table</li>
        <li>Design a Tab navigation system</li>
        <li>Design a Tooltip</li>
      </ol>
    </section>
  </>
);

export default Home;
