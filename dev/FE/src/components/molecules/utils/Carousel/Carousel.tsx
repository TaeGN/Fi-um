import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Carousel.module.scss';

interface CarouselProps {
  className?: string;
}

const Carousel = ({ className }: CarouselProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      Carousel
    </div>
  );
};

export default Carousel;
