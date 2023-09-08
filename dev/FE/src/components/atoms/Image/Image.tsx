import { convertClassName } from '@/utils';
import styles from './Image.module.css';

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

const initImageUrl: string = "/vite.svg";

const Image = ({ className, src, alt }: ImageProps) => {

  return (
    <>
      <img
        className={convertClassName(className, styles)}
        src={src || initImageUrl}
        alt={alt}
        data-testid="image"
      />
    </>
  );
};

export default Image;
