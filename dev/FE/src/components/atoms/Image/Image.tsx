import { convertClassName } from '@/utils';
import styles from './Image.module.css';

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const Image = ({ className, src, alt }: ImageProps) => {
  return (
    <>
      <img
        className={convertClassName(className, styles)}
        src={src}
        alt={alt}
      />
    </>
  );
};

export default Image;
