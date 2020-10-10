interface Page {
  url: string;
  title: string;
}

export const PAGES: { [key: string]: Page } = {
  Home: {
    url: '/',
    title: 'Home',
  },

  // Katas
  // Basics
  TheBoxModel: {
    url: '/learn/basics/the-box-model',
    title: 'The Box Model',
  },
};

export const getPageConfig = (route: string) => {
  if (route in PAGES) {
    return PAGES[route];
  }

  return null;
};
