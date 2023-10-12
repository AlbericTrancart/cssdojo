import { Metadata } from 'next';
import { ReactNode } from 'react';

export interface Page {
  url: (...params: string[]) => string;
  route: string;
  title: string;
}

export const PAGES = {
  Home: {
    url: () => '/',
    route: '/',
    title: 'Home',
  },
  SkillsList: {
    url: () => '/skills-list',
    route: '/skills-list',
    title: 'Skills list',
  },
  Dojo: {
    url: (kata: string) => `/dojo/${kata}`,
    route: '/dojo/[kataId]',
    title: 'Dojo mode',
  },

  // Katas
  // Basics
  WhyCSSHowItWorks: {
    url: () => '/learn/basics/introduction-css-how-the-browser-renders-the-page',
    route: '/learn/basics/introduction-css-how-the-browser-renders-the-page',
    title: 'Introduction to CSS and How the browser renders the page',
  },
  SelectorsSpecificity: {
    url: () => '/learn/basics/selectors-specificity',
    route: '/learn/basics/selectors-specificity',
    title: 'Selectors and Specificity',
  },
  StylingTextCustomFonts: {
    url: () => '/learn/basics/styling-text-custom-fonts',
    route: '/learn/basics/styling-text-custom-fonts',
    title: 'Styling text and custom fonts',
  },
  CSSUnitsVariables: {
    url: () => '/learn/basics/css-units-variables',
    route: '/learn/basics/css-units-variables',
    title: 'CSS units and variables',
  },
  TheBoxModel: {
    url: () => '/learn/basics/the-box-model',
    route: '/learn/basics/the-box-model',
    title: 'The Box Model',
  },
  FlowLayout: {
    url: () => '/learn/basics/the-flow-layout-part-1-block-inline-formatting-contexts',
    route: '/learn/basics/the-flow-layout-part-1-block-inline-formatting-contexts',
    title: 'The Flow layout (part 1) - the block and inline formatting contexts',
  },

  // Layouts
  OverflowingContentFloats: {
    url: () => '/learn/layouts/the-flow-layout-part-2-overflowing-content-floats',
    route: '/learn/layouts/the-flow-layout-part-2-overflowing-content-floats',
    title: 'The Flow layout (part 2) - Overflowing content and floats',
  },
} satisfies { [key: string]: Page };

export const generateTitleMetadata = (page: Page): Metadata => {
  const title = `${page.title} | cssdojo`;

  return {
    title,
    openGraph: {
      title,
      url: page.url(),
      type: 'website',
      locale: 'en_US',
      description: '(re)learn CSS, the right way',
      siteName: 'CSS Dojo',
      images: [
        {
          url: 'https://cssdojo.dev/og-image.png',
          alt: 'The CSS Dojo logo',
          width: 512,
          height: 512,
        },
      ],
    },
    twitter: {
      title,
      card: 'summary_large_image',
      description: '(re)learn CSS, the right way',
      images: [{ url: 'https://cssdojo.dev/og-image.png', alt: 'The CSS Dojo logo' }],
    },
  };
};

export const IndentityLayout = ({ children }: { children: ReactNode }) => children;
