import NextImage, { StaticImageData } from 'next/image';
import styles from './Image.module.scss';

interface Props {
  src: StaticImageData;
  alt: string;
  caption?: string;
}

export const Image: React.FC<Props> = ({ src, alt, caption, ...rest }) => (
  <figure className={styles['figure']}>
    <NextImage className={styles['image']} src={src} alt={alt} {...rest} />

    {caption !== undefined && <figcaption className={styles['caption']}>{caption}</figcaption>}
  </figure>
);
