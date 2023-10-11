import { NextPage } from 'next';
import { Title } from 'components/Layout';
import { Link } from 'components/Link';
import { PAGES } from 'services/pages';

const Kata: NextPage = () => (
  <>
    <Title>{PAGES.OverflowingContentFloats.title}</Title>

    <p>
      This kata is not written yet ;)
      <br />
      I’m working my ass off on the next one!
      <br />
      <Link href={PAGES.Home.url()}>Take me to the homepage instead</Link> or{' '}
      <Link href="https://twitter.com/alberictrancart">follow me on Twitter</Link> for updates.
    </p>
  </>
);

export default Kata;
