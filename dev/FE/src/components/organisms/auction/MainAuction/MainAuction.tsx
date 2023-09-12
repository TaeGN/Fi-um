import { MainAuctionDescription } from '@/components/molecules';
import styles from './MainAuction.module.scss';
import { Image } from '@/components/atoms';

const MainAuction = ({}: any) => {
  const ddd = {
    title: '개쩌는 그림',
    user: '개쩌는 유저',
    content: '개쩌는 내용',
  };
  return (
    <div className={styles['main-auction']}>
      <MainAuctionDescription
        className={styles['main-auction__description']}
        data={ddd}
      />
      <Image className={styles['main-auction__image']} src="" alt="aa" />
    </div>
  );
};

export default MainAuction;
