import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Code } from 'components/Code';
import { Link } from 'components/Link';
import { Image } from 'components/Image';
import { PAGES } from 'services/pages';
import { Editor } from 'components/Editor';
import { Exercise } from 'components/Exercise';
import { NextKataButton } from 'components/NextKataButton';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'components/Table';

const Kata: NextPage = () => (
  <>
    <Title>{PAGES.FlowLayout.title}</Title>

    <p>
      <strong>Read this kata carefully.</strong> It may be the most important kata of the dojo as it
      addresses the most commonly misunderstood concepts of CSS and thus is one of the biggest
      sources of CSS frustration.
    </p>

    <section>
      <Subtitle id="definition">What is a layout?</Subtitle>

      <p>
        So far, we’ve learned CSS properties to style <em>one</em> element and change its color,
        width, font size... but web pages are made of hundreds, often thousands of elements.
      </p>

      <p>
        <strong>
          A <em>layout</em> is a set of rules and CSS properties that dictates how <em>multiple</em>{' '}
          elements will interact between each other.
        </strong>{' '}
      </p>

      <p>Let me list some implications of this definition:</p>

      <ul>
        <li>
          A layout rules how CSS properties will interact. It may use specific CSS properties (such
          as <Code>flex-direction</Code> for the <em>flex</em> layout),{' '}
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
          It also means that some layout-specific properties (such as <Code>float</Code>) will be
          completely useless in the context of other layouts
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

      <p>
        There are four main layouts: <em>flow</em> (the default one), <em>flex</em>, <em>grid</em>,
        and <em>table</em>. There are others, but they are more anecdotic.{' '}
        <strong>
          As <em>flow</em> is the default layout, you <u>MUST</u> master it.{' '}
          <u>There is no way around it.</u> Let me repeat that: <u>No. Way. Around. It.</u>
        </strong>{' '}
        This is the goal of this kata.
      </p>

      <p>
        Other layouts will be addressed in the second part of the dojo. After learning all the main
        layouts, you’ll have a good understanding of which one is the more adapted to your specific
        case.
      </p>

      <p>
        Again,{' '}
        <strong>
          a <em>layout</em> is a set of rules and CSS properties that dictates how <em>multiple</em>{' '}
          elements will interact between each other.
        </strong>{' '}
      </p>
    </section>

    <section>
      <Subtitle id="formatting-contexts">The formatting contexts</Subtitle>

      <p>
        Hold on to your butts, because this kata is probably the most difficult part of this whole
        website but also the most important.
      </p>

      <p>
        The <em>flow</em> layout introduces a concept: the formatting context. Think of it as a
        mini-layout inside the <em>flow</em> layout. The spec says that there are two formatting
        contexts in the <em>flow</em> layout:
      </p>

      <dl>
        <dt>
          <strong>The block formatting context</strong>
        </dt>
        <dd>
          Block boxes are laid out vertically, one after the other, beginning at the top of a
          containing block.
        </dd>
        <dt>
          <strong>The inline formatting context</strong>
        </dt>
        <dd>
          Inline boxes are laid out horizontally, one after the other, beginning at the top of a
          containing block.
        </dd>
      </dl>

      <p>
        We’ll see how each formatting context works further down, but for now, keep in mind that
        there are <em>block</em> and <em>inline</em> contexts.
      </p>

      <p>
        For this dojo, we will be working in English but take note that in other languages the
        writing mode of the page could change and invert the block and inline directions to
        horizontal and vertical respectively.
      </p>

      <p>Let’s sum up what we’ve learned:</p>

      <Image
        src="/learn/basics/the-flow-layout-part-1-block-inline-formatting-contexts/layouts.png"
        alt="A drawing showing the four main layouts and the formatting contexts under the flow layout"
        caption="All important layouts"
      />

      <p>
        <strong>How do I know which formatting context applies?</strong> This is one of the most
        confusing parts of CSS, because it is <em>implicit</em>. There are four rules:
      </p>

      <ol>
        <li>
          A formatting context always applies inside a <em>block container box</em>. We will see
          later how to create a new <em>block container box</em> but the <Code>&lt;html&gt;</Code>{' '}
          element creates the higher one in the box tree
        </li>
        <li>
          A <em>block container box</em> having only <em>inline-level boxes</em> as children will
          have an inline formatting context
        </li>
        <li>
          A <em>block container box</em> having only <em>block-level boxes</em> as children will
          have a block formatting context
        </li>
        <li>
          There can be no mixup between <em>block-level boxes</em> and <em>inline-level boxes</em>{' '}
          in a <em>block container box</em>
        </li>
      </ol>

      <p>
        (Yes I know that using <em>block container box</em> and <em>block-level box</em> is super
        confusing but those are the exact terms in the spec.)
      </p>

      <p>
        <strong>
          But what are <em>block-level and inline-level boxes</em>?
        </strong>{' '}
        Remember, <Link href={PAGES.TheBoxModel.url()}>in CSS everything is a box</Link>.
        Text-related elements such as <Code>&lt;strong&gt;</Code>, <Code>&lt;em&gt;</Code> or{' '}
        <Code>&lt;span&gt;</Code> will create inline-level boxes. Other elements such as{' '}
        <Code>&lt;p&gt;</Code>, <Code>&lt;section&gt;</Code> or <Code>&lt;div&gt;</Code> will create
        block-level boxes.
      </p>

      <Editor
        code={`<style>
html {
  border: 1px solid red;
}
html .child {
  border: 1px solid black;
}
</style>

<span class="child">Inline-level</span>
<span class="child">boxes</span>
<span class="child">in a block container box</span>`}
      />

      <Editor
        code={`<style>
html {
  border: 1px solid red;
}
html .child {
  border: 1px solid black;
}
</style>

<div class="child">Block-level</div>
<div class="child">boxes</div>
<div class="child">in a block container box</div>`}
      />

      <p>
        <strong>
          What if I have some text that is not wrapped in inline elements such as{' '}
          <Code>&lt;span&gt;</Code>?
        </strong>{' '}
        In order to fix the rule of the inline formatting context (it must contain only inline-level
        boxes), the browser creates anonymous inline-level boxes around unwrapped text. You can’t
        select them with CSS but you can still inspect them with the dev tools.
      </p>

      <Editor
        code={`<style>
html {
  border: 1px solid red;
}
html .child {
  border: 1px solid black;
}
</style>

Anonymous inline-level
<span class="child">boxes</span>
in a block container box`}
      />

      <Image
        src="/learn/basics/the-flow-layout-part-1-block-inline-formatting-contexts/anonymous-box.png"
        alt="The dev tools inspecting the HTML generated in the editor above"
        caption="An anonymous inline-level box as seen in the dev tools"
      />

      <p>
        <strong>
          What if I mix up inline and block elements, such as <Code>&lt;span&gt;</Code> and{' '}
          <Code>&lt;block&gt;</Code>?
        </strong>{' '}
        In order to fix the rule of the block formatting context (it must contain only block-level
        boxes), the browser creates anonymous block-level boxes around inline-level children. Again,
        you can’t select them with CSS <em>and</em> you can’t inspect them with the dev tools (but
        trust me, they are here).
      </p>

      <Editor
        code={`<style>
html {
  border: 1px solid red;
}
html .child {
  border: 1px solid black;
}
</style>

<span class="child">Anonymous block-level</span>
<div class="child">boxes</div>
in a
<span class="child">block container box</span>`}
      />

      <p>
        One thing that must be cleared up before going forward is that all these layout rules are
        about <em>boxes</em>, not <em>elements</em>. DOM elements can create inline and block-level
        boxes, but then you can forget about the DOM and only think in term of boxes.
      </p>

      <p>
        Furthermore, when creating boxes the browser will look at all the descendants in the DOM
        tree.{' '}
        <strong>
          By default, every element will be handled by its nearest parent block container box
        </strong>
        . We say that it will <em>participate in the parent’s formatting context</em>, or that it’s{' '}
        <em>in the flow</em>. That’s why the example below renders exactly the same as the example
        above, even if the DOM is different. All boxes are handled by the nearest block container
        box (created by the <Code>&lt;html&gt;</Code> element).
      </p>

      <Editor
        code={`<style>
html {
  border: 1px solid red;
}
html .child {
  border: 1px solid black;
}
</style>

<!-- We moved the <div> inside the <span> -->
<span class="child">Anonymous block-level <div class="child">boxes</div></span>
in a
<span class="child">block container box</span>`}
      />

      <p>
        If we try to sum up all of this, the browser takes all the elements, turns them into boxes
        (block-level and inline-level boxes), arrange them in a block container box, introduces
        anonymous block-level and inline-level boxes and creates formatting contexts accordingly.
      </p>

      <Image
        src="/learn/basics/the-flow-layout-part-1-block-inline-formatting-contexts/formatting-contexts.png"
        alt="A drawing showing squares and lines at the top to represent block and inline boxes, and at the bottom the same squares and lines arranged in boxes and formatting contexts"
        caption="How the browser transforms different elements into boxes and formatting contexts"
      />
    </section>

    <section>
      <Subtitle id="mastering-formatting-contexts">Mastering the formatting contexts</Subtitle>

      <p>
        <strong>
          What if I introduce a block element <em>inside</em> of an inline element?
        </strong>
      </p>

      <Exercise
        task="Put a block element inside the middle inline element and try to predict the result"
        initialCode={`<style>
html {
  border: 1px solid red;
}
html .child {
  border: 1px solid black;
}
</style>

<span class="child">Inline-level</span>
<span class="child">boxes</span>
<span class="child">in a block container box</span>`}
        solution={`<style>
html {
  border: 1px solid red;
}
html .child {
  border: 1px solid black;
}
</style>

<span class="child">Inline-level</span>
<span class="child">boxes <div>this is a block!</div></span>
<span class="child">in a block container box</span>`}
      />

      <p>
        Remember, we are dealing with boxes here.{' '}
        <strong>
          A formatting context doesn’t care about DOM elements. It only cares about block-level
          boxes and inline-level boxes.
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
        <li>
          An empty anonymous inline-level box resulting from the split of the middle{' '}
          <Code>&lt;span&gt;</Code>
        </li>
        <li>
          An inline-level box created by the last <Code>&lt;span&gt;</Code>
        </li>
      </ul>

      <p>
        Thus, the <Code>&lt;div&gt;</Code> breaks the inline formatting context and forces a block
        formatting context by introducing anonymous block-level boxes around the groups of
        inline-level boxes. The browser tries to reconcile other CSS properties in the most logical
        way possible. Here, you can see that there is a border on the bottom, left and top sides of
        the first anonymous inline-level box and the right border is on the last anonymous and empty
        inline-level box (increase the border’s width if it is not clear enough).
      </p>

      <p>
        <strong>
          To change the default behavior of DOM elements, you must use the{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
            <Code>display</Code>
          </Link>{' '}
          property.
        </strong>{' '}
        The <Code>display: [outer] [inner];</Code> property is most commonly used with shorthands (
        <Code>block</Code>, <Code>inline</Code>, <Code>flex</Code>...) but here we’ll learn it with
        its full syntax to understand what happens.
      </p>

      <dl>
        <dt>
          <strong>The outer display type</strong>
        </dt>
        <dd>
          This defines how the element should behave in the context of its parent. Possible values
          are <Code>block</Code> and <Code>inline</Code>.
        </dd>
        <dt>
          <strong>The inner display type</strong>
        </dt>
        <dd>
          This defines how the element’s children will lay out. Possible values are{' '}
          <Code>flow</Code> (participate in the parent’s formatting context), <Code>flow-root</Code>{' '}
          (create an independent formatting context using the flow layout), and other layout
          keywords such as <Code>flex</Code> and <Code>grid</Code>.
        </dd>
      </dl>

      <p>
        <strong>
          <Link href="https://caniuse.com/mdn-css_properties_display_multi-keyword_values">
            The two-value syntax is supported in Firefox and Safari but not yet in Chrome.
          </Link>{' '}
          If you are using Chrome/Edge here is a quick summary of what value to use to get the same
          results:
        </strong>
      </p>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell style={{ width: '40%' }}>Two-value syntax</TableHeaderCell>
            <TableHeaderCell>Shorthand</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[
            ['block flow', 'block'],
            ['inline flow', 'inline'],
            ['block flow-root', 'flow-root'],
            ['inline flow-root', 'inline-block'],
          ].map(([fullSyntax, shorthand]) => (
            <TableRow key={shorthand}>
              <TableCell key={shorthand}>
                <Code>{fullSyntax}</Code>
              </TableCell>
              <TableCell>
                <Code>{shorthand}</Code>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p>
        Thus, a <Code>&lt;span&gt;</Code> element defaults to <Code>display: inline flow;</Code>{' '}
        (same as <Code>display: inline;</Code>) and a <Code>&lt;div&gt;</Code> element defaults to{' '}
        <Code>display: block flow;</Code> (same as <Code>display: block;</Code>).
      </p>

      <Image
        src="/learn/basics/the-flow-layout-part-1-block-inline-formatting-contexts/inner-outer-display.png"
        alt="A table of display types combining outer display inline and block with inner display flow and flow-root"
        caption="Different combinations of outer and inner display types"
      />

      <p>
        Now, let’s say we have a paragraph of elements forming an inline formatting context. We also
        have a block element, for instance a button, that we want to inline in our text.
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
        If you already know the short answer, try to do it with the outer/inner display syntax.
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
        inline-level box, therefore an inline formatting context will apply everywhere and our
        button will lose some of its block-level box properties that we want to keep. By choosing{' '}
        <Code>flow-root</Code>, we force the creation of an independent block formatting context.
      </p>

      <p>
        <strong>
          Good! At this stage, you should have a good grasp of when and where formatting contexts
          apply, and how to switch between them.
        </strong>{' '}
        Don’t hesitate to let your brain cool off and think about it twice. I’m repeating myself but
        it probably is the most confusing concept about CSS, and it is really important to truly{' '}
        <em>understand</em> it.
      </p>
    </section>

    <section>
      <Subtitle id="block-formatting-context">The block formatting context</Subtitle>

      <p>
        Now that you know what are formatting contexts and where they apply, we can learn their
        rules. Remember, a{' '}
        <strong>
          <em>layout</em> is a set of rules and CSS properties that dictates how <em>multiple</em>{' '}
          elements will interact between each other,
        </strong>{' '}
        and a formatting context is a mini-layout inside the flow layout. Let’s learn the rules of
        the block formatting context.
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
        task="Here, every margin collapses and every block is 10px vertically from its adjacent boxes. Try to break the margin collapsing in at least 3 different ways"
        initialCode={`<style>
html {
  border: 1px solid red;
}
div {
  margin: 10px;
}
</style>

<div class="a">Block-level box A</div>
<div class="parent-1">
  <div class="b">Block-level box B</div>
  <div class="c">Block-level box C</div>
  <div class="d">
    <div class="e">Block-level box D</div>
    <div class="f">Block-level box E</div>
  </div>
</div>
`}
        solution={`<style>
html {
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
`}
      />
    </section>

    <section>
      <Subtitle id="inline-formatting-context">The inline formatting context</Subtitle>

      <p>
        Next, we learn the rules for the inline formatting context. Let’s bring up the schema from{' '}
        <Link href={PAGES.StylingTextCustomFonts.url()}>the styling text kata</Link> to understand
        what is the line height and the baseline:
      </p>

      <Image
        src="/learn/basics/styling-text/typography.svg"
        alt="A lorem ipsum text with arrows pointing to different characteristics of a line of text"
        aria-describedby="typography-schema-description"
        caption="Schema of a line of text and related CSS properties"
      />

      <ul>
        <li>
          Boxes are laid out on the baseline one after the other horizontally in the writing
          direction
        </li>
        <li>If there is not enough space, the boxes break into a new line</li>
        <li>The height of a line is defined by the tallest box in it</li>
        <li>
          You can’t set <Code>width</Code> or <Code>height</Code> on inline boxes
        </li>
        <li>Margins work only in the inline direction </li>
        <li>
          The{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align">
            <Code>vertical-align</Code>
          </Link>{' '}
          property sets how an inline-level box should behave in the vertical direction. Possible
          values are <Code>baseline</Code> (the default), <Code>top</Code> (the box will stick to
          the top of the line), <Code>bottom</Code> (same but at the bottom of the line),{' '}
          <Code>middle</Code> (centers vertically inside the line,{' '}
          <strong>
            which is not the same as <Code>baseline</Code>!
          </strong>
          ), <Code>sub</Code> and <Code>super</Code> for exponents
        </li>
        <li>
          The{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/word-break">
            <Code>word-break</Code>
          </Link>{' '}
          property controls how words are broken when the text wraps. Classic values are{' '}
          <Code>normal</Code> and <Code>break-all</Code> (can break after any character)
        </li>
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
        task='Make the height of the first line bigger, make the "relevant information" text fly to the top, make the empty line in the HTML paragraph appear and break the super duper long word'
        initialCode={`<style>
html {
  border: 1px solid red;
}
strong {
  margin: 10px;
  height: 3rem; /* doesn't work :( */
}
</style>

<div>This is some text, with <strong>important words</strong> and <em>relevant information</em>. It is quite long so it should wrap at the end of the line. Let's write even more text to ensure this paragraph wraps on at least 4 lines.

Furthermore, let's add an imaginary super duper long word: Antipericatametaanaparcircumvolutiorectumgustpoops.</div>
`}
        solution={`<style>
html {
  border: 1px solid red;
}
strong {
  margin: 10px;
  height: 3rem; /* doesn't work :( */
  line-height: 3rem;
}
div {
  word-break: break-all;
  white-space: pre-wrap;
}
em {
  vertical-align: top;
}
</style>

<div>This is some text, with <strong>important words</strong> and <em>relevant information</em>. It is quite long so it should wrap at the end of the line. Let's write even more text to ensure this paragraph wraps on at least 4 lines.

Further more, let's add an imaginary super duper long word: Antipericatametaanaparcircumvolutiorectumgustpoops.</div>

`}
      />
    </section>

    <section>
      <Subtitle id="key-learnings">What I should remember</Subtitle>

      <p>
        Ooof! That was a hard one. Now you should have enough knowledge to truly understand and use
        the <em>flow</em> layout! In the next katas, we’ll focus on edge case behaviors that break
        the flow layout such as overflowing content and positioned elements.
      </p>

      <ul>
        <li>
          <strong>
            Layouts are rulesets that enable developers to place elements relative to each other
          </strong>
        </li>
        <li>
          There are four main layouts: <em>flow</em> (the default one), <em>flex</em>, <em>grid</em>
          , and <em>table</em>
        </li>
        <li>
          The flow layout has two mini-layouts: the <em>block formatting context</em> and the{' '}
          <em>inline formatting context</em>
        </li>
        <li>
          The formatting contexts are applied at the <em>block container box</em> level. The{' '}
          <Code>&lt;html&gt;</Code> element creates a <em>block container box</em>,{' '}
          <Code>display: flow-root;</Code> is another way to create one
        </li>
        <li>
          Inside a <em>block container box</em>, the browser turns all DOM elements into block-level
          and element-level boxes (including all descendants, by default they{' '}
          <em>participate in the parent formatting context</em>)
        </li>
        <li>
          A <em>block (or inline) formatting context</em> will be used if all children are{' '}
          <em>block (or inline)-level boxes</em>
        </li>
        <li>The browser fixes the box tree with anonymous block-level and inline-level boxes</li>
        <li>
          The <Code>display: [outer] [inner];</Code> property changes the{' '}
          <em>outer display type</em> and <em>inner display type</em> of an element
        </li>
        <li>
          The <em>outer display type</em> tells the browser if the element should behave as a
          block-level or inline-level box in the context of its parent <em>block container box</em>
        </li>
        <li>
          The <em>inner display type</em> tells the browser what layout should apply inside the
          element. For instance, <Code>flow</Code>, <Code>flow-root</Code>, <Code>flex</Code>, and{' '}
          <Code>grid</Code> are all valid values
        </li>
        <li>
          You’ll always see and use those shorthands:
          <ul>
            <li>
              <Code>display: block;</Code> is the same as <Code>display: block flow;</Code>
            </li>
            <li>
              <Code>display: inline;</Code> is the same as <Code>display: inline flow;</Code>
            </li>
            <li>
              <Code>display: inline-block;</Code> is the same as{' '}
              <Code>display: inline flow-root;</Code>
            </li>
            <li>
              <Code>display: flex;</Code> is the same as <Code>display: block flex;</Code>
            </li>
            <li>
              <Code>display: inline-flex;</Code> is the same as <Code>display: inline flex;</Code>
            </li>
            <li>
              (same thing with <Code>grid</Code> and <Code>table</Code>)
            </li>
          </ul>
        </li>
        <li>
          The rules of the <em>block formatting context</em> are:
          <ul>
            <li>Boxes lay out vertically and consume all the space in the inline direction</li>
            <li>Margins collapse between adjacent boxes that don’t have content between them</li>
          </ul>
        </li>
        <li>
          The rules of the <em>inline formatting context</em> are:
          <ul>
            <li>Boxes are laid out horizontally on the baseline</li>
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

      <NextKataButton href={PAGES.OverflowingContentFloats.url()} />
    </section>
  </>
);

export default Kata;
