import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Code } from 'components/Code';
import { Link } from 'components/Link';
import { Image } from 'components/Image';
import { PAGES } from 'services/pages';
import { Editor } from 'components/Editor';
import { Exercise } from 'components/Exercise';
import { KataQuestions } from 'components/KataQuestions';
import TypographyImage from 'app/(main)/learn/basics/styling-text-custom-fonts/typography.svg';
import anonymousBoxImage from './anonymous-box.png';
import FlowLayoutImage from './flow-layout.svg';
import FlowRecursionImage from './flow-recursion.svg';
import BoxesGroupingImage from './boxes-grouping.svg';

const Kata: NextPage = () => (
  <>
    <Title>{PAGES.FlowLayout.title}</Title>

    <p>
      <strong>Prerequisite:</strong> knowledge from the{' '}
      <Link href={PAGES.TheBoxModel.url()}>Box model and Layout kata</Link> is necessary to
      understand the concept of outer/inner display types.
    </p>

    <KataQuestions
      skillIds={[
        'flow-layout-block-formatting-context',
        'flow-layout-boxes',
        'flow-layout-block-formatting',
        'flow-layout-margin-collapsing',
        'flow-layout-inline-formatting',
      ]}
    />

    <p>
      The Flow layout is the basic default layout and is optimized for the primary role of a webpage
      (like this one): display lines of text content with eventual boxes (such as images) between
      paragraphs.
    </p>

    <Image
      src={<FlowLayoutImage title="Lines of text wrapped in boxes" />}
      alt=""
      caption="A simple representation of the Flow layout"
      style={{ maxWidth: '20rem' }}
    />

    <p>
      <strong>
        This may be the most important part of the dojo. The Flow layout is the default layout and
        thus applies almost everywhere in a web page. By learning it correctly, many CSS
        frustrations will disappear.
      </strong>
    </p>

    <section>
      <Subtitle id="block-formatting-context">The Block Formatting Context (BFC)</Subtitle>

      <p>
        The Flow layout always happens in a{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context">
          Block Formatting Context
        </Link>
        . A BFC is created in certain conditions, including by:
      </p>

      <ul>
        <li>
          The root <Code>html</Code> element
        </li>
        <li>
          Flex and Grid items if they are neither Flex nor Grid nor Table containers themselves
        </li>
        <li>
          Elements with <Code>position: fixed</Code> or <Code>position: absolute</Code>
        </li>
        <li>
          Elements having the <Code>flow-root</Code> inner display type
        </li>
        <li>
          <Link href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context">
            And many other cases that you can find on MDN
          </Link>
        </li>
      </ul>

      <p>Inside a BFC, the browser will recursively crawl every nested element:</p>

      <ul>
        <li>
          <strong>
            If the element has a <Code>flow</Code> inner display type, the browser will flag the
            element and its children as <em>participating in the flow</em> layout.
          </strong>{' '}
          We also say that the elements are <em>in the flow</em>. It will then scan the inner
          display type of the children and continue.
        </li>
        <li>
          If the element have something else than the <Code>flow</Code> inner display type, the
          element itself will participate in the flow but its children will not be added to the flow
          and <strong>the browser will stop there.</strong>
        </li>
      </ul>

      <Image
        src={
          <FlowRecursionImage title="Nested boxes marked as in the flow or not depending on their display types" />
        }
        alt=""
        caption="Will the box be in the flow or not?"
        style={{ maxWidth: '30rem' }}
      />

      <p>
        <strong>
          Reminder: most elements will have a default display value that will make them participate
          in the flow.
        </strong>
      </p>

      <ul>
        <li>
          Elements such as <Code>&lt;p&gt;</Code>, <Code>&lt;section&gt;</Code> or{' '}
          <Code>&lt;div&gt;</Code> will have a default of <Code>display: block flow;</Code>{' '}
          (shorthand: <Code>display: block;</Code>)
        </li>
        <li>
          Elements such as <Code>&lt;strong&gt;</Code>, <Code>&lt;em&gt;</Code> or{' '}
          <Code>&lt;span&gt;</Code> will have a default of <Code>display: inline flow;</Code>{' '}
          (shorthand: <Code>display: inline;</Code>)
        </li>
      </ul>

      <p>
        When every nested element is scanned, the browser ends up with a soup of boxes that
        participate in the flow and that will be used for the layout algorithm.
      </p>
    </section>

    <section>
      <Subtitle id="inline-block-boxes-grouping">Inline and block boxes grouping</Subtitle>

      <p>
        Once the browser have determined which boxes will participate in the flow,{' '}
        <strong>
          it looks at their outer display type (which is either <Code>block</Code> or{' '}
          <Code>inline</Code>) and create <em>block-level boxes</em> and <em>inline-level boxes</em>{' '}
          accordingly.
        </strong>
      </p>

      <p>
        One more definition: we call a <em>block container box</em> any box that will contain{' '}
        <em>block-level boxes</em> or <em>inline-level boxes</em>. (Yes I know that using{' '}
        <em>block container box</em> and <em>block-level box</em> is super confusing but those are
        the exact terms in the spec.)
      </p>

      <Editor
        code={`<style>
.parent { border: 1px solid red; }
.child { border: 1px solid black; }
</style>

<div class="parent">
  <span class="child">Inline-level</span>
  <span class="child">boxes</span>
  <span class="child">in a block container box</span>
</div>`}
      />

      <Editor
        code={`<style>
.parent { border: 1px solid red; }
.child { border: 1px solid black; }
</style>

<div class="parent">
  <div class="child">Block-level</div>
  <div class="child">boxes</div>
  <div class="child">in a block container box</div>
</div>`}
      />

      <p>
        There is only one rule with <em>block container boxes</em>: a <em>block container boxes</em>{' '}
        must contain only <em>block-level boxes</em> or only <em>inline-level boxes</em>.{' '}
        <strong>
          There can be no mixup between block-level boxes and inline-level boxes in a block
          container box
        </strong>
      </p>

      <p>
        <strong>
          What if I have some text that is not wrapped in inline elements such as{' '}
          <Code>&lt;span&gt;</Code>?
        </strong>{' '}
        In order to have only inline-level boxes in the parent block container box, the browser
        creates anonymous inline-level boxes around unwrapped text. You can’t select them with CSS
        but you can still inspect them with the dev tools.
      </p>

      <Editor
        code={`<style>
.parent { border: 1px solid red; }
.child { border: 1px solid black; }
</style>

<div class="parent">
  Anonymous inline-level
  <span class="child">boxes</span>
  in a block container box
</div>`}
      />

      <Image
        src={anonymousBoxImage}
        alt="The dev tools inspecting the HTML generated in the editor above"
        caption="An anonymous inline-level box as seen in the dev tools"
      />

      <p>
        <strong>
          What if I mix up inline and block elements, such as <Code>&lt;span&gt;</Code> and{' '}
          <Code>&lt;block&gt;</Code>?
        </strong>{' '}
        In order to have no mixup of block-level boxes and inline-level boxes in the block container
        box, the browser creates anonymous block-level boxes around inline-level children. Again,
        you can’t select them with CSS <em>and</em> you can’t inspect them with the dev tools (but
        trust me, they are here).
      </p>

      <Editor
        code={`<style>
.parent { border: 1px solid red; }
.child { border: 1px solid black; }
</style>

<div class="parent">
  <span class="child">Anonymous block-level</span>
  <div class="child">boxes</div>
  in a
  <span class="child">block container box</span>
</div>`}
      />

      <p>
        If we try to sum up all of this, the browser takes all elements participating in the flow in
        a block formatting context, turns them into boxes (block-level and inline-level boxes),
        arrange them in block container boxes and introduces anonymous block-level and inline-level
        boxes accordingly.
      </p>

      <Image
        src={
          <BoxesGroupingImage title="A drawing showing squares and lines at the top to represent block and inline boxes, and at the bottom the same squares and lines arranged in boxes following the layout rules" />
        }
        alt=""
        caption="An example of block-level and inline-level boxes grouping"
        style={{ maxWidth: '30rem' }}
      />

      <p>
        <strong>
          What if I introduce a block element <em>inside</em> of an inline element?
        </strong>
      </p>

      <Exercise
        task="Put a block element inside the middle inline element and try to predict the result"
        initialCode={`<style>
.parent { border: 1px solid red; }
.child { border: 1px solid black; }
</style>

<div class="parent">
  <span class="child">Inline-level</span>
  <span class="child">boxes in a</span>
  <span class="child">block container box</span>
</div>`}
        solution={`<style>
.parent { border: 1px solid red; }
.child { border: 1px solid black; }
</style>

<div class="parent">
  <span class="child">Inline-level</span>
  <span class="child">boxes <div>this is a block!</div> in a</span>
  <span class="child">block container box</span>
</div>`}
      />

      <p>
        Remember, we are dealing with boxes here.{' '}
        <strong>
          The Flow layout doesn’t care about DOM elements. It only cares about block-level boxes and
          inline-level boxes.
        </strong>{' '}
        The browser will see five boxes to group together:
      </p>

      <ul>
        <li>
          An inline-level box created by the first <Code>&lt;span&gt;</Code>
        </li>
        <li>An anonymous inline-level box containing the &quot;boxes &quot; text</li>
        <li>
          The block-level box created by the <Code>&lt;div&gt;</Code> element
        </li>
        <li>An anonymous inline-level box containing the &quot; in a&quot; text</li>
        <li>
          An inline-level box created by the last <Code>&lt;span&gt;</Code>
        </li>
      </ul>

      <p>
        Thus, the <Code>&lt;div&gt;</Code> breaks the &quot;no-mixup rule&quot; and forces a block
        formatting context by introducing anonymous block-level boxes around the groups of
        inline-level boxes. The browser tries to reconcile other CSS properties in the most logical
        way possible. Here, you can see that there is a border on the bottom, left and top sides of
        the first anonymous inline-level box and the right border is on the last anonymous
        inline-level box.
      </p>

      <p>
        Now, let’s say we have a paragraph with inline-level boxes. We also have a block element,
        for instance a button, that we want to inline in our text. How can we do this?
      </p>

      <Exercise
        task='Inline the "button" in the text without changing its shape by using the display property'
        initialCode={`<style>
html {
  border: 1px solid red;
}
.button {
  background-color: darkslateblue;
  color: white;
  padding: 0.25rem 0.5rem;
  width: min-content;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>

This is some text that has a <div class="button">button</div> in the middle of it.`}
        solution={`<style>
html {
  border: 1px solid red;
}
.button {
  display: inline flow-root;
  background-color: darkslateblue;
  color: white;
  padding: 0.25rem 0.5rem;
  width: min-content;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>

This is some text that has a <div class="button">button</div> in the middle of it.`}
      />

      <p>
        Have you found it?
        <br />
        <br />
        <br />
        ...
        <br />
        <br />
        <br />
        If you already know the answer with the shorthand, try to do it with the outer/inner display
        syntax and truly understand why it works.
        <br />
        <br />
        <br />
        ...
        <br />
        <br />
        <br />
        Congratulations! You just reinvented <Code>display: inline-block;</Code>!
      </p>

      <p>
        <strong>
          Why <Code>display: inline;</Code> doesn’t work:
        </strong>{' '}
        by setting <Code>inline</Code>, you are explicitly setting the outer display type to{' '}
        <Code>inline</Code> (which is what we want because we want to inline the button in its
        parent) but also implicitly setting the inner display type to <Code>flow</Code>. If the
        inner display type is <Code>flow</Code>, the children of our button will participate in the
        parent flow. The only child of our button is an unwrapped text, therefore an anonymous
        inline-level box, therefore our button will lose some of its block-level box properties that
        we want to keep.
      </p>

      <p>
        By choosing <Code>flow-root</Code>, we force the creation of an independent Block Formatting
        Context. The BFC will introduce a root block container box that will honor block-level boxes
        properties.
      </p>

      <p>
        <strong>
          Good! At this stage, you should have a good grasp of how block-level boxes and
          inline-level boxes are organized, and how to alter this organization.
        </strong>{' '}
        Don’t hesitate to let your brain cool off and think about it twice. I’m repeating myself but
        it probably is the most confusing concept about CSS, and it is really important to truly{' '}
        <em>understand</em> it.
      </p>

      <p>
        We then move on to the final part of the layout algorithm.{' '}
        <strong>
          Right now, we have a boxes tree with block container boxes containing only block-level
          boxes or only inline-level boxes.
        </strong>
      </p>
    </section>

    <ol>
      <li>
        Inside a <em>block container box</em> containing only <em>block-level boxes</em>, the
        browser will apply <em>block formatting</em>
      </li>
      <li>
        Inside a <em>block container box</em> containing only <em>inline-level boxes</em>, the
        browser will apply <em>inline formatting</em>
      </li>
    </ol>

    <section>
      <Subtitle id="block-formatting">Block formatting</Subtitle>

      <p>
        When a <em>block container box</em> has only <em>block-level boxes</em> as children,{' '}
        <em>block formatting</em> applies:
      </p>

      <ul>
        <li>Boxes are laid out one after the other vertically</li>
        <li>
          The <Code>width</Code> and <Code>height</Code> properties are honored, by default the box
          will consume all the space in the inline direction (full width of the container) and be as
          tall as its content
        </li>
        <li>
          The <Code>margin</Code> property sets the vertical distance between two sibling boxes
        </li>
        <li>
          <strong>Top and bottom</strong> margins (not horizontal ones!) between two{' '}
          <strong>adjacent</strong> block-level boxes{' '}
          <strong>that have no content between them</strong> (border, inline element...) collapse:
          they combine in a margin whose size is the largest of the individual margins
        </li>
      </ul>

      <Exercise
        task="here, every margin collapses and every block is 10px vertically from its adjacent boxes. Try to break the margin collapsing in at least 3 different ways"
        initialCode={`<style>
.container {
  border: 1px solid red;
}
div {
  margin: 10px;
}
</style>

<div class="container">
  <div class="a">Block-level box A</div>
  <div class="parent-1">
    <div class="b">Block-level box B</div>
    <div class="c">Block-level box C</div>
    <div class="d">
      <div class="e">Block-level box D</div>
      <div class="f">Block-level box E</div>
    </div>
  </div>
</div>`}
        solution={`<style>
.container {
  border: 1px solid red;
}
div {
  margin: 10px;
}
.parent-1 {
  border: 1px solid black;
}
.d {
  display: block flow-root;
}
</style>

<div class="container">
  <div class="a">Block-level box A</div>
  <!-- the border is breaking margin collapsing -->
  <div class="parent-1">
    <div class="b">Block-level box B</div>
    <!-- the inline part is breaking margin collapsing by creating an anonymous block-level box -->
    Inline part
    <div class="c">Block-level box C</div>

    <!-- the flow-root is breaking margin collapsing by creating a new block formatting context, box c and box e are not participating in the same context anymore so their margins can't collapse -->
    <div class="d">
      <div class="e">Block-level box D</div>
      <div class="f">Block-level box E</div>
    </div>
  </div>
</div>
`}
      />
    </section>

    <section>
      <Subtitle id="inline-formatting">Inline formatting</Subtitle>

      <p>
        When a <em>block container box</em> has only <em>inline-level boxes</em> as children,{' '}
        <em>inline formatting</em> applies. Let’s bring up the schema from{' '}
        <Link href={PAGES.StylingTextCustomFonts.url()}>the styling text kata</Link> to understand
        what is the line height and the baseline:
      </p>

      <Image
        src={
          <TypographyImage title="A lorem ipsum text with arrows pointing to different characteristics of a line of text" />
        }
        alt=""
        aria-describedby="typography-schema-description"
        caption="Schema of a line of text and related CSS properties"
      />

      <ul>
        <li>
          Boxes are laid out one after the other horizontally in the writing direction (left to
          right in English, but could be right to left in other languages such as Arabic)
        </li>
        <li>If there is not enough space, the boxes break into a new line</li>
        <li>
          You can’t set <Code>width</Code> or <Code>height</Code> on inline boxes
        </li>
        <li>Margins work only in the inline direction </li>
      </ul>

      <Editor
        code={`<style>
        html {
          border: 1px solid red;
        }
        .box {
          border: 1px solid black;
          height: 100px; /* doesn't work :( */
          width: 100px; /* doesn't work :( */
          margin-bottom: 200px; /* doesn't work :( */
          margin-right: 30px; /* works */
        }
        </style>

        <div>
          Some line of text.<br />
          Text of this <span class="box">box</span> is really nice. This is also a very long line that should wrap at the end of the line.<br />
        </div>`}
      />

      <ul>
        <li>The height of a line is defined by the tallest box in it</li>
      </ul>

      <Exercise
        task='Make the "first" line bigger by changing its font-size and the "second" by changing its line-height'
        initialCode={`<style>
html {
  border: 1px solid red;
}
.first {
  border: 1px solid black;
}
.second {
  border: 1px solid black;
}
</style>

<div>
  Some line of text.<br />
  Text of the <span class="first">first line</span> is really nice.<br />
  Some line of text.<br />
  But the text of the <span class="second">second line</span> looks better.<br />
  Some line of text.<br />
</div>`}
        solution={`<style>
html {
  border: 1px solid red;
}
.first {
  border: 1px solid black;
  font-size: 2rem;
}
.second {
  border: 1px solid black;
  line-height: 2rem;
}
</style>

<div>
  Some line of text.<br />
  Text of the <span class="first">first line</span> is really nice.<br />
  Some line of text.<br />
  But the text of the <span class="second">second line</span> looks better.<br />
  Some line of text.<br />
</div>`}
      />

      <ul>
        <li>
          The{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align">
            <Code>vertical-align</Code>
          </Link>{' '}
          property sets how an inline-level box should behave in the vertical direction. Possible
          values are <Code>baseline</Code> (the default, will align the baselines of the boxes),{' '}
          <Code>top</Code> (the box will stick to the top of the line), <Code>bottom</Code> (same
          but at the bottom of the line), <Code>middle</Code> (centers vertically inside the line,{' '}
          <strong>
            which is not the same as <Code>baseline</Code>!
          </strong>
          ), <Code>sub</Code> and <Code>super</Code> for exponents. Go ahead and try all those
          values:
        </li>
      </ul>

      <Editor
        code={`<style>
html {
  border: 1px solid red;
  text-decoration: underline;
}
.icon {
  border: 1px solid black;
  vertical-align: baseline;
}
</style>

<div>Some text with <img class="icon" src="/favicon-16x16.png" alt="The CSS3 logo" /> an icon inside of it.</div>`}
      />
      <ul>
        <li>
          The{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/word-break">
            <Code>word-break</Code>
          </Link>{' '}
          property controls how words are broken when the text wraps. Classic values are{' '}
          <Code>normal</Code> and <Code>break-all</Code> (can break after any character)
        </li>
      </ul>

      <Exercise
        task="Break the super duper long word!"
        initialCode={`<style>
html {
  border: 1px solid red;
}
</style>

<div>Let's have an imaginary super duper long word: Antipericatametaanaparcircumvolutiorectumgustpoops.</div>
`}
        solution={`<style>
html {
  border: 1px solid red;
  word-break: break-all;
}
</style>

<div>Let's have an imaginary super duper long word: Antipericatametaanaparcircumvolutiorectumgustpoops.</div>
</style>`}
      />

      <ul>
        <li>
          The{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space">
            <Code>white-space</Code>
          </Link>{' '}
          property controls how the browser handles white spaces in the generated HTML. By default,
          white spaces are combined and line breaks are ignored (so that you can indent HTML as you
          want without interfering with the content). You can change that by setting{' '}
          <Code>pre-wrap</Code> to <em>preserve</em> white spaces and line breaks or{' '}
          <Code>nowrap</Code> to prevent normal text wrapping.
        </li>
      </ul>

      <Exercise
        task="Make the empty line in the HTML paragraph appear"
        initialCode={`<style>
html {
  border: 1px solid red;
}
</style>

<div>This is some text, with relevant information. It is quite long so it should wrap at the end of the line. Let's write even more text to ensure this paragraph wraps on at least 4 lines.

And here is another line. In the HTML it has an empty line before it, but it does not appear by default.</div>
`}
        solution={`<style>
html {
  border: 1px solid red;
  white-space: pre-wrap;
}
</style>

<div>This is some text, with relevant information. It is quite long so it should wrap at the end of the line. Let's write even more text to ensure this paragraph wraps on at least 4 lines.

And here is another line. In the HTML it has an empty line before it, but it does not appear by default.</div>`}
      />
    </section>

    <section>
      <Subtitle id="key-learnings">What I should remember</Subtitle>

      <p>
        Ooof! That was a hard one. Now you should have enough knowledge to truly understand and use
        the Flow layout!
      </p>

      <ul>
        <li>
          The Flow layout happens in a <em>Block Formatting Context</em> (BFC) created by the{' '}
          <Code>flow-root</Code> <em>inner display type</em>{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context">
            and many other cases that you can find on MDN
          </Link>
          .
        </li>
        <li>
          All nested boxes in a BFC that have the <Code>flow</Code> <em>inner display type</em> and
          their children will participate in the layout.
        </li>
        <li>
          Inside a BFC, the browser will group block-level and inline-level boxes so that there is
          no mix of block-level and inline-level boxes using <em>anonymous block-level</em> and{' '}
          <em>anonymous inline-level boxes</em>.
        </li>
        <li>
          <em>Block (or inline) formatting</em> will be used if all children of a{' '}
          <em>block container box</em> are <em>block (or inline)-level boxes</em>.
        </li>
        <li>
          The rules of <em>block formatting</em> are:
          <ul>
            <li>Boxes lay out vertically and consume all the space in the inline direction</li>
            <li>Margins collapse between adjacent boxes that don’t have content between them</li>
          </ul>
        </li>
        <li>
          The rules of <em>inline formatting</em> are:
          <ul>
            <li>Boxes are laid out horizontally with their baselines aligned</li>
            <li>
              There are restrictions on <Code>width</Code>, <Code>height</Code> and{' '}
              <Code>margin</Code>
            </li>
            <li>
              You can control the flow of the text with <Code>vertical-align</Code>,{' '}
              <Code>word-break</Code> and <Code>white-space</Code>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </>
);

export default Kata;
