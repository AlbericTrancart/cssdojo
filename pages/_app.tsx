import { AppProps } from 'next/app';
import Head from 'next/head';
import { CSSResets } from 'components/ui/CSSResets/CSSResets.style';
import Router, { useRouter } from 'next/router';
import { getPageConfig } from 'services/pages';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // from https://github.com/vercel/next.js/issues/3249
  const router = useRouter();
  Router.events.on('routeChangeComplete', () => {
    window.scrollTo(0, 0);
  });

  const config = getPageConfig(router.route);
  const title = config === null ? 'cssdojo' : `cssdojo | ${config.title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <CSSResets />

      <Component {...pageProps} />
    </>
  );
};

export default App;
