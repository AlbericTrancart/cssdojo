import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Exercise } from 'components/Exercise';
import { Image } from 'components/Image';
import { Code } from 'components/Code';
import { Editor } from 'components/Editor';
import { Link } from 'components/Link';
import { NextKataButton } from 'components/NextKataButton';
import { KataQuestions } from 'components/KataQuestions';
import { PAGES } from 'services/pages';
import twitterProfileImage from './twitter-profile.png';

const Kata: NextPage = () => (
  <>
    <Title>CSS units and variables</Title>

    <KataQuestions
      skillIds={[
        'css-units-variables-units',
        'css-units-variables-good-unit',
        'css-units-variables-px-rem',
        'css-units-variables-variables',
        'css-units-variables-keywords',
      ]}
    />

    <p>
      One last step before learning new CSS properties: we must learn about various CSS units that
      we can use as values of those properties. Like selectors, there are a lot of CSS units, but
      we’ll list only the most useful ones.
    </p>

    <section>
      <Subtitle id="css-units">CSS units</Subtitle>

      <p>Let’s start with colors. You can define a color by:</p>

      <ul>
        <li>
          Using a keyword (<Code>red</Code>, <Code>blue</Code>, <Code>lightgoldenrodyellow</Code>
          ...).{' '}
          <Link href="https://www.w3.org/wiki/CSS/Properties/color/keywords">
            Link to the complete list of color keywords
          </Link>
        </li>
        <li>
          Using a hexadecimal code (<Code>#02798b</Code>, <Code>#c55da1</Code>...). This is probably
          the most common way colors will be defined on various websites
        </li>
        <li>
          Using a RGB/RGBA value (<Code>rgb(2, 121, 139)</Code>, <Code>rgba(18, 138, 125, .9)</Code>
          ...). The Alpha channel of RGBA colors controls opacity, but remember that it is different
          from the <Code>opacity</Code> property, which sets the opacity of the whole element
        </li>
      </ul>

      <p>
        Alright, quite simple. But a lot more can be said about length units. We can split them into
        two categories: <em>absolute</em> units and <em>relative</em> units.
      </p>

      <p>
        <strong>Absolute units are generally considered to always appear the same size.</strong> The
        ones you’ll use and see:
      </p>

      <dl>
        <dt>
          <strong>
            <Code>px</Code>
          </strong>
        </dt>
        <dd>
          The classic CSS unit. The exact definition in the CSS specification is that it should
          measure 1/96th of an inch.{' '}
          <strong>
            However, in practice a CSS <Code>px</Code> never maps exactly to 1/96th of an inch nor a
            device pixel, and you shouldn’t assume it will.
          </strong>{' '}
          This is because depending on user’s zoom setting, the screen’s physical size and actual
          resolution, the CSS <Code>px</Code> will be a reference unit adapted for optimal usage.
          For instance, on a high pixel density Retina display the CSS <Code>px</Code> unit might be
          represented by multiple device pixels, mapping the CSS <Code>px</Code> close to 1/96th of
          an inch. <em>Why is this important?</em> Depending on the zoom setting and how the browser
          handles fractions of a pixel, a <Code>1px</Code> thick line will look differently and
          might even disappear.{' '}
          <strong>
            Understanding that will help you understand some &quot;bugs&quot; and visual glitches.
          </strong>
        </dd>

        <dt>
          <strong>
            <Code>cm</Code> and <Code>mm</Code>
          </strong>
        </dt>
        <dd>If you ever have to design something for print, these will be useful.</dd>
      </dl>

      <p>
        <strong>Relative units are always relative to something else:</strong>
      </p>

      <dl>
        <dt>
          <strong>
            <Code>%</Code>
          </strong>
        </dt>
        <dd>
          Depending on the property, represents a percentage of a property of the parent element.
        </dd>

        <dt>
          <strong>
            <Code>em</Code>
          </strong>
        </dt>
        <dd>
          A percentage of the <Code>font-size</Code> of the element itself. If the current element
          has a computed <Code>font-size</Code> of 20 pixels, <Code>1.25em</Code> will represent 25
          pixels
        </dd>

        <dt>
          <strong>
            <Code>rem</Code>
          </strong>
        </dt>
        <dd>
          A percentage of the <Code>font-size</Code> of the root <Code>&lt;html&gt;</Code> element
        </dd>

        <dt>
          <strong>
            <Code>vh</Code>, <Code>vw</Code>
          </strong>
        </dt>
        <dd>
          A percentage of the viewport height and width. For instance, <Code>50vh</Code> represents
          half the height of the browser window current height
        </dd>

        <dt>
          <strong>
            <Code>ch</Code>
          </strong>
        </dt>
        <dd>
          The width of the glyph <Code>0</Code> of the element’s font. Might be useful in some very
          specific cases (for instance wanting a width of exactly 8 characters)
        </dd>
      </dl>

      <Exercise
        task="set the boxes to use the correct units!"
        initialCode={`<style>
/*
 * The base font-size of this website is 125%
 * which should compute to 20px in most browsers
 */
.box { border: 1px solid violet; }
.box-parent { width: 75%; }
.box-percent {  }
.box-vw {  }
.box-px {  }
.box-em {  }
</style>

<div class="box box-parent">
  <div class="box box-percent">50%</div>
  <div class="box box-vw">50vw</div>
  <div class="box box-px">200px</div>
  <div class="box box-em">10rem</div>
</div>`}
        solution={`<style>
/*
 * The base font-size of this website is 125%
 * which should compute to 20px in most browsers
 */
.box { border: 1px solid violet; }
.box-parent { width: 75%; }
.box-percent { width: 50%; }
.box-vw { width: 50vw; }
.box-px { width: 200px; }
.box-em { width: 10rem; }
</style>

<div class="box box-parent">
  <div class="box box-percent">50%</div>
  <div class="box box-vw">50vw</div>
  <div class="box box-px">200px</div>
  <div class="box box-em">10rem</div>
</div>`}
      />

      <p>
        <em>Which unit should I use?</em> <strong>Always go with the designer’s intent.</strong>{' '}
        Most of the time, the designer’s intent will be clear in the mockups. If it is not the case,
        go talk to her/him. CSS should always be the closest description of the designer’s intent.
      </p>

      <Image
        src={twitterProfileImage}
        alt="A website (Twitter in this case) with a sidebar"
        caption="Real-life example: does the side menu have a relative (% or vw) or fixed (px or rem) width? Go talk to your designer to get the intent."
      />

      <p>
        <strong>However, pixels are an exception.</strong> You should never use <Code>px</Code> for{' '}
        <Code>font-size</Code>: some users and devices prefer to set a custom <Code>font-size</Code>{' '}
        for better readability and accessibility. If you set a <Code>font-size</Code> value with{' '}
        <Code>px</Code>, you are saying to those users: &quot;I don’t care about you&quot;.{' '}
        <strong>
          Prefer <Code>rem</Code> and <Code>em</Code> that scale with the base font size.
        </strong>
      </p>

      <p>
        Then, if <Code>font-size</Code> are set with <Code>rem</Code> and <Code>em</Code>, you
        probably want your spacing properties (<Code>padding</Code>, <Code>margin</Code>...) to use
        these values too. Otherwise the layout would not scale the same way as your font size,
        leading to unexpected visual bugs. As a bonus, if you ever want to change the base font size
        of your website, everything will scale automatically.
      </p>

      <p>
        <em>But most designers use pixels!</em> Yes, but as we care about our users and the vast
        tapestry of possible devices they use, we should use <Code>rem</Code> and <Code>em</Code>.
        Fear not! As we’ll see with preprocessors and CSS-in-JS, there are easy ways to convert
        pixels to these units. Here is an{' '}
        <Link href="https://engageinteractive.co.uk/blog/em-vs-rem-vs-px">
          excellent article explaining the px vs em issue
        </Link>
        .
      </p>
    </section>

    <section>
      <Subtitle id="css-variables">CSS variables</Subtitle>

      <p>
        When handling CSS values there are many pitfall that you want to avoid. The first of them is{' '}
        <em>hardcoding values that may change</em>.{' '}
      </p>

      <p>
        Usually when we develop we use variables to describe values that may change and it is a good
        practice to never hardcode &quot;constants&quot;. CSS is no exception. Imagine if you want
        to change the whole color scheme of your website. You would have to go through all your CSS
        files!
      </p>

      <p>
        Hopefully, CSS does have variables and{' '}
        <Link href="https://caniuse.com/css-variables">
          you can use variables if you don’t have to support IE 11
        </Link>
        . You can define a variable in a global scope or a local one and use them with the{' '}
        <Code>var()</Code> function. Try it for yourself!
      </p>

      <Exercise
        task="make the disclaimer more important by turning it red using a variable"
        initialCode={`<style>
:root {
  --big: 2rem;
  --small: 0.5rem;
}
.article {
  --small: 0.75rem;
}
.title { font-size: var(--big) }
.disclaimer { font-size: var(--small) }
.whisper { font-size: var(--small) }
</style>

<h1 class="title">Hello world!</h1>

<article class="article">
  This CSS uses variables <small class="whisper">and I like it</small>
</article>

<p class="disclaimer">...unless you’re using IE 11</p>`}
        solution={`<style>
:root {
  --big: 2rem;
  --small: 0.5rem;
  --important-color: red;
}
.article {
  --small: 0.75rem;
}
.title { font-size: var(--big) }
.disclaimer {
  font-size: var(--small);
  color: var(--important-color);
}
.whisper { font-size: var(--small) }
</style>

<h1 class="title">Hello world!</h1>

<article class="article">
  This CSS uses variables <small class="whisper">and I like it</small>
</article>

<p class="disclaimer">...unless you’re using IE 11</p>`}
      />

      <p>
        Furthermore, you can also use the <Code>calc()</Code> function to compute length from
        different length units. For instance, <Code>calc(50% + (var(--header-height) / 2))</Code> is
        totally possible!
      </p>

      <p>
        <strong>If I have to support IE 11?</strong> In the &quot;Advanced CSS&quot;, we’ll see
        preprocessors and CSS in JS, which have great solutions to this problem (and many others).
        Just be patient!
      </p>

      <p>
        <strong>When should I use variables?</strong> Almost everywhere! In addition to be easier to
        change, variables also convey sense because the values are named. Take the two versions of
        this code that does the same thing (don’t worry about the <Code>box-sizing</Code> and{' '}
        <Code>overflow</Code> properties, we’ll see them soon):
      </p>

      <Editor
        code={`<style>
.list-v1 {
  border: 1px solid black;
  /* WTF 72px??? Why not 69 if I want? */
  max-height: 72px;
  overflow-y: auto;
}
.list-v1 .list-item {
  height: 24px;
}

:root {
  --border-color: black;
}
.list-v2 {
  --item-height: 24px;
  --max-items: 4;

  /* The intention is clearer */
  border: 1px solid var(--border-color);
  max-height: calc(var(--max-items) * var(--item-height));
  overflow-y: auto;
}
.list-v2 .list-item {
  /* If I change the item height the max-height on the list won't be broken */
  height: var(--item-height);
}
</style>

<ul class="list-v1">
  <li class="list-item">Item 1</li>
  <li class="list-item">Item 2</li>
  <li class="list-item">Item 3</li>
  <li class="list-item">Item 4</li>
  <li class="list-item">Item 5</li>
  <li class="list-item">Item 6</li>
</ul>`}
      />

      <p>
        Yes, the second version is longer than the first version. And yes,{' '}
        <strong>
          the second version is more maintainable and less prone to bugs than the first version.
        </strong>
      </p>
    </section>

    <section>
      <Subtitle id="css-cascade">The Cascade and special values</Subtitle>

      <p>
        As you may have guessed, some properties will <em>cascade</em> their value to children
        elements. After all, we’re writing <em>Cascading</em> Style Sheets. This is the case with
        the <Code>color</Code> property: when changing the color of an element, it will apply to all
        children if not overriden. Other properties are non-cascading: this is the case with{' '}
        <Code>border</Code> for instance. There are 3 special values that enable you to control the
        cascade:
      </p>

      <dl>
        <dt>
          <Code>inherit</Code>
        </dt>
        <dd>
          Forces the cascade: if the parent element defines the property, it will take the same
          value.
        </dd>

        <dt>
          <Code>initial</Code>
        </dt>
        <dd>
          Stops the cascade: tells the element to use the initial value defined by the browser
          styles, irrelevant of if the parent defines a value for this property.
        </dd>

        <dt>
          <Code>unset</Code>
        </dt>
        <dd>
          Resets the cascade to the expected behavior: behaves as <Code>inherit</Code> for cascading
          properties and <Code>initial</Code> for non-cascading properties.
        </dd>
      </dl>

      <Exercise
        task="change the footer link style so that it takes the footer’s color and do not shows a border on hover"
        initialCode={`<style>
.link {
  color: blue;
  cursor: pointer;
}
.link:hover {
  border: 2px dashed darkblue;
  color: darkblue;
}

.footer {
  margin-top: 1rem;
  padding: 1rem;
  background-color: grey;
  color: white;
}
.footer .link {
  text-decoration: underline;
}
</style>

<a class="link">Some link</a>

<footer class="footer">
  This is the footer.
  <a class="link">Some link</a>
</footer>`}
        solution={`<style>
.link {
  color: blue;
  cursor: pointer;
}
.link:hover {
  border: 2px dashed darkblue;
  color: darkblue;
}

.footer {
  margin-top: 1rem;
  padding: 1rem;
  background-color: grey;
  color: white;
}
.footer .link {
  text-decoration: underline;
  color: inherit;
  border: initial; /* unset would also work here */
}
</style>

<a class="link">Some link</a>

<footer class="footer">
  This is the footer.
  <a class="link">Some link</a>
</footer>`}
      />
    </section>

    <section>
      <Subtitle id="key-learnings">What I should remember</Subtitle>

      <ul>
        <li>
          CSS <Code>px</Code> are <strong>not</strong> device pixels nor the same size across
          devices.
        </li>
        <li>Always go with the designer’s intent when choosing units.</li>
        <li>
          Except for pixels, you should prefer <Code>rem</Code> and <Code>em</Code> units for font
          sizes and spacing.
        </li>
        <li>
          Use variables and <Code>calc()</Code> to make your code easier to read, change and
          maintain
        </li>
        <li>
          <Code>inherit</Code> forces the cascade, <Code>initial</Code> stops it and{' '}
          <Code>unset</Code> resets it.
        </li>
      </ul>

      <NextKataButton href={PAGES.StylingTextCustomFonts.url()} />
    </section>
  </>
);

export default Kata;
