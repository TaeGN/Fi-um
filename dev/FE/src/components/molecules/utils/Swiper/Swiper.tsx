import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Swiper.module.scss';
import { useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwiperProps {
  className?: string;
  children?: JSX.Element[];
  autoplay?: boolean;
}

// Import Swiper styles

const CustomSwiper = ({
  className,
  autoplay,
  children,
}: SwiperProps): JSX.Element => {
  const modules = useMemo(() => {
    const arr = [Pagination, Navigation];
    if (autoplay) {
      arr.push(Autoplay);
    }
    return arr;
  }, [autoplay]);

  return (
    <Swiper
      className={convertClassNameList(
        convertClassName(className, styles),
        styles.swiper,
      )}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={modules}
    >
      {children?.map((child) => (
        <SwiperSlide className={convertClassNameList(styles['swiper-slide'])}>
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomSwiper;
