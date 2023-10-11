import NextImage, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import styles from './Image.module.scss';

interface Props {
  src: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
}

export const Image: React.FC<Props> = ({ src, alt, caption, className, ...rest }) => (
  <figure className={styles['figure']}>
    <NextImage className={classNames(styles['image'], className)} src={src} alt={alt} {...rest} />

    {caption !== undefined && <figcaption className={styles['caption']}>{caption}</figcaption>}
  </figure>
);
