import styles from './Image.module.scss';

interface Props {
  src: string;
  alt: string;
  caption?: string;
}

export const Image: React.FC<Props> = ({ src, alt, caption, ...rest }) => (
  <figure className={styles['figure']}>
    <img className={styles['image']} src={src} alt={alt} {...rest} />

    {caption !== undefined && <figcaption className={styles['caption']}>{caption}</figcaption>}
  </figure>
);
