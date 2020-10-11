import { AppProps } from 'next/app';
import Head from 'next/head';
import { CSSResets } from 'components/CSSResets';
import Router, { useRouter } from 'next/router';
import { getPageConfig } from 'services/pages';
import { Header } from 'components/Header';
import { PageContainer } from 'components/Layout';
import { Footer } from 'components/Footer';
import 'prismjs/themes/prism-solarizedlight.css';

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
