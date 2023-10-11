import { ButtonLink } from 'components/Button';

import styles from './NextKataButton.module.scss';

interface Props {
  href: string;
}

export const NextKataButton: React.FC<Props> = ({ href }) => (
  <div className={styles['wrapper']}>
    <ButtonLink href={href}>Go to the next kata!</ButtonLink>
  </div>
);
