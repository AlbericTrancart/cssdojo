import 'app/(main)/global.scss';
import { ibmPlexSans } from 'app/(main)/layout';
import styles from 'app/(main)/MainLayout.module.scss';
import { generateTitleMetadata, PAGES } from 'services/pages';

export const metadata = generateTitleMetadata(PAGES.Dojo);

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={ibmPlexSans.variable}>
    <body>
      <main className={styles['main-container']}>{children}</main>
    </body>
  </html>
);

export default Layout;
