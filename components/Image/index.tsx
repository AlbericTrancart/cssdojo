import NextImage, { StaticImageData } from 'next/image';
import classNames from 'classnames';
import styles from './Image.module.scss';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any; // StaticImageData or SVG inline component via SVGR
  alt: string;
  caption?: string;
  className?: string;
  style?: React.CSSProperties;
}

const isStaticImageData = (src: unknown): src is StaticImageData =>
  typeof src === 'object' && src !== null && 'src' in src && src.src !== undefined;

export const Image: React.FC<Props> = ({ src, alt, caption, className, ...rest }) => (
  <figure className={styles['figure']}>
    {isStaticImageData(src) ? (
      <NextImage className={classNames(styles['image'], className)} src={src} alt={alt} {...rest} />
    ) : (
      <div className={classNames(styles['image'], className)} {...rest}>
        {src}
      </div>
    )}

    {caption !== undefined && <figcaption className={styles['caption']}>{caption}</figcaption>}
  </figure>
);
