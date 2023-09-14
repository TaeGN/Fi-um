import { MainAuctionDescription, Swiper } from '@/components/molecules';
import styles from './MainAuction.module.scss';
import { Image } from '@/components/atoms';

const MainAuction = ({ data }: any) => {
  console.log(data);

  const ddd = {
    title: '개쩌는 그림',
    user: '개쩌는 유저',
    content: '개쩌는 내용',
  };
  return (
    <>
      <Swiper>
        <div className={styles['main-auction']}>
          <MainAuctionDescription
            className={styles['main-auction__description']}
            data={ddd}
          />
          <Image className={styles['main-auction__image']} src="" alt="aa" />
        </div>
        <div className={styles['main-auction']}>
          <MainAuctionDescription
            className={styles['main-auction__description']}
            data={ddd}
          />
          <Image className={styles['main-auction__image']} src="" alt="aa" />
        </div>
        <div className={styles['main-auction']}>
          <MainAuctionDescription
            className={styles['main-auction__description']}
            data={ddd}
          />
          <Image className={styles['main-auction__image']} src="" alt="aa" />
        </div>
        <div className={styles['main-auction']}>
          <MainAuctionDescription
            className={styles['main-auction__description']}
            data={ddd}
          />
          <Image className={styles['main-auction__image']} src="" alt="aa" />
        </div>
        <div className={styles['main-auction']}>
          <MainAuctionDescription
            className={styles['main-auction__description']}
            data={ddd}
          />
          <Image className={styles['main-auction__image']} src="" alt="aa" />
        </div>
        <div className={styles['main-auction']}>
          <MainAuctionDescription
            className={styles['main-auction__description']}
            data={ddd}
          />
          <Image className={styles['main-auction__image']} src="" alt="aa" />
        </div>
        <div className={styles['main-auction']}>
          <MainAuctionDescription
            className={styles['main-auction__description']}
            data={ddd}
          />
          <Image className={styles['main-auction__image']} src="" alt="aa" />
        </div>
      </Swiper>
    </>
  );
};

export default MainAuction;
