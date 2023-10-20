import Script from 'next/script';
import { IBM_Plex_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import './global.scss';
import 'prismjs/themes/prism-solarizedlight.css';
import { generateTitleMetadata, PAGES } from 'services/pages';
import styles from './MainLayout.module.scss';

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  ...generateTitleMetadata(PAGES.Home),
  title: 'cssdojo',
  description: '(re)learn CSS, the right way',
  metadataBase: new URL('https://cssdojo.dev'),
  applicationName: 'CSS Dojo',
  authors: [{ name: 'Albéric Trancart', url: 'https://alberic.trancart.net/' }],
  keywords: ['css', 'dojo', 'tutorial', 'learn', 'guide'],
  themeColor: '#ffffff',
  icons: { icon: '/favicon-32x32.png', apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
};

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <html lang="en" className={ibmPlexSans.variable}>
    <body>
      <Header />

      <main className={styles['main-container']}>{children}</main>

      <Footer />

      <Script id="google-analytics">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'G-YYCZ0NZV0L', 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script src="https://www.google-analytics.com/analytics.js" />
    </body>
  </html>
);

export default Layout;
