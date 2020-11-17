import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Exercise } from 'components/Exercise';
import { Image } from 'components/Image';
import { Code } from 'components/Code';
import { Link } from 'components/Link';
import { NextKataButton } from 'components/NextKataButton';
import { Editor } from 'components/Editor';
import { PAGES } from 'services/pages';

const Kata: NextPage = () => (
  <>
    <Title>Styling text and custom fonts</Title>

    <section>
      <Subtitle>Basic text styling</Subtitle>

      <p>
        At last! We are going to learn other properties than this silly <Code>color</Code> property
        that we used everywhere in previous katas. There is a lot of properties that can manipulate
        text, a good schema is worth a thousand words:
      </p>

      <Image
        src="/learn/basics/styling-text/typography.svg"
        alt="A lorem ipsum text with arrows pointing to different characteristics of a line of text"
        aria-describedby="typography-schema-description"
        caption="Schema of a line of text and related CSS properties"
      />

      <div id="typography-schema-description">
        <p>A line layout can be changed with the following properties:</p>

        <dl>
          <dt>
            <Code>font-size</Code>
          </dt>
          <dd>Changes the height of the letters.</dd>
        </dl>
      </div>
    </section>

    <section>
      <Subtitle>Cosmetic properties</Subtitle>
    </section>

    <section>
      <Subtitle>Font families and custom fonts</Subtitle>
    </section>

    <section>
      <Subtitle>What I should remember</Subtitle>

      <NextKataButton href={PAGES.TheBoxModel.url} />
    </section>
  </>
);

export default Kata;
