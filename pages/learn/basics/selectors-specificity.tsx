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
    <Title>{PAGES.SelectorsSpecificity.title}</Title>

    <section>
      <Subtitle id="base-selectors">Base selectors</Subtitle>

      <p>
        Before learning a lot of properties and values, let’s focus on the selector part of CSS
        rules. The selector points to the HTML elements that you want to style. There are a lot of
        selectors, you will need to know them well to read CSS fluently. Here are the five main
        ones:
      </p>

      <dl>
        <dt>
          <Code>*</Code>
          <strong>, the universal selector</strong>
        </dt>
        <dd>It will select all DOM nodes.</dd>

        <dt>
          <Code>h1</Code>
          <strong>, the type selector</strong>
        </dt>
        <dd>It will select DOM nodes of the given HTML type. The one we’ve used so far.</dd>

        <dt>
          <Code>.example</Code>
          <strong>, the class selector</strong>
        </dt>
        <dd>
          It will select all elements with the <Code>class=&quot;example&quot;</Code> attribute.
        </dd>

        <dt>
          <Code>#example</Code>
          <strong>, the ID selector</strong>
        </dt>
        <dd>
          It will select the element having the <Code>id=&quot;example&quot;</Code> ID.
        </dd>

        <dt>
          <Code>[attr=&quot;value&quot;]</Code>
          <strong>, the attribute selector</strong>
        </dt>
        <dd>It will select all element having the given attribute value.</dd>
      </dl>

      <Exercise
        task="turn the label red by selecting it in every possible way we’ve seen!"
        initialCode={`<style>

</style>

<label for="search-input">Search</label>`}
        solution={`<style>
  * { color: red; }
  label { color: red; }
  .label { color: red; }
  #search-input-label { color: red; }
  [for="search-input"] { color: red; }
</style>

<label for="search-input" class="label" id="search-input-label">Search</label>`}
      />

      <Image
        src="/learn/basics/selectors-specificity/simple-selectors.png"
        alt="The dev tools showing the 4 rules with simple selectors"
        caption="You can check that all the rules are applied with the dev tools"
      />

      <p>
        As IDs are unique in a HTML document, using the ID selector is not great because the
        associated CSS declarations cannot be reused. It costs you nothing to use a class instead,
        so <strong>use class selectors instead of ID selectors</strong>.
      </p>

      <p>
        Type selectors are in fact a bit too broad as they select all HTML tags of this type. It was
        great when web pages were light and small, but today web pages contain a lot of elements
        with rich UI interfaces. For instance, writing a rule with the <Code>a</Code> selector will
        impact the look of your links in the navigation menu, in your main content and in your
        footer. <em>Everywhere on every page.</em> Furthermore, the style is easier to reuse with a
        class. What about styling a link that looks like a button? Use the <Code>.button</Code>{' '}
        class on the <Code>a</Code> tag when you need to. So{' '}
        <strong>use class selectors instead of type selectors</strong>.
      </p>

      <p>
        Attribute selectors are a bit of a niche, usually it is more efficient to add a class than a
        custom HTML attribute that may lead into invalid HTML. You got it,{' '}
        <strong>use classes whenever possible.</strong>
      </p>
    </section>

    <section>
      <Subtitle id="combining-selectors">Combining selectors</Subtitle>

      <p>You can combine selectors to create more complex ones:</p>

      <dl>
        <dt>
          <Code>.a, .b</Code>
          <strong>, the list/OR combinator</strong>
        </dt>
        <dd>
          This will select elements that have the <Code>a</Code> class or elements that have the{' '}
          <Code>b</Code> class
        </dd>

        <dt>
          <Code>.a.b</Code>
          <strong>, the AND combinator</strong>
        </dt>
        <dd>
          This will select elements that have both classes: <Code>class=&quot;a b&quot;</Code>
        </dd>

        <dt>
          <Code>.a .b</Code>
          <strong>, the descendant combinator</strong>
        </dt>
        <dd>
          This will select elements having the <Code>b</Code> class inside elements having the{' '}
          <Code>a</Code> class
        </dd>

        <dt>
          <Code>.a &gt; .b</Code>
          <strong>, the direct child combinator</strong>
        </dt>
        <dd>
          This will select elements having the <Code>b</Code> class that are{' '}
          <strong>direct children</strong> of elements having the <Code>a</Code> class
        </dd>

        <dt>
          <Code>.a ~ .b</Code>
          <strong>, the general sibling child combinator</strong>
        </dt>
        <dd>
          This will select elements having the <Code>b</Code> class that <strong>follow</strong>{' '}
          elements having the <Code>a</Code> class and that share the same parent node as the{' '}
          <Code>a</Code> class.
        </dd>

        <dt>
          <Code>.a + .b</Code>
          <strong>, the adjacent sibling child combinator</strong>
        </dt>
        <dd>
          This will select elements having the <Code>b</Code> class that are right after an element
          having the <Code>a</Code> class and that shares the same parent node.
        </dd>
      </dl>

      <Exercise
        task="turn the node B (only!) red by every possible way we’ve seen!"
        initialCode={`<style>

</style>

<div class="node parent">
  <div class="node a">Node A</div>
  <div class="node b special">Node B</div>
  <div class="node c">Node C</div>
  <div class="node d">Node D</div>
  <div class="node children">
    <div class="node e">Node E</div>
    <div class="node f">Node F</div>
  </div>
</div>`}
        solution={`<style>
  .b, .special { color: red; }
  .parent .b { color: red; }
  .parent > .b { color: red; }
  .node.b { color: red; }
  .d ~ .b { color: red; }
  .a + .b { color: red; }
</style>

<div class="node parent">
  <div class="node a">Node A</div>
  <div class="node b special">Node B</div>
  <div class="node c">Node C</div>
  <div class="node d">Node D</div>
  <div class="node children">
    <div class="node e">Node E</div>
    <div class="node f">Node F</div>
  </div>
</div>`}
      />
    </section>

    <section>
      <Subtitle id="pseudo-classes-pseudo-elements">Pseudo-classes and pseudo-elements</Subtitle>

      <p>
        Peusdo-classes allow us to select elements based on states or informations not present in
        the DOM. Here is{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">
          a complete list of pseudo-classes
        </Link>{' '}
        and here are the ones you should know:
      </p>

      <dl>
        <dt>
          <Code>:hover</Code>
        </dt>
        <dd>Selects the element that is being hovered</dd>

        <dt>
          <Code>:focus</Code>
        </dt>
        <dd>Selects the interactive element that is being focused (such as a button)</dd>

        <dt>
          <Code>:active</Code>
        </dt>
        <dd>Selects the interactive element that is active (such as when you click on a button)</dd>

        <dt>
          <Code>:visited</Code>
        </dt>
        <dd>Specific to links, applies if the link has already been visited by the user</dd>

        <dt>
          <Code>:checked</Code>
        </dt>
        <dd>Specific to checkbox inputs, applies if the checkbox is checked</dd>

        <dt>
          <Code>:disabled</Code>
        </dt>
        <dd>Selects the interactive element if it is disabled (such as a disabled input)</dd>

        <dt>
          <Code>.list:first-child</Code>, <Code>.list:last-child</Code>
        </dt>
        <dd>Selects the first element or last element among its siblings</dd>

        <dt>
          <Code>.list:nth-child(even)</Code>, <Code>.list:nth-child(odd)</Code>,{' '}
          <Code>.list:nth-child(5n)</Code>
        </dt>
        <dd>Selects every nth element among its siblings</dd>

        <dt>
          <Code>:not(p)</Code>
        </dt>
        <dd>Negates a selector</dd>
      </dl>

      <p>
        Peusdo-elements allow us to select entities that are not present in the HTML. Here is{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements">
          a complete list of pseudo-elements
        </Link>{' '}
        and here are the ones you should know:
      </p>

      <dl>
        <dt>
          <Code>::before</Code>, <Code>::after</Code>
        </dt>
        <dd>
          If the <Code>content</Code> property is set, creates a pseudo-element that is the
          first/last child of the selected element. It is often used to add cosmetic content.
        </dd>

        <dt>
          <Code>::placeholder</Code>
        </dt>
        <dd>Selects the placeholder text in an input</dd>
      </dl>

      <Exercise
        task="use a lot of selectors we’ve seen!"
        initialCode={`<style>

</style>

<ul class="list">
  <li class="item">Eggs</li>
  <li class="item">Strawberries</li>
  <li class="item">Salad</li>
  <li class="item">Pizza</li>
  <li class="item">Water</li>
</ul>

<p><a class="link" href="https://www.google.com">Google</a></p>

<p><button class="button" disabled>Submit</button></p>

<p><input class="input" placeholder="Search something..." /></p>`}
        solution={`<style>
  .item:not(:first-child) { color: red; }
  .item:nth-child(odd) { color: blue; }
  .link:visited { color: blue; }
  .link:hover { color: red; }
  .link::before { content: "> "; color: red; }
  .button:disabled { color: red; }
  .input::placeholder { color: red; }
</style>

<ul class="list">
  <li class="item">Eggs</li>
  <li class="item">Strawberries</li>
  <li class="item">Salad</li>
  <li class="item">Pizza</li>
  <li class="item">Water</li>
</ul>

<p><a class="link" href="https://www.google.com">Google</a></p>

<p><button class="button" disabled>Submit</button></p>

<p><input class="input" placeholder="Search something..." /></p>`}
      />

      <p>
        All of this is great. But with multiple colors applied to the same element, how does the
        browser knows which rule to apply???
      </p>
    </section>

    <section>
      <Subtitle id="specificity">Specificty</Subtitle>

      <p>
        <strong>
          Specificity determines which CSS rule is applied by the browser. If two selectors apply to
          the same element, the one with the higher specificity wins.
        </strong>
      </p>

      <p>The rules to win the specificity wars are:</p>

      <ul>
        <li>
          Inline style beats ID selectors. ID selectors are more specific than classes and
          pseudo-classes. Classes and pseudo-classes win over type and pseudo-elements selectors.
        </li>
        <li>
          A more specific selector beats any number of less specific selectors. For instance,{' '}
          <Code>.list</Code> is more specific than <Code>div ul li</Code>.
        </li>
        <li>
          Increasing the number of selectors will result in higher specificity.{' '}
          <Code>.list.link</Code> is more specific than <Code>.list</Code> and <Code>.link</Code>.
        </li>
        <li>If two selectors have the same specificity, the last rule read by the browser wins.</li>
      </ul>

      <p>
        Although <Code>!important</Code> has nothing to do with the specificity of a selector, it is
        good to know that a declaration using <Code>!important</Code> overrides any normal
        declaration. When two conflicting declarations have the <Code>!important</Code> keyword, the
        declaration with a greater specificity wins.
      </p>

      <p>
        Here is a good website to compute the specificity of a selector:{' '}
        <Link href="https://specificity.keegan.st/">Specificity Calculator</Link>. Below is a chart
        to recap all these rules (taken from this{' '}
        <Link href="https://stuffandnonsense.co.uk/archives/css_specificity_wars.html">
          funny post about specificity
        </Link>
        ).
      </p>

      <Image
        src="/learn/basics/selectors-specificity/css-specificity-wars.png"
        alt="Comparison between specificity of selectors and Star Wars characters"
        caption="Will you be that evil?"
      />

      <p>
        The problem with specificity is that it becomes increasingly difficult to override a
        selector when its specificity increases. That’s why ID selectors, inline styles and the{' '}
        <Code>!important</Code> keyword are considered bad practice: it becomes almost impossible to
        override them.
      </p>

      <Exercise
        task="aside from the fact that this design is ugly, refactor the code with what we’ve seen so far to use only classes for the same design"
        initialCode={`<style>
  a { color: blue; }
  #article { color: grey; }
  #article a:hover { color: yellow !important; }
</style>

<a>This is a link</a>
<article id="article">
  This is an article.
  <a>This is a link in an article</a>
  <a style="color: red">This is the link to the next article</a>
</article>`}
        solution={`<style>
  .link { color: blue; }
  .article { color: grey; }
  .article .link:hover { color: yellow; }
  .link.next-article-link { color: red; }
</style>

<a class="link">This is a link</a>
<article class="article">
  This is an article.
  <a class="link">This is a link in an article</a>
  <a class="link next-article-link">This is the link to the next article</a>
</article>`}
      />

      <p>
        In fact, you can build whole websites without going further than a specificity of 2 classes
        and a pseudo-class. Let me demonstrate that. When you select an element, you want to either:
      </p>

      <ul>
        <li>Select it directly (class)</li>
        <li>
          Select it in the context of a parent (class of the relevant parent node or pseudo-class
          like <Code>:first-child</Code>)
        </li>
        <li>Select it in a certain state (pseudo-class)</li>
      </ul>

      <p>
        {' '}
        In the worst case scenario, you will need to select an element in a certain state in the
        context of its parent, so a combination of the three item aboves. Thus,{' '}
        <strong>
          any selector more specific than 2 classes and a pseudo-class is a code smell.
        </strong>
      </p>
    </section>

    <section>
      <Subtitle id="what-makes-a-good-selector">What is a good selector?</Subtitle>

      <p>
        So, we’ve seen that a good selector should have a low specificity. But sometimes it is
        possible to achieve the same result with different selectors. Classic example:
      </p>

      <Editor
        code={`<style>
.article {
  border: 1px solid black;
}

/* Which is best? */
/* 1st version */
.article { margin-bottom: 15px; }

/* 2nd version */
.articles-list > * { margin-bottom: 15px; }

/* 3rd version */
.articles-list .article { margin-bottom: 15px; }

/* 4th version */
.article:not(:last-child) { margin-bottom: 15px; }

/* 5th version */
.articles-list > :not(:last-child) { margin-bottom: 15px; }
</style>

<section class="articles-list">
  <article class="article">Article 1</article>
  <article class="article">Article 2</article>
  <article class="article">Article 3</article>
</section>`}
      />

      <p>
        What is the best selector among those five versions?{' '}
        <strong>
          A good selector conveys the design intention and thus will be more resilient to changes.
        </strong>{' '}
        Here the design intention is not clear so it’s difficult to pick one, but let’s analyze the
        intentions:
      </p>

      <ul>
        <li>
          <Code>.article</Code> is probably not a good selector because I probably don’t want to set
          the margin on all articles. What if I want to use the <Code>.article</Code> class on a
          lonely article in another page?
        </li>
        <li>
          <Code>.articles-list &gt; *</Code> seems better because the margin is applied in the
          context of the list. But what if I add a title in the <Code>.articles-list</Code> section
          or some pagination buttons at the bottom? In this case I may not like the margin given to
          all children by this selector.
        </li>
        <li>
          <Code>.articles-list .article</Code> seems better than the previous one. But there’s still
          a margin after the last element that might interfere with content after this section
        </li>
        <li>
          <Code>.article:not(:last-child)</Code> solves the last margin problem but is not scoped to
          the list (same problem as <Code>.article</Code>)
        </li>
        <li>
          <Code>.articles-list &gt; :not(:last-child)</Code> is probably what I would go for, but
          that’s still making assumptions on the design intentions.
        </li>
      </ul>

      <p>As we’ve seen, choosing the right selector may not be easy. Overall, try this:</p>

      <ol>
        <li>
          Ask yourself <em>&quot;what is the intention?&quot;</em>
        </li>
        <li>If the intention is not clear, ask your designer</li>
        <li>
          If it’s still not clear, pick your best guess by confronting your code to edge cases or by
          trying to imagine what happens if you reuse this code somewhere else.
        </li>
      </ol>
    </section>

    <section>
      <Subtitle id="key-learnings">What I should remember</Subtitle>

      <ul>
        <li>
          The simple selectors: <Code>*</Code>, <Code>type</Code>, <Code>.class</Code>,{' '}
          <Code>#id</Code> and <Code>[attr]</Code>. Always prefer classes to other selectors.
        </li>
        <li>
          The combinators: <Code>.a, .b</Code>, <Code>.a.b</Code>, <Code>.a .b</Code>,{' '}
          <Code>.a &gt; .b</Code>, <Code>.a ~ .b</Code> and <Code>.a + .b</Code>.
        </li>
        <li>
          The pseudo-classes: <Code>:hover</Code>, <Code>:focus</Code>, <Code>:active</Code>,{' '}
          <Code>:visited</Code>, <Code>:disabled</Code>, <Code>:checked</Code>,{' '}
          <Code>:first-child</Code>, <Code>:last-child</Code>, <Code>:nth-child(even/odd)</Code>,{' '}
          <Code>:not()</Code>...
        </li>
        <li>
          The pseudo-elements: <Code>::before</Code>, <Code>::after</Code>,{' '}
          <Code>::placeholder</Code>.
        </li>
        <li>How specificity works.</li>
        <li>
          <strong>A good selector has a low specificity and conveys the design intention</strong>
        </li>
      </ul>

      <NextKataButton href={PAGES.CSSUnitsVariables.url()} />
    </section>
  </>
);

export default Kata;
