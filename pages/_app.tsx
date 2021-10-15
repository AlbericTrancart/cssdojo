import { AppProps } from 'next/app';
import Head from 'next/head';
import { CSSResets } from 'components/CSSResets';
import Router, { useRouter } from 'next/router';
import { getPageConfig } from 'services/pages';
import { Header } from 'components/Header';
import { PageContainer } from 'components/Layout';
import { Footer } from 'components/Footer';
import 'prismjs/themes/prism-solarizedlight.css';
import '@reach/checkbox/styles.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // from https://github.com/vercel/next.js/issues/3249
  const router = useRouter();
  Router.events.on('routeChangeComplete', () => {
    window.scrollTo(0, 0);
  });

  const config = getPageConfig(router.route);
  const isFullpageMode = router.route.includes('dojo');
  const title = config ? `cssdojo | ${config.title}` : 'cssdojo';

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans"
          rel="stylesheet"
          type="text/css"
        />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:url" content={`https://cssdojo.dev${router.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="(re)learn CSS, the right way" />
        <meta property="og:site_name" content="CSS Dojo" />
        <meta property="og:image" content="https://cssdojo.dev/android-chrome-512x512.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="The CSS3 logo" />
      </Head>

      <CSSResets />

      {!isFullpageMode && <Header isHomepage={config?.route === '/'} />}

      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>

      {!isFullpageMode && <Footer />}
    </>
  );
};

export default App;
