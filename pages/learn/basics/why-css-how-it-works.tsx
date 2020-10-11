import { NextPage } from 'next';
import { Subtitle, Title } from 'components/Layout';
import { Exercise } from 'components/Exercise';
import { Image } from 'components/Image';
import { Code } from 'components/Code';
import { NextKataButton } from 'components/NextKataButton';
import { Link } from 'components/Link';
import { PAGES } from 'services/pages';
import { Editor } from 'components/Editor';

const Kata: NextPage = () => (
  <>
    <Title>Why CSS and How it works</Title>

    <section>
      <Subtitle>Introduction</Subtitle>
      <p>
        CSS stands for <strong>Cascading Style Sheets</strong>. It is a core web language, with HTML
        and JS it forms the base for website creation. HTML conveys the meaning of the document,
        Javascript can change it dynamically and CSS is for improving the looks of it.
      </p>

      <p>Some vocabulary first. When we write CSS, we write a lot of CSS rules:</p>

      <Image
        src="/learn/basics/why-css-how-it-works/css-rule.png"
        alt="A h1 rule with font-size and color declarations"
        caption="An example of CSS rule: make all the first-level titles red and big"
      />

      <dd>
        <dt>
          <strong>Rule</strong>
        </dt>
        <dd>A selector followed by multiple declarations inside curly braces</dd>

        <dt>
          <strong>Selector</strong>
        </dt>
        <dd>
          Points to the HTML element(s) that you want to style (in the case above: <Code>h1</Code>)
        </dd>

        <dt>
          <strong>Declaration</strong>
        </dt>
        <dd>
          A combination of a CSS <strong>property</strong> and a <strong>value</strong> (in the case
          above: <Code>color: red;</Code>)
        </dd>
      </dd>

      <p>
        We’re going to learn a lot of selectors, properties and values in the next katas. But first,{' '}
        <strong>
          it is important to understand where to write CSS and how the browser renders it.
        </strong>
      </p>
    </section>

    <section>
      <Subtitle>Where do we write CSS?</Subtitle>

      <p>There are 3 ways to include CSS in a HTML page:</p>

      <ul>
        <li>
          In a <Code>&lt;style&gt;</Code> HTML tag inside the HTML <Code>&lt;head&gt;</Code>
        </li>
        <li>
          In an external file linked by inserting a <Code>&lt;link&gt;</Code> HTML tag inside the
          HTML <Code>&lt;head&gt;</Code>
        </li>
        <li>
          Inside the <Code>style</Code> attribute of any HTML tag
        </li>
      </ul>

      <Exercise
        task="go ahead and try to edit the code!"
        initialCode={`<html>
  <head>
    <!-- link this external stylesheet that changes the h1 tag -->
    <!-- /learn/basics/why-css-how-it-works/style.css -->
    <link href="" rel="stylesheet" type="text/css" />

    <!-- Make the <p> blue -->
    <style>
    </style>
  </head>

  <body>
    <h1>Hello world!</h1>

    <p>
        This is some text.
        <!-- Make the important text red -->
        <strong style="font-size: 1.2em;">
          This is important.
        </strong>
    </p>
  </body>
</html>`}
        solution={`<html>
  <head>
    <!-- link this external stylesheet that changes the h1 tag -->
    <!-- /learn/basics/why-css-how-it-works/style.css -->
    <link href="/learn/basics/why-css-how-it-works/style.css" rel="stylesheet" type="text/css" />

    <!-- Make the <p> blue -->
    <style>
    p {
    color: blue;
    }
    </style>
  </head>

  <body>
    <h1>Hello world!</h1>

    <p>
        This is some text.
        <!-- Make the important text red -->
        <strong style="font-size: 1.2em; color: red;">
          This is important.
        </strong>
    </p>
  </body>
</html>`}
      />

      <p>Some questions arise already:</p>

      <dl>
        <dt>
          <strong>What is the best way to include CSS?</strong>
        </dt>
        <dd>
          Inline styles clutter HTML with style properties and is bad for another reason we’re going
          to see in the next kata. For now, remember: <em>don’t do inline styles.</em> Usually,
          external files are more practical than the <Code>style</Code> tag because we may need to
          write <em>a lot</em> of CSS. External files help keeping it tidy and clean and it
          separates concerns between HTML (meaning) and CSS (styles). In the following exercises,
          we’ll use the <Code>style</Code> tag directly and we won’t need to put <Code>html</Code>,{' '}
          <Code>head</Code> and <Code>body</Code> tags: the live editor will take care of it.
        </dd>

        <dt>
          <strong>How the browser knows the important text must be red instead of blue?</strong>
        </dt>
        <dd>
          This will be the focus of the next kata,{' '}
          <Link href={PAGES.SelectorsSpecificity.url}>Selectors and Specificity</Link>.
        </dd>

        <dt>
          <strong>How does the browser renders the page from CSS?</strong>
        </dt>
        <dd>This is what we are going to see, because there are some caveats.</dd>
      </dl>
    </section>

    <section>
      <Subtitle>How the browser renders the page</Subtitle>

      <p>
        To optimize your website for the best User Experience and page speed as possible,{' '}
        <strong>
          it is essential to understand the <em>Critical Rendering Path (CRP)</em>
        </strong>
        . If you want a detailed explanation, here is{' '}
        <Link href="https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969">
          a fantastic article about the browser renders a web page
        </Link>
        . Here is a summary of what is the CRP:
      </p>

      <dl>
        <dt>
          <strong>DOM construction</strong>
        </dt>
        <dd>
          As the HTML file comes in over the network, the browser parses it and build a DOM tree
          representing every HTML node encountered.
        </dd>

        <dt>
          <strong>CSSOM construction</strong>
        </dt>
        <dd>
          The browser also reads CSS and constructs a similar tree containing all informations about
          how to style the page. It’s the CSSOM.
        </dd>

        <dt>
          <strong>Render tree</strong>
        </dt>
        <dd>
          DOM and CSSOM are combined into one tree. All DOM nodes that should not be displayed (for
          instance <Code>script</Code> tags or nodes hidden with CSS) are not present in the render
          tree.
        </dd>

        <dt>
          <strong>Layout</strong>
        </dt>
        <dd>
          The Layout operation takes the render tree and computes the position of every element on
          the page. It is also called <em>reflow</em> and it can happen when you scroll or resize
          your window.
        </dd>

        <dt>
          <strong>Paint</strong>
        </dt>
        <dd>
          The browser then creates layers for the elements and fill them with pixels based on the
          render tree rules. This is also called <em>rasterization</em>.
        </dd>

        <dt>
          <strong>Composition</strong>
        </dt>
        <dd>
          The browser takes the layers and build the final image that will be drawn on screen.
        </dd>
      </dl>

      <Image
        src="/learn/basics/why-css-how-it-works/profiler.png"
        alt="This page profiled by the chrome dev tools - all rendering operations included"
        caption="You can see all these steps in the Performance tab of your browser’s dev tools"
      />

      <p>
        <strong>The user will see something only when the first paint is finished.</strong> It’s the{' '}
        <em>First Contentful Paint (FCP)</em> timing. We want that to happen as quickly as possible
        but there are two main caveats:{' '}
      </p>

      <ul>
        <li>
          <strong>The CSS is render-blocking.</strong> The DOM tree is built incrementally as the
          browser receives the HTML over the network, but this is not the case with CSS. If the
          CSSOM and render tree were built and rendered incrementally, we would see the page build
          itself and flash every microsecond as the CSS is read. This is not good for user
          experience. Thus when the browser encounters a <Code>&lt;style&gt;</Code> tag or an
          external CSS file, the CSSOM is built in one go.{' '}
          <strong>
            Until the whole CSS file is parsed, the render tree construction will be blocked.
          </strong>{' '}
          The browser will continue to parse the DOM but nothing will appear on screen until it’s
          done.
        </li>
        <li>
          <strong>The CSS is script-blocking.</strong> Javascript can manipulate the DOM and access
          the styles of any element throught the <Code>style</Code> object of every DOM node. Thus,
          it is dangerous to execute Javascript while a stylesheet is being downloaded. Imagine that
          a script reads a <Code>style</Code> value while a stylesheet downloaded is in progress.
          Depending on when the stylesheet download finishes and the CSSOM update completes, the
          value may or may not be outdated.{' '}
          <strong>
            To prevent race conditions, all script execution is paused until every previous
            stylesheet is downloaded and parsed.
          </strong>
        </li>
      </ul>

      <p>
        <strong>
          While a stylesheet is being downloaded, nothing will change on screen and all scripts will
          be paused.
        </strong>{' '}
        Let that sink in. Thus, we should keep our stylesheets lightweight and fast to load.
      </p>

      <p>
        This can lead to various edge cases. Imagine loading a CSS file from an external server (for
        instance by including a new font). If the server is down for whatever reason and takes 30
        seconds to answer, your page will be blank for <em>at least</em> 30 seconds before something
        happens.
      </p>
    </section>

    <section>
      <Subtitle>What happens if I write invalid CSS?</Subtitle>

      <p>
        If you write invalid CSS (because of a syntax error or a property/value doesn’t exist), the
        browser will simply ignore it. See the example below:
      </p>

      <Editor
        code={`<style>
  p {
    colour: blue;
  }
</style>

<p>Some text</p>`}
      />

      <p>
        That also ensures the backwards compability of CSS. When new properties are added in the
        spec, you can use them freely and will not impact the rendering in browser that don’t
        support them.{' '}
        <strong>
          To check if a CSS property, value or feature is compatible with a browser, use this great
          website: <Link href="https://caniuse.com">caniuse.com</Link>.
        </strong>
      </p>
    </section>

    <section>
      <Subtitle>What I should remember</Subtitle>

      <ul>
        <li>
          Some vocabulary: <em>rules</em>, <em>selectors</em>, <em>declarations</em>,{' '}
          <em>properties</em> and <em>values</em>.
        </li>
        <li>
          <strong>
            <em>Don’t do inline styles.</em>
          </strong>
        </li>
        <li>
          Some more vocabulary: <em>Critical Rendering Path</em>, <em>DOM</em>, <em>CSSOM</em>,{' '}
          <em>render tree</em>, <em>layout</em> and <em>paint</em> operations,{' '}
          <em>First Contentful Paint</em>.
        </li>
        <li>
          CSS is a <em>render-blocking</em> and a <em>script-blocking</em> ressource, it can impact
          the load time.
        </li>
        <li>
          Check if CSS features are supported by browsers with{' '}
          <Link href="https://caniuse.com">caniuse.com</Link>.
        </li>
      </ul>

      <NextKataButton href={PAGES.SelectorsSpecificity.url} />
    </section>
  </>
);

export default Kata;
