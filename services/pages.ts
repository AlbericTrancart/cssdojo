interface Page {
  url: string;
  title: string;
}

export const PAGES: { [key: string]: Page } = {
  Home: {
    url: '/',
    title: 'Home',
  },
};

export const getPageConfig = (route: string) => {
  if (route in PAGES) {
    return PAGES[route];
  }

  return null;
};
