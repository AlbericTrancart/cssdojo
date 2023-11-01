import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Exercise } from 'components/Exercise';
import { Image } from 'components/Image';
import { Code } from 'components/Code';
import { Link } from 'components/Link';
import { NextKataButton } from 'components/NextKataButton';
import { Editor } from 'components/Editor';
import { KataQuestions } from 'components/KataQuestions';
import { PAGES } from 'services/pages';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'components/Table';
import { KataRating } from 'components/KataRating';
import BoxModelImage from './box-model.svg';
import OuterInnerDisplayTypeImage from './outer-inner-display-type.svg';
import BorderBoxModelImage from './border-box-model.svg';
import LayoutsImage from './layouts.svg';
import devToolsImage from './devtools.png';

const Kata: NextPage = () => (
  <>
    <Title>{PAGES.TheBoxModel.title}</Title>

    <KataQuestions
      skillIds={[
        'box-model-definition',
        'box-model-alternatives',
        'box-model-layout',
        'box-model-common-layouts',
        'box-model-outer-inner-display',
      ]}
    />

    <section>
      <Subtitle id="definition">Definition</Subtitle>

      <p>
        Every node of{' '}
        <Link href={PAGES.WhyCSSHowItWorks.url() + '#how-the-browser-renders-the-page'}>
          the render tree
        </Link>{' '}
        (even text) is modelized by a box, and{' '}
        <strong>it is really important to understand how this box system works</strong> to master
        layout techniques and every little detail about CSS.
      </p>

      <Image
        src={
          <BoxModelImage title="A box showing how width, height, padding, border and margin are related to each other" />
        }
        alt=""
        caption="Schema of the Box model"
        style={{ maxWidth: '30rem' }}
      />

      <p>
        Every box has 5 characteristics:{' '}
        <strong>a width, a height, a padding, a border and a margin</strong>. Inspect those
        properties in your browser’s dev tools:
      </p>

      <Image src={devToolsImage} alt="The box model in the Firefox dev tools" />

      <p>
        Those <em>characteristics</em> are different from the <Code>width</Code>,{' '}
        <Code>height</Code>, <Code>padding</Code>, <Code>border</Code> and <Code>margin</Code> CSS{' '}
        <em>properties</em>.{' '}
        <strong>
          What you see in the dev tools is <em>what the box actually is</em>, not{' '}
          <em>what we ask it to be</em>.
        </strong>
      </p>

      <p>
        Let me tell it again, this is really important:{' '}
        <strong>
          for every CSS property there is a difference between the <em>specified</em> value in your
          CSS code and the value that is actually <em>computed</em> by the browser.
        </strong>
      </p>

      <p>
        A quick demonstration: the browser might not honor the <Code>width</Code> property if there
        is a <Code>min-width</Code> property. Thus, the width specified property and actual box
        characteristics will be different.
      </p>

      <Editor
        code={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  min-width: 300px;
  width: 100px; /* Does not work! */
}
</style>

<div class="box">Box</div>`}
      />
    </section>

    <section>
      <Subtitle id="box-sizing-property">The box-sizing property</Subtitle>

      <Exercise
        task="try to set the width and height of the box to 100px"
        initialCode={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
}
</style>

<div class="box">Box</div>`}
        solution={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  width: 100px;
  height: 100px;
}
</style>

<div class="box">Box</div>`}
      />

      <p>
        In the above example, something is not really intuitive: if you inspect the box with the dev
        tools, we end up with a distance from border to border included of 122px. Let’s bring up the
        box model again:
      </p>

      <Image
        src={
          <BoxModelImage title="A box showing how width, height, padding, border and margin are related to each other" />
        }
        alt=""
        caption="Schema of the Box model"
        style={{ maxWidth: '30rem' }}
      />

      <p>
        We get 122px because: 1px from left <Code>border</Code> + 10px from left{' '}
        <Code>padding</Code> + 100px from <Code>width</Code> + 20px from right <Code>padding</Code>{' '}
        + 1px from right <Code>border</Code> = 122px. This is not intuitive because most humans will
        consider a box what is delimited by the borders. But fear not!{' '}
        <strong>There is an alternate box model.</strong>
      </p>

      <p>
        The default box model is the <Code>content-box</Code> model. The other box model is the{' '}
        <Code>border-box</Code> model. In this model, the width and height <em>characteristics</em>{' '}
        are defined as content + padding + border.
      </p>

      <Image
        src={
          <BorderBoxModelImage title="A box showing how width, height, padding, border and margin are related to each other" />
        }
        alt=""
        caption="Schema of the border box model"
        style={{ maxWidth: '30rem' }}
      />

      <p>
        By setting the{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing">
          <Code>box-sizing</Code>
        </Link>{' '}
        property, you can change the box model used for this box.
      </p>

      <Exercise
        task="change the first box so that it is 100px wide - border to border"
        initialCode={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 100px;
}
</style>

<div class="box">Box</div>`}
        solution={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
}
</style>

<div class="box">Box</div>`}
      />

      <p>
        As the <Code>border-box</Code> model is more intuitive, it is a good practice to reset it
        for all elements:
      </p>

      <Editor
        code={`<style>
* {
  box-sizing: border-box;
}
.box {
  display: block;
  border: 1px solid black;
  padding: 10px;
  width: 100px;
  height: 100px;
}
</style>

<span class="box">Box</span>`}
      />
    </section>

    <section>
      <Subtitle id="layouts">Layouts</Subtitle>

      <p>
        The box <em>characteristics</em> are computed from the CSS properties depending on the
        current <em>layout</em>.
      </p>

      <p>
        There are four main layouts to know: Flow, Table, Flex and Grid. We will see each of them in
        following katas.{' '}
        <strong>
          After learning all the main layouts, you’ll have a good understanding of which one is the
          more adapted to your specific case.
        </strong>
      </p>

      <Image
        src={
          <LayoutsImage title="A sample of each of the 4 main layouts: flow, table, flex and grid. Flow is the default layout." />
        }
        alt=""
        caption="The most common layouts"
      />

      <p>
        <strong>
          A layout is a set of rules and CSS properties to dictate how boxes will interact with each
          other.
        </strong>
      </p>

      <p>Let me list some implications of this definition:</p>

      <ul>
        <li>
          A layout rules how CSS properties will interact. It may use specific CSS properties (such
          as <Code>flex-direction</Code> for the Flex layout),{' '}
          <strong>
            but it will also make use of standard properties (<Code>width</Code>,{' '}
            <Code>margin</Code>...)
          </strong>
        </li>
        <li>
          Layout having different sets of rules, this means that a{' '}
          <strong>
            CSS value (such as <Code>width: auto;</Code>) can behave differently in the context of
            different layouts
          </strong>
        </li>
        <li>
          It also means that some layout-specific properties (such as <Code>flex-direction</Code>)
          will be completely useless in the context of other layouts
        </li>
        <li>
          Layout rulesets can introduce very specific behaviors (such as <em>margin collapsing</em>)
          that will <strong>not</strong> be transposed to other layouts
        </li>
        <li>Each CSS layout has its own CSS specification</li>
      </ul>

      <p>
        <strong>You should see layouts as a toolbox</strong>: within the context of a layout, you’ll
        be able to predict how elements will place next to each other. You don’t like a layout’s
        ruleset? Change your toolbox and use another layout.
      </p>
    </section>

    <section>
      <Subtitle id="display">
        The <Code>display</Code> property
      </Subtitle>

      <p>
        <strong>
          You can switch between layouts with the{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
            <Code>display</Code>
          </Link>{' '}
          property.
        </strong>{' '}
        This property have two possible syntaxes:
      </p>

      <ul>
        <li>
          <Code>display: [shorthand];</Code>: the old syntax, supported by all browsers
        </li>
        <li>
          <Code>display: [outer] [inner];</Code>: the new, full syntax,{' '}
          <Link href="https://caniuse.com/mdn-css_properties_display_multi-keyword_values">
            supported by all modern browsers (you might not have it if you have Chrome &lt; 115)
          </Link>
        </li>
      </ul>

      <p>
        In this kata we’ll learn this property with its full, two values syntax to better understand
        what happens. This syntax specify the <em>outer display type</em> and the{' '}
        <em>inner display type</em>.
      </p>

      <dl>
        <dt>
          <strong>The outer display type</strong>
        </dt>
        <dd>
          This defines how the element should behave in the context of the parent layout,{' '}
          <strong>if the parent layout is Flow</strong>. Possible values are <Code>block</Code> and{' '}
          <Code>inline</Code>. If the parent layout is not Flow, the outer display type is ignored.
        </dd>
        <dt>
          <strong>The inner display type</strong>
        </dt>
        <dd>
          This defines how the element’s children will lay out. Possible values include{' '}
          <Code>flow</Code>, <Code>table</Code>, <Code>flex</Code>, <Code>grid</Code> and many
          more...
        </dd>
      </dl>

      <Image
        src={
          <OuterInnerDisplayTypeImage title="A box with the text 'inner' inside of it and the text 'outer' outside of it" />
        }
        alt=""
        caption="The outer and inner display types"
        style={{ maxWidth: '20rem' }}
      />

      <p>Think of it like this:</p>

      <ul>
        <li>Flow is the default layout;</li>
        <li>
          The outer display type will decide how the box will place itself in the Flow layout;
        </li>
        <li>
          The inner display type decides how the inside of the box will behave: should it
          participate in the Flow layout? Should the children use Flex or Grid instead?
        </li>
      </ul>

      <p>For legacy reason we usually use shorthands, for instance:</p>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Shorthand</TableHeaderCell>
            <TableHeaderCell>Two-value syntax</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[
            ['block flow', 'block'],
            ['inline flow', 'inline'],
            ['block flex', 'flex'],
            ['inline grid', 'inline-grid'],
          ].map(([fullSyntax, shorthand]) => (
            <TableRow key={shorthand}>
              <TableCell>
                <Code>{shorthand}</Code>
              </TableCell>
              <TableCell key={shorthand}>
                <Code>{fullSyntax}</Code>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p>
        <strong>Shorthands are not a bad thing</strong> and you should continue to use them, however
        the two value syntax is better for learning purposes.
      </p>

      <Exercise
        task="a developer tried to use the Flex layout but forgot to change the display type! Fix the problem by using the two-value display syntax."
        initialCode={`<style>
.container {
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.box {
  border: 1px solid black;
  padding: 10px;
}
.child {
  width: 50px;
  height: 50px;
}
</style>

<div class="box container">
  <div class="box child">Box 1</div>
  <div class="box child">Box 2</div>
  <div class="box child">Box3</div>
</div>`}
        solution={`<style>
.container {
  display: block flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.box {
  border: 1px solid black;
  padding: 10px;
}
.child {
  width: 50px;
  height: 50px;
}
</style>

<div class="box container">
  <div class="box child">Box 1</div>
  <div class="box child">Box 2</div>
  <div class="box child">Box3</div>
</div>`}
      />

      <p>
        We will see the Flex layout in a further kata, our next goal is learning the Flow layout
        (the default layout!).
      </p>
    </section>

    <section>
      <Subtitle id="key-learnings">What I should remember</Subtitle>

      <ul>
        <li>
          Every node of the render tree creates a <em>box</em>
        </li>
        <li>
          The box model defines the box <em>characteristics</em>
        </li>
        <li>
          The <Code>border-box</Code> model is actually more intuitive
        </li>
        <li>
          CSS <em>properties</em> impact the box <em>characteristics</em> depending on the current{' '}
          <em>layout</em>
        </li>
        <li>
          The <Code>display</Code> property changes the layout by changing the{' '}
          <em>inner display type</em> of the box.
        </li>
      </ul>

      <KataRating kataId="box-model" />

      <NextKataButton href={PAGES.FlowLayout.url()} />
    </section>
  </>
);

export default Kata;
