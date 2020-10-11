export interface Page {
  url: string;
  title: string;
}

export const PAGES = {
  Home: {
    url: '/',
    title: 'Home',
  },

  // Katas
  // Basics
  WhyCSSHowItWorks: {
    url: '/learn/basics/why-css-how-it-works',
    title: 'Why CSS and How it works',
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
