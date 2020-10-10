import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Exercise } from 'components/Exercise';
import { Image } from 'components/Image';
import { Code } from 'components/Code';
import { Link } from 'components/Link';
import { NextKataButton } from 'components/NextKataButton';

const Kata: NextPage = () => (
  <>
    <Title>The Box Model</Title>
    <Subtitle>Definition</Subtitle>
    <p>
      Every DOM element (even text) is modelized in CSS by a box, and{' '}
      <strong>it is really important to understand how this box system works</strong> to master
      layout techniques and every little detail about CSS.
    </p>
    <Image
      src="/learn/basics/the-box-model/box-model.png"
      alt="A box showing how width, height, padding, border and margin are related to each other"
      caption="Schema of the Box model (source: MDN)"
    />
    <p>
      Every box has 5 characteristics:{' '}
      <strong>a width, a height, a padding, a border and a margin</strong>. Inspect those properties
      in your browser’s dev tools:
    </p>
    <Image
      src="/learn/basics/the-box-model/devtools.png"
      alt="The box model in the Firefox dev tools"
    />
    <p>
      Those <em>characteristics</em> are different from the <Code>width</Code>, <Code>height</Code>,{' '}
      <Code>padding</Code>, <Code>border</Code> and <Code>margin</Code> CSS <em>properties</em>.{' '}
      <strong>
        What you see in the dev tools is <em>what the box actually is</em>, not{' '}
        <em>what we ask it to be</em>.
      </strong>
    </p>
    <p>
      Those CSS <em>properties</em> will impact (or not) those <em>characteristics</em> depending on
      the <em>display mode</em>.
    </p>
    <Subtitle>The display property</Subtitle>
    <p>
      You can change the display mode with the <Code>display</Code> CSS property. There are two main
      display modes: <em>block</em> and <em>inline</em>.
    </p>
    <dl>
      <dt>block</dt>
      <dd>
        The box will extend in the line direction to fill the space available in its container. The{' '}
        <Code>width</Code> and <Code>height</Code> properties are respected.
      </dd>

      <dt>inline</dt>
      <dd>
        The <Code>width</Code> and <Code>height</Code> properties do not apply.
      </dd>
    </dl>
    <Exercise
      task="try to set the width and height of both boxes to 200px"
      initialCode={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}

.block { display: block; }
.inline { display: inline; }
</style>

<span class="box block">Block box</span>
<span class="box inline">Inline box</span>`}
      solution={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
  height: 200px;
}

.block { display: block; }
.inline { display: inline; }
</style>

<span class="box block">Block box</span>
<span class="box inline">Inline box</span>`}
    />
    <p>
      In the above example, something is not really intuitive: I you inspect the first box with the
      dev tools, we end up with a distance from border to border included of 222px. Let’s bring up
      the box model again:
    </p>
    <Image
      src="/learn/basics/the-box-model/box-model.png"
      alt="A box showing how width, height, padding, border and margin are related to each other"
      caption="Schema of the Box model (source: MDN)"
    />
    <p>
      We get 222px because: 1px from left <Code>border</Code> + 10px from left <Code>padding</Code>{' '}
      + 200px from <Code>width</Code> + 20px from right <Code>padding</Code> + 1px from right{' '}
      <Code>border</Code> = 222px. This is not intuitive because most humans will consider a box
      what is delimited by the borders. But fear not!{' '}
      <strong>There is an alternate box model.</strong>
    </p>
    <p>
      The default box model is the <Code>content-box</Code> model. The other box model is the{' '}
      <Code>border-box</Code> model. In this model, the width and height <em>characteristics</em>{' '}
      are defined as content + padding + border. By setting the <Code>box-sizing</Code> property,
      you can change the model used.
    </p>
    <Exercise
      task="change the first box so that it is 200px wide - border to border"
      initialCode={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
  height: 200px;
}

.block { display: block; }
.inline { display: inline; }
</style>

<span class="box block">Block box</span>
<span class="box inline">Inline box</span>`}
      solution={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
}

.block { display: block; }
.inline { display: inline; }
</style>

<span class="box block">Block box</span>
<span class="box inline">Inline box</span>`}
    />
    <Subtitle>Help! I broke the box model</Subtitle>
    If you played a bit with the live editor, you may have noticed two issues.
    <Exercise
      task="set the block width to 10px and remove the margins"
      initialCode={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 200px;
  height: 200px;
}

.block { display: block; }
.inline { display: inline; }
</style>

<span class="box block">Block box</span>
<span class="box inline">Inline box</span>`}
      solution={`<style>
.box {
  border: 1px solid black;
  padding: 10px;
  width: 10px;
  height: 200px;
  box-sizing: border-box;
}

.block { display: block; }
.inline { display: inline; }
</style>

<span class="box block">Block box</span>
<span class="box inline">Inline box</span>`}
    />
    No worries! We’re going to understand what happens in the next two katas:
    <ul>
      <li>
        Why the text gets outside the box: the <Link href="">overflowing content kata</Link>
      </li>
      <li>
        Why the inline box gets merged with the block box: the <Link href="">flow layout Kata</Link>
      </li>
    </ul>
    <NextKataButton href="" />
  </>
);

export default Kata;
