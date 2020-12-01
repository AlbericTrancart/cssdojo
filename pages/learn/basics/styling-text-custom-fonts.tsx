import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Exercise } from 'components/Exercise';
import { Image } from 'components/Image';
import { Code } from 'components/Code';
import { Link } from 'components/Link';
import { NextKataButton } from 'components/NextKataButton';
import { PAGES } from 'services/pages';
import { Editor } from 'components/Editor';

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
          <dd>
            Changes the height of the letters.{' '}
            <strong>
              For better accessibility, never use the <Code>px</Code> unit for font size, use{' '}
              <Code>em</Code> or <Code>rem</Code> instead
            </strong>{' '}
            (see <Link href={PAGES.CSSUnitsVariables.url}>previous kata</Link>).{' '}
            <strong>
              For better readability, never go a computed value of below <Code>15px</Code>.
            </strong>{' '}
            The default value of body text for most browsers is <Code>16px</Code> and most websites
            will need a computed value between <Code>16px</Code> and <Code>21px</Code>. Don’t
            hesitate to go bigger if your content is made of a lot of text (for instance, this
            website uses <Code>125%</Code> computed to <Code>20px</Code> for its body font size).
          </dd>

          <dt>
            <Code>line-height</Code>
          </dt>
          <dd>
            Changes the height of the line. As a consequence it will also modify spacing between
            lines in a paragraph. A good practice is to use a relative unit and{' '}
            <strong>
              <Code>1.5</Code> is a good standard value.
            </strong>{' '}
            for better readability.
          </dd>

          <dt>
            <Code>word-spacing</Code> and <Code>letter-spacing</Code>
          </dt>
          <dd>Changes the space between words and letters. Usually the default should be ok.</dd>
        </dl>
      </div>
    </section>

    <section>
      <Subtitle>Cosmetic properties</Subtitle>

      <p>Now we can make our text fancier. Here is a list of some useful properties:</p>

      <dl>
        <dt>
          <Code>color</Code>
        </dt>
        <dd>Quite straightforward.</dd>

        <dt>
          <Code>font-weight</Code>
        </dt>
        <dd>
          Changes the boldness of the font. It can be set using multiple values. First, you can use
          a number between 1 and 1000. However,{' '}
          <strong>the possible values will be limited by the font you are currently using</strong>{' '}
          (likely some of those: 100/200/300/400/500/600/700/800/900). If you are using a{' '}
          <Link href="https://v-fonts.com/">variable font</Link>, you can use any weight value. You
          can also use a keyword: <Code>normal</Code> is a shorthand for 400 and <Code>bold</Code>{' '}
          is a shorthand for 700. If you use <Code>lighter</Code> or <Code>bolder</Code>, it will
          take the parent’s font weight and move it accordingly on a scale between 100/400/700/900.
        </dd>

        <dt>
          <Code>font-style</Code>
        </dt>
        <dd>
          Mainly used to switch between <Code>normal</Code> and <Code>italic</Code>
        </dd>

        <dt>
          <Code>text-decoration</Code>
        </dt>
        <dd>
          Changes the apparence of decorative lines on text. You can combine colors with{' '}
          <Code>underline</Code>/<Code>overline</Code> and a line style (<Code>solid</Code>/
          <Code>double</Code>/<Code>dotted</Code>/<Code>dashed</Code>/<Code>wavy</Code>)
        </dd>
      </dl>

      <Exercise
        task="someone has made this text unreadable. Make it easier to read by using the good practices we’ve seen!"
        initialCode={`<style>
.blog-post {
  font-size: 14px;
  line-height: 1;
  word-spacing: -1px;
  letter-spacing: -0.5px;
}
.title {
  font-size: 16px;
}
.link {
  font-style: italic;
  text-decoration: red wavy overline;
  font-weight: 900;
}
</style>

<article class="blog-post">
  <h1 class="title">Unreadable article</h1>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt velit elit, sit amet scelerisque urna lacinia in. Pellentesque consequat, ante sit amet sodales vulputate, purus est sodales nulla, et faucibus enim purus eget arcu. Nam ut viverra ante, nec rhoncus diam. Nulla mauris lorem, euismod eget massa quis, congue consectetur libero. Quisque urna mi, rhoncus sit amet tellus a, pretium euismod mi. Pellentesque sagittis, dolor a blandit consequat, libero mi interdum felis, eu porta sem arcu eget lectus. Sed imperdiet, enim vel convallis facilisis, magna ligula auctor nulla, eget molestie justo arcu et sem. Fusce orci turpis, luctus laoreet lectus eget, sollicitudin fermentum nibh.

  <a class="link">Go to next page</a>
</article>`}
        solution={`<style>
html {
  /* Sets the base font-size in % so that it computes to 19px on most browsers (16px*1.2) */
  /* For a blog, it's better to go bigger than the default! */
  font-size: 120%;
}
.blog-post {
  /* Let it breathe */
  line-height: 1.5;
}
.title {
  font-size: 1.2rem; /* Using rem instead of px */
}
.link {
  font-style: italic;

  /* A little less fancy but easier to understand */
  text-decoration: dotted underline;

  /* 900 is useless here because the default font is not variable, bold is easier to understand */
  font-weight: bold;
}
</style>

<article class="blog-post">
  <h1 class="title">Unreadable article</h1>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt velit elit, sit amet scelerisque urna lacinia in. Pellentesque consequat, ante sit amet sodales vulputate, purus est sodales nulla, et faucibus enim purus eget arcu. Nam ut viverra ante, nec rhoncus diam. Nulla mauris lorem, euismod eget massa quis, congue consectetur libero. Quisque urna mi, rhoncus sit amet tellus a, pretium euismod mi. Pellentesque sagittis, dolor a blandit consequat, libero mi interdum felis, eu porta sem arcu eget lectus. Sed imperdiet, enim vel convallis facilisis, magna ligula auctor nulla, eget molestie justo arcu et sem. Fusce orci turpis, luctus laoreet lectus eget, sollicitudin fermentum nibh.

  <a class="link">Go to next page</a>
</article>`}
      />
    </section>

    <section>
      <Subtitle>Font families and custom fonts</Subtitle>

      <p>
        We’ll dedicate this whole section to the <Code>font-family</Code> property. This property
        sets a prioritized list of fonts to use. The generic font families available on all browsers
        are: <Code>serif</Code>, <Code>serif</Code>, <Code>sans-serif</Code>, <Code>monospace</Code>
        , <Code>cursive</Code> and <Code>fantasy</Code>.
      </p>

      <p>
        You can add custom fonts with the <Code>@font-face</Code> directive. This directive needs
        two mandatory arguments:
      </p>

      <ul>
        <li>
          <Code>font-family</Code>: the name that you will use in <Code>font-family</Code>{' '}
          declarations
        </li>
        <li>
          <Code>src</Code>: a prioritized list of potential sources for the font files. You can use
          the <Code>local()</Code> to try to find the font on the client’s computer or{' '}
          <Code>url()</Code> to load it from a server. You should also hint the file type with the{' '}
          <Code>format()</Code> function (most font types are not supported by all browsers).
        </li>
      </ul>

      <p>Here is what a complete font declaration might look like:</p>

      <Editor
        code={`<style>
@font-face {
  font-family: MyHelvetica;
  src: local("Helvetica Neue Bold"),
       local("HelveticaNeue-Bold"),
       url('https://fonts.cdnfonts.com/s/30925/Helvetica Neue LT 53 Extended.woff') format('woff');
}

html {
  font-family: MyHelvetica, sans-serif;
}
</style>

<p>This is some text</p>`}
      />

      <p>
        When including custom fonts, there are some caveats that you want to avoid. What will your
        browser show while the font is not loaded? And you don’t want your website to flash once
        it’s done. Here is{' '}
        <Link href="https://css-tricks.com/three-techniques-performant-custom-font-usage/">
          a detailed article on optimizing font loading
        </Link>
        , the key takeaways are:
      </p>

      <ul>
        <li>
          <strong>Optimize your font files.</strong>
        </li>
        <li>
          <strong>Preload your fonts.</strong>
        </li>
        <li>
          <strong>
            Set the correct <Code>font-display</Code> value.
          </strong>
        </li>
      </ul>

      <p>
        If you don’t need to support Internet Explorer 11, you can even use variable fonts. Here is{' '}
        <Link href="https://web.dev/variable-fonts/">a detailed article on variable fonts</Link>. In
        short, a variable font will encapsulate all possible styles in one unique file, reducing the
        overall bandwith required to download all fonts and thus optimizing the display speed.
      </p>

      <Exercise
        task="someone has made this text unreadable. Make it easier to read by using the good practices we’ve seen!"
        initialCode={`<style>
.blog-post {
  font-size: 14px;
  line-height: 1;
  word-spacing: -1px;
  letter-spacing: -0.5px;
}
.title {
  font-size: 16px;
}
.link {
  font-style: italic;
  text-decoration: red wavy overline;
  font-weight: 900;
}
</style>

<article class="blog-post">
  <h1 class="title">Unreadable article</h1>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt velit elit, sit amet scelerisque urna lacinia in. Pellentesque consequat, ante sit amet sodales vulputate, purus est sodales nulla, et faucibus enim purus eget arcu. Nam ut viverra ante, nec rhoncus diam. Nulla mauris lorem, euismod eget massa quis, congue consectetur libero. Quisque urna mi, rhoncus sit amet tellus a, pretium euismod mi. Pellentesque sagittis, dolor a blandit consequat, libero mi interdum felis, eu porta sem arcu eget lectus. Sed imperdiet, enim vel convallis facilisis, magna ligula auctor nulla, eget molestie justo arcu et sem. Fusce orci turpis, luctus laoreet lectus eget, sollicitudin fermentum nibh.

  <a class="link">Go to next page</a>
</article>`}
        solution={`<style>
html {
  /* Sets the base font-size in % so that it computes to 19px on most browsers (16px*1.2) */
  /* For a blog, it's better to go bigger than the default! */
  font-size: 120%;
}
.blog-post {
  /* Let it breathe */
  line-height: 1.5;
}
.title {
  font-size: 1.2rem; /* Using rem instead of px */
}
.link {
  font-style: italic;

  /* A little less fancy but easier to understand */
  text-decoration: dotted underline;

  /* 900 is useless here because the default font is not variable, bold is easier to understand */
  font-weight: bold;
}
</style>

<article class="blog-post">
  <h1 class="title">Unreadable article</h1>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt velit elit, sit amet scelerisque urna lacinia in. Pellentesque consequat, ante sit amet sodales vulputate, purus est sodales nulla, et faucibus enim purus eget arcu. Nam ut viverra ante, nec rhoncus diam. Nulla mauris lorem, euismod eget massa quis, congue consectetur libero. Quisque urna mi, rhoncus sit amet tellus a, pretium euismod mi. Pellentesque sagittis, dolor a blandit consequat, libero mi interdum felis, eu porta sem arcu eget lectus. Sed imperdiet, enim vel convallis facilisis, magna ligula auctor nulla, eget molestie justo arcu et sem. Fusce orci turpis, luctus laoreet lectus eget, sollicitudin fermentum nibh.

  <a class="link">Go to next page</a>
</article>`}
      />

      <p>
        If you use an external service to load your fonts (such as Google Fonts API), all the{' '}
        <Code>@font-face</Code> declarations will be taken care of.
      </p>
    </section>

    <section>
      <Subtitle>What I should remember</Subtitle>

      <ul>
        <li>
          New properties: <Code>font-size</Code>, <Code>line-height</Code>,{' '}
          <Code>word-spacing</Code>, <Code>letter-spacing</Code>, <Code>font-weight</Code>,{' '}
          <Code>font-style</Code>, <Code>text-decoration</Code>
        </li>
        <li>
          Set the font size using <Code>em</Code> and <Code>rem</Code>, the computed value of main
          body text should be between <Code>16px</Code> and <Code>21px</Code>. Line height should be
          around <Code>1.5</Code>.
        </li>
        <li>
          How to use <Code>@font-face</Code>
        </li>
        <li>
          The three techniques to optimize font loading: lighter font files, preloading and{' '}
          <Code>font-display</Code>
        </li>
      </ul>

      <NextKataButton href={PAGES.TheBoxModel.url} />
    </section>
  </>
);

export default Kata;
