import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Code } from 'components/Code';
import { Link } from 'components/Link';
import { Image } from 'components/Image';
import { PAGES } from 'services/pages';
import { Editor } from 'components/Editor';

const Kata: NextPage = () => (
  <>
    <Title>The Flow layout (part 1) - block and inline formatting contexts</Title>

    <p>
      <strong>Read this kata carefully.</strong> It may be the most important kata of the dojo as it
      addresses the most common misunderstood concepts of CSS and thus one of the biggest source of
      CSS frustration.
    </p>

    <section>
      <Subtitle id="">What is a layout?</Subtitle>

      <p>
        <strong>
          Again, pay attention. This is the most important section to remember when stepping away
          from this page.
        </strong>
      </p>

      <p>
        So far, we’ve learnt CSS properties to style <em>one</em> element, change its color, width,
        font size... but web pages are made of hundreds, often thousands of elements.
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
        ruleset? Change your toolbox, use another layout.
      </p>

      <p>
        There are four main layouts: <em>flow</em> (the default one), <em>flex</em>, <em>grid</em>{' '}
        and <em>table</em>. There are others, but they are more anecdotic.{' '}
        <strong>
          As <em>flow</em> is the default layout, you <u>MUST</u> master it.{' '}
          <u>There is no way around it.</u> Let me repeat that: <u>No. Way. Around. It.</u>
        </strong>{' '}
        This is the goal of this kata.
      </p>

      <p>
        Other layouts will be addressed in the second part of the dojo. After learning all main
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
          Block boxes are laid out one after the other, vertically, beginning at the top of a
          containing block.
        </dd>
        <dt>
          <strong>The inline formatting context</strong>
        </dt>
        <dd>
          In an inline formatting context, inline boxes are laid out horizontally, one after the
          other, beginning at the top of a containing block.
        </dd>
      </dl>

      <p>
        We’ll see how each formatting context works further down, but for now keep in mind that
        there are <em>block</em> and <em>inline</em> contexts.
      </p>

      <p>
        For this dojo we will be working in English but take note that in other languages the
        writing mode of the page could change and invert the block and inline directions to
        horizontal and vertical respectively.
      </p>

      <p>For now, let’s sum up what we’ve learnt:</p>

      <Image
        src="/learn/basics/the-flow-layout-part-1-block-inline-formatting-contexts/layouts.png"
        alt="A drawing showing the four main layouts and the formatting contexts under the flow layout"
        caption="All important layouts"
      />

      <p>
        <strong>How do I know which formatting context applies?</strong> This is one of the most
        confusing part of CSS, because it is <em>implicit</em>. There are four rules:
      </p>

      <ol>
        <li>
          A formatting context always applies inside a <em>block container box</em>. We will see
          later how to create a new <em>block container box</em> but the <Code>&lt;html&gt;</Code>{' '}
          element basically creates the higher one in the box tree.
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
        confusing but those are the exact terms.)
      </p>

      <p>
        <strong>
          But what are <em>block and inline level boxes</em>?
        </strong>{' '}
        Remember, in CSS <Link href={PAGES.TheBoxModel.url()}>everything is a box</Link>.
        Text-related elements such as <Code>&lt;strong&gt;</Code>, <Code>&lt;em&gt;</Code> or{' '}
        <Code>&lt;span&gt;</Code> will create inline-level boxes. Other elements such as{' '}
        <Code>&lt;p&gt;</Code>, <Code>&lt;section&gt;</Code> or <Code>&lt;div&gt;</Code> will create
        block-level boxes.
      </p>

      <Editor
        code={`<style>
html {
  border: 1px solid red;
  margin: 10px 0;
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
  margin: 10px 0;
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
  margin: 10px 0;
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
        caption="A anonymous inline-level box as seen in the dev tools"
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
  margin: 10px 0;
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
    </section>

    <section>
      <Subtitle id="mastering-formatting-contexts">Mastering the formatting contexts</Subtitle>
    </section>

    <section>
      <Subtitle id="block-formatting-context">The block formatting context</Subtitle>
    </section>

    <section>
      <Subtitle id="inline-formatting-context">The inline formatting context</Subtitle>

      <p>
        Ooof! That was a hard one. Now you should have enough knowledge to truly understand and use
        the <em>flow</em> layout! Congratulations, because few frontend developers really{' '}
        <em>know</em> it. In the next katas, we’ll focus on edge cases behaviors that break the flow
        layout such as overflowing content and positionned elements.
      </p>
    </section>

    <section>
      <Subtitle id="key-learnings">What I should remember</Subtitle>

      <ul>
        <li>
          <strong>
            Layouts are rulesets that enable developers to place elements relative to each others
          </strong>
        </li>
        <li>
          There are four main layouts: <em>flow</em> (the default one), <em>flex</em>, <em>grid</em>{' '}
          and <em>table</em>
        </li>
        <li>
          The flow layout has two mini-layouts: the <em>block formatting context</em> and the{' '}
          <em>inline formatting context</em>
        </li>
        <li>
          The formatting contexts are applied at the <em>block container box</em> level. The{' '}
          <Code>&lt;html&gt;</Code> element creates a <em>block container box</em>,{' '}
          <Code>display: flow-root;</Code> is another way to create one.
        </li>
        <li>
          Inside a <em>block container box</em>, a <em>block (or inline) formatting context</em>{' '}
          will be used if all children are <em>block (or inline)-level boxes</em>
        </li>
        <li>The browser fixes the box tree with anonymous block-level and inline-level boxes</li>
        <li>
          The <Code>display: [outer] [inner];</Code> property changes the{' '}
          <em>outer display type</em> and <em>inner display type</em> of an element
        </li>
        <li>
          The <em>outer display type</em> tells the browser if the element should behave as a
          block-level or inline-level box in the conext of its parent <em>block container box</em>
        </li>
        <li>
          The <em>inner display type</em> tells the browser what layout should apply inside the
          element. For instance, <Code>flow</Code>, <Code>flow-root</Code>, <Code>flex</Code> and{' '}
          <Code>grid</Code> are all valid values.
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
            <li></li>
          </ul>
        </li>
        <li>
          The rules of the <em>inline formatting context</em> are:
          <ul>
            <li></li>
          </ul>
        </li>
      </ul>
    </section>
  </>
);

export default Kata;
