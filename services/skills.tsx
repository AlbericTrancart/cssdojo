import { ReactNode } from 'react';
import { Code } from 'components/Code';
import { Image } from 'components/Image';
import { PAGES } from './pages';
import cssRuleQuestion from './css-rule-question.png';

export interface Skill {
  skill: ReactNode;
  kataUrl: string;
  additionalInfos?: ReactNode;
}

export const SKILLS = {
  'introduction-css-browser-rendering-vocabulary': {
    skill: 'What are the vocabulary words used to describe CSS code?',
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#definitions',
    additionalInfos: (
      <>
        <Image src={cssRuleQuestion} alt="Find the 5 keywords to describe CSS code" />
      </>
    ),
  },
  'introduction-css-browser-rendering-include': {
    skill: 'What are the 3 ways to include CSS in a page? What is the one you should not use?',
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#where-to-write-css',
  },
  'introduction-css-browser-rendering-crp': {
    skill: (
      <>
        What is the <em>Critical Rendering Path</em>?
      </>
    ),
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#how-the-browser-renders-the-page',
  },
  'introduction-css-browser-rendering-loading': {
    skill: 'How can CSS impact the load time of a page?',
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#how-the-browser-renders-the-page',
  },
  'introduction-css-browser-rendering-feature': {
    skill: 'How can I check if a CSS feature is supported by a browser?',
    kataUrl: PAGES.WhyCSSHowItWorks.url() + '#invalid-css',
  },
  'selectors-specificity-main': {
    skill: 'What are the main CSS selectors? (give at least 20 of them)',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#base-selectors',
  },
  'selectors-specificity-specificity': {
    skill: 'What is Specificity?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#specificity',
  },
  'selectors-specificity-good-practices': {
    skill: 'What makes a good/bad CSS selector?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#what-makes-a-good-selector',
  },
  'css-units-variables-units': {
    skill: 'What are the main CSS units and their definition? (give at least 7 of them)',
    kataUrl: PAGES.CSSUnitsVariables.url() + '#css-units',
  },
  'css-units-variables-good-unit': {
    skill: 'When should I use relative or absolute units?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#css-units',
  },
  'css-units-variables-px-rem': {
    skill: 'Should I use px or rem/em?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#css-units',
  },
  'css-units-variables-variables': {
    skill: 'How can I use CSS variables?',
    kataUrl: PAGES.SelectorsSpecificity.url() + '#css-variables',
  },
  'css-units-variables-keywords': {
    skill: (
      <>
        What are the differences between <Code>inherit</Code>, <Code>initial</Code> and{' '}
        <Code>unset</Code>?
      </>
    ),
    kataUrl: PAGES.SelectorsSpecificity.url() + '#css-cascade',
  },
  'styling-text-custom-fonts-standard-font-size': {
    skill: 'What are the properties to change the style of a text? (give at least 5 of them)',
    kataUrl: PAGES.StylingTextCustomFonts.url() + '#basic-text-styling',
  },
  'styling-text-custom-fonts-include-fonts': {
    skill: 'How can I include custom fonts?',
    kataUrl: PAGES.StylingTextCustomFonts.url() + '#font-families-custom-fonts',
  },
  'styling-text-custom-fonts': {
    skill: 'What are the 3 steps of font loading?',
    kataUrl: PAGES.StylingTextCustomFonts.url() + '#font-families-custom-fonts',
  },
  'styling-text-custom-fonts-variable-fonts': {
    skill: 'What is a variable font?',
    kataUrl: PAGES.StylingTextCustomFonts.url() + '#variable-fonts',
  },
  'box-model-definition': {
    skill: 'What is the box model?',
    kataUrl: PAGES.TheBoxModel.url() + '#definition',
  },
  'box-model-alternatives': {
    skill: 'What are the two possible box models?',
    kataUrl: PAGES.TheBoxModel.url() + '#box-sizing-property',
  },
  'box-model-layout': {
    skill: 'In CSS, what is a layout?',
    kataUrl: PAGES.TheBoxModel.url() + '#layouts',
  },
  'box-model-common-layouts': {
    skill: 'What are the most common layouts?',
    kataUrl: PAGES.TheBoxModel.url() + '#layouts',
  },
  'box-model-outer-inner-display': {
    skill: 'What are the outer and inner display types?',
    kataUrl: PAGES.TheBoxModel.url() + '#display',
  },
  'flow-layout-block-formatting-context': {
    skill: 'What is a Block Formatting Context?',
    kataUrl: PAGES.FlowLayout.url() + '#block-formatting-context',
  },
  'flow-layout-boxes': {
    skill: 'How inline and block boxes are laid out in the Flow layout?',
    kataUrl: PAGES.FlowLayout.url() + '#inline-block-boxes-grouping',
  },
  'flow-layout-block-formatting': {
    skill: 'What are the rules of block formatting?',
    kataUrl: PAGES.FlowLayout.url() + '#block-formatting',
  },
  'flow-layout-margin-collapsing': {
    skill: 'How does margin collapsing work?',
    kataUrl: PAGES.FlowLayout.url() + '#block-formatting',
  },
  'flow-layout-inline-formatting': {
    skill: 'What are the rules of inline formatting?',
    kataUrl: PAGES.FlowLayout.url() + '#inline-formatting',
  },
} satisfies { [key: string]: Skill };

interface SkillWithId extends Skill {
  id: keyof typeof SKILLS;
}

export const SKILLS_LIST: SkillWithId[] = Object.entries(SKILLS).map(
  ([id, skill]): SkillWithId => ({
    id: id as keyof typeof SKILLS,
    ...skill,
  }),
);
