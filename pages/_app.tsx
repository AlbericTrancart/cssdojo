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
      </Head>

      <CSSResets />

      <Header isHomepage={config?.url === '/'} />

      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>

      <Footer />
    </>
  );
};

export default App;
