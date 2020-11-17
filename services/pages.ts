export interface Page {
  url: string;
  title: string;
}

export const PAGES = {
  Home: {
    url: '/',
    title: 'Home',
  },
  SkillsList: {
    url: '/skills-list',
    title: 'Skills list',
  },

  // Katas
  // Basics
  WhyCSSHowItWorks: {
    url: '/learn/basics/introduction-css-how-the-browser-renders-the-page',
    title: 'Introduction to CSS and How the browser renders the page',
  },
  SelectorsSpecificity: {
    url: '/learn/basics/selectors-specificity',
    title: 'Selectors and Specificity',
  },
  TheBoxModel: {
    url: '/learn/basics/the-box-model',
    title: 'The Box Model',
  },
  OverflowingContent: {
    url: '/learn/basics/overflowing-content',
    title: 'Overflowing content',
  },

  // Layouts
  FlowLayout: {
    url: '/learn/layouts/flow-layout',
    title: 'The flow layout',
  },
};

export const getPageConfig = (route: string) =>
  Object.values(PAGES).find((page) => route === page.url);
