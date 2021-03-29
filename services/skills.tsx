import { ReactNode } from 'react';
import { Code } from 'components/Code';
import { Image } from 'components/Image';
import { PAGES } from './pages';

export interface Skill {
  id: string;
  skill: ReactNode;
  kataUrl: string;
  additionalInfos?: ReactNode;
}

export const SKILLS: Skill[] = [
  {
    id: 'introduction-css-browser-rendering-vocabulary',
    skill: 'What are the 5 vocabulary words used to describe CSS code?',
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#definitions',
    additionalInfos: (
      <>
        <Image
          src="/learn/basics/introduction-css-how-the-browser-renders-the-page/css-rule-question.png"
          alt="Find the 5 keywords to describe CSS code"
        />
      </>
    ),
  },
  {
    id: 'introduction-css-browser-rendering-include',
    skill: 'What are the 3 ways to include CSS in a page? What is the one you should not use?',
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#where-to-write-css',
  },
  {
    id: 'introduction-css-browser-rendering-crp',
    skill: (
      <>
        What is the <em>Critical Rendering Path</em>?
      </>
    ),
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#how-the-browser-renders-the-page',
  },
  {
    id: 'introduction-css-browser-rendering-loading',
    skill: 'How can CSS impact the load time of a page?',
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#how-the-browser-renders-the-page',
  },
  {
    id: 'introduction-css-browser-rendering-feature',
    skill: 'How can I check if a CSS feature is supported by a browser?',
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#invalid-css',
  },
  {
    id: 'selectors-specificity-main',
    skill: 'What are the main CSS selectors? (give at least 20 of them)',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#base-selectors',
  },
  {
    id: 'selectors-specificity-specificity',
    skill: 'What is Specificity?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#specificity',
  },
  {
    id: 'selectors-specificity-good-practices',
    skill: 'What makes a good/bad CSS selector?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#what-makes-a-good-selector',
  },
  {
    id: 'css-units-variables-units',
    skill: 'What are the main CSS units and their definition? (give at least 7 of them)',
    kataUrl: PAGES.CSSUnitsVariables.url() + '#css-units',
  },
  {
    id: 'css-units-variables-good-unit',
    skill: 'When should I use relative or absolute units?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#css-units',
  },
  {
    id: 'css-units-variables-px-rem',
    skill: 'Should I use px or rem/em?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#css-units',
  },
  {
    id: 'css-units-variables-variables',
    skill: 'How can I use CSS variables?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#css-variables',
  },
  {
    id: 'css-units-variables-keywords',
    skill: (
      <>
        What are the differences between <Code>inherit</Code>, <Code>initial</Code> and{' '}
        <Code>unset</Code>?
      </>
    ),
    kataUrl: PAGES.SelectorsSpecificity.url() + '#css-cascade',
  },
  {
    id: 'styling-text-custom-fonts-standard-font-size',
    skill: 'What is the standard range of font sizes and the standard value of line height?',
    kataUrl: PAGES.StylingTextCustomFonts.url() + '#basic-text-styling',
  },
  {
    id: 'styling-text-custom-fonts-include-fonts',
    skill: 'How can I include custom fonts?',
    kataUrl: PAGES.StylingTextCustomFonts.url() + '#font-families-custom-fonts',
  },
  {
    id: 'styling-text-custom-fonts',
    skill: 'What are the 3 steps of font loading?',
    kataUrl: PAGES.StylingTextCustomFonts.url() + '#font-families-custom-fonts',
  },
  {
    id: 'styling-text-custom-fonts-variable-fonts',
    skill: 'What is a variable font?',
    kataUrl: PAGES.StylingTextCustomFonts.url() + '#variable-fonts',
  },
  {
    id: 'box-model-definition',
    skill: 'What is the box model?',
    kataUrl: PAGES.TheBoxModel.url() + '#definition',
  },
  {
    id: 'box-model-alternatives',
    skill: 'What are the two possible box models?',
    kataUrl: PAGES.TheBoxModel.url() + '#i-broke-the-box-model',
  },
  // {
  //   id: 'flow-layout-basics-block-formatting-context',
  //   skill: 'What is the block formatting context?',
  // },
  // {
  //   id: 'flow-layout-basics-vertical-align',
  //   skill: (
  //     <>
  //       What is the baseline and what are the two purposes of the <Code>vertical-align</Code>{' '}
  //       property?
  //     </>
  //   ),
  // },
  // { id: 'flow-layout-basics-margin-collapsing', skill: 'What is margin collapsing?' },
  // {
  //   id: 'flow-layout-advanced-float',
  //   skill: (
  //     <>
  //       How does <Code>float</Code> and <Code>clear</Code> work?
  //     </>
  //   ),
  // },
  // {
  //   id: 'flow-layout-advanced-text-overflow',
  //   skill: 'How can I put an ellipsis at the end of my text if it is too big?',
  // },
  // {
  //   id: 'position-zindex-position',
  //   skill: (
  //     <>
  //       What are the different values of <Code>position</Code> and how do they work?
  //     </>
  //   ),
  // },
  // { id: 'position-zindex-stacking-context', skill: 'What is a stacking context?' },
  // { id: 'position-zindex-good-value', skill: 'How does z-index work?' },
  // {
  //   id: 'flex-formatting-context',
  //   skill: (
  //     <>
  //       What is the computed value of the <Code>display</Code> property of a <Code>span</Code>{' '}
  //       element in a container with <Code>display: flex</Code>?
  //     </>
  //   ),
  // },
  // {
  //   id: 'flex-formatting-align',
  //   skill: 'What are the properties to align content in a flex context?',
  // },
  // {
  //   id: 'flex-formatting-basis',
  //   skill: (
  //     <>
  //       How does <Code>flex-basis</Code> work?
  //     </>
  //   ),
  // },
];
