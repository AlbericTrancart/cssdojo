import { Title } from 'components/Layout';
import { Link } from 'components/Link';
import { NextPage } from 'next';
import { PAGES } from 'services/pages';

const Home: NextPage = () => (
  <>
    <Title>Hello world!</Title>

    <ul>
      <li>
        <Link href={PAGES.TheBoxModel.url}>The Box Model</Link>
      </li>
    </ul>
  </>
);

export default Home;
