import { Link } from 'components/Link';
import Layout from './(main)/layout';

const Error404 = () => (
  <Layout>
    <h1>Not Found!</h1>

    <p>This is not the CSS property you’re looking for.</p>

    <Link href="/">Return Home</Link>
  </Layout>
);

export default Error404;
