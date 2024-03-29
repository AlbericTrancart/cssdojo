import { NextPage } from 'next';
import { Subsubtitle, Subtitle, Title } from 'components/Layout';
import { Exercise } from 'components/Exercise';
import { Image } from 'components/Image';
import { Code } from 'components/Code';
import { NextKataButton } from 'components/NextKataButton';
import { KataQuestions } from 'components/KataQuestions';
import { Link } from 'components/Link';
import { Divider } from 'components/Divider';
import { PAGES } from 'services/pages';
import { Editor } from 'components/Editor';
import { KataRating } from 'components/KataRating';
import CssRuleImage from './css-rule.svg';
import RenderProcessImage from './render-process.svg';
import profilerImage from './profiler.png';

const Kata: NextPage = () => (
  <>
    <Title>{PAGES.WhyCSSHowItWorks.title}</Title>

    <section>
      <p>
        <strong>Welcome to cssdojo!</strong> This is the first{' '}
        <Link
          href="https://en.wikipedia.org/wiki/Kata"
          target="_blank"
          rel="noopener noreferer"
          aria-label="What is a Kata on Wikipedia"
        >
          kata
        </Link>
        , so let me tell you how it works.
      </p>
      <p>
        Each kata begins with a list of questions that will be addressed by the kata.
        <br />
        You can check the boxes to keep track of your progress and they will be saved on this
        browser.{' '}
        <strong>
          Check the box only if you feel you can explain clearly the answer to another person.
        </strong>{' '}
        You will also find them in{' '}
        <Link href={PAGES.SkillsList.url()}>the complete list of questions</Link>.
      </p>

      <p>
        There will be <strong>live code editors</strong> embedded in the page: play with them as
        long as you want!
      </p>

      <p>
        At the end, there will be <strong>a short recap</strong> with the most important things to
        remember. You can always go back to this kata later and check the questions/recap again.
      </p>

      <p>With that being said, let’s (re)learn CSS!</p>
    </section>

    <Divider />

    <KataQuestions
      skillIds={[
        'introduction-css-browser-rendering-vocabulary',
        'introduction-css-browser-rendering-include',
        'introduction-css-browser-rendering-crp',
        'introduction-css-browser-rendering-loading',
        'introduction-css-browser-rendering-feature',
      ]}
    />

    <section>
      <Subtitle id="definitions">Definitions</Subtitle>
      <p>
        CSS stands for <strong>Cascading Style Sheets</strong>. It is a core web language, with HTML
        and JS it forms the base for website creation. HTML conveys the meaning of the document,
        Javascript can change it dynamically and CSS is for improving the looks of it.
      </p>

      <p>Some vocabulary first. When we write CSS, we write a lot of CSS rules:</p>

      <Image
        src={<CssRuleImage title="A h1 rule with font-size and color declarations" />}
        alt=""
        caption="An example of CSS rule: make all the first-level titles red and big"
        style={{ maxWidth: '20rem' }}
      />

      <dl>
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
      </dl>

      <p>
        We’re going to learn a lot of selectors, properties and values in the next katas. But first,{' '}
        <strong>
          it is important to understand where to write CSS and how the browser renders it.
        </strong>
      </p>
    </section>

    <section>
      <Subtitle id="where-to-write-css">Where do we write CSS?</Subtitle>

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
        task="go ahead and try every way to include CSS!"
        initialCode={`<html>
  <head>
    <!-- link this stylesheet that changes the h1 tag by using the href HTML attribute -->
    <!-- /learn/basics/introduction-css-how-the-browser-renders-the-page/style.css -->
    <link href="" rel="stylesheet" type="text/css" />

    <!-- Make the <p> "blue" by writing a CSS rule and the "color" property inside the <style> tag -->
    <style>
    </style>
  </head>

  <body>
    <h1>Hello world!</h1>

    <p>
        This is some text.
        <!-- Make the important text "red" by adding the "color" property to the style HTML attribute -->
        <strong style="font-size: 1.2em;">
          This is important.
        </strong>
    </p>
  </body>
</html>`}
        solution={`<html>
  <head>
    <!-- link this external stylesheet that changes the h1 tag -->
    <!-- /learn/basics/introduction-css-how-the-browser-renders-the-page/style.css -->
    <link href="/learn/basics/introduction-css-how-the-browser-renders-the-page/style.css" rel="stylesheet" type="text/css" />

    <!-- Make the <p> blue by writing inside the <style> tag -->
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
        <!-- Make the important text red by adding to the style HTML attribute -->
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
          <Link href={PAGES.SelectorsSpecificity.url()}>Selectors and Specificity</Link>.
        </dd>

        <dt>
          <strong>How does the browser renders the page from CSS?</strong>
        </dt>
        <dd>This is what we are going to see, because there are some caveats.</dd>
      </dl>
    </section>

    <section>
      <Subtitle id="how-the-browser-renders-the-page">How the browser renders the page</Subtitle>

      <p>
        To optimize your website for the best User Experience and page speed as possible,{' '}
        <strong>
          it is essential to understand the <em>Critical Rendering Path (CRP)</em>
        </strong>
        . If you want a detailed explanation, here is{' '}
        <Link href="https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969">
          a fantastic article about how the browser renders a web page
        </Link>
        . Here is a summary of what is the CRP:
      </p>

      <dl>
        <dt>
          <strong>DOM construction</strong>
        </dt>
        <dd>
          As the HTML file comes in over the network, the browser parses it and builds a DOM tree
          representing every HTML node encountered.
        </dd>

        <dt>
          <strong>CSSOM construction</strong>
        </dt>
        <dd>
          The browser also reads CSS and constructs a similar tree containing all information about
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
        src={profilerImage}
        alt="This page profiled by the chrome dev tools - all rendering operations included"
        caption="You can see all these steps in the Performance tab of your browser’s dev tools"
      />

      <p>
        <strong>The user will see something only when the first paint is finished.</strong> It’s the{' '}
        <em>First Contentful Paint (FCP)</em> timing. We want that to happen as quickly as possible
        but there are two main caveats:{' '}
      </p>

      <Subsubtitle>CSS is render-blocking</Subsubtitle>

      <p>
        The DOM tree is built incrementally as the browser receives the HTML over the network, but
        this is not the case with CSSOM. If the CSSOM and render tree were built and rendered
        incrementally, we would see the page build itself and flash every microsecond as the CSS is
        read. This is not good for user experience nor optimal. Thus when the browser encounters a{' '}
        <Code>&lt;style&gt;</Code> tag or an external CSS file, the CSSOM is built in one go.{' '}
      </p>

      <p>
        <strong>
          Until the whole CSS file is parsed, the render tree construction will be blocked.
        </strong>{' '}
        The browser will continue to parse the DOM but nothing will appear on screen until the
        stylesheet is downloaded and parsed.
      </p>

      <Subsubtitle>CSS is script-blocking</Subsubtitle>

      <p>
        Javascript can manipulate the DOM and access the styles of any element throught the{' '}
        <Code>style</Code> object of every DOM node. Thus, it is dangerous to execute Javascript
        while a stylesheet is being downloaded.
      </p>

      <p>
        Imagine that a script reads a <Code>style</Code> value while a stylesheet download is in
        progress. Depending on when the stylesheet download finishes and the CSSOM update completes,
        the value may or may not be outdated.{' '}
        <strong>
          To prevent race conditions, all script execution is paused until every previous stylesheet
          in the DOM is downloaded and parsed.
        </strong>
      </p>

      <Image
        src={
          <RenderProcessImage title="A schema showing all the steps to the First Contentful Paint" />
        }
        alt=""
        caption="Timeline of the rendering process until the First Contentful Paint"
      />

      <p>
        Let that sink in.{' '}
        <strong>
          While the browser downloads a stylesheet, nothing will change on screen and all scripts
          will be paused.
        </strong>{' '}
        Thus, we should keep our stylesheets lightweight and fast to load.
      </p>

      <p>
        This can lead to various edge cases. Imagine loading a CSS file from an external server (for
        instance by including a new font). If the server is down for whatever reason and takes 30
        seconds to answer, your page will be blank for <em>at least</em> 30 seconds before something
        happens.
      </p>
    </section>

    <section>
      <Subtitle id="invalid-css">What happens if I write invalid CSS?</Subtitle>

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
        spec, you can use them freely and it will not impact the rendering in browsers that don’t
        support them.{' '}
        <strong>
          To check if a CSS property, value or feature is compatible with a browser, use this great
          website: <Link href="https://caniuse.com">caniuse.com</Link>.
        </strong>
      </p>
    </section>

    <section>
      <Subtitle id="key-learnings">What I should remember</Subtitle>

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

      <KataRating kataId="introduction-rendering" />

      <NextKataButton href={PAGES.SelectorsSpecificity.url()} />
    </section>
  </>
);

export default Kata;
