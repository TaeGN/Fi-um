import { convertClassName, convertClassNameList } from '@/utils';
import styles from './Swiper.module.scss';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwiperProps {
  className?: string;
  children?: JSX.Element[];
}

// Import Swiper styles

const CustomSwiper = ({ className, children }: SwiperProps): JSX.Element => {
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
      modules={[Autoplay, Pagination, Navigation]}
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
