import { MainAuctionDescription } from '@/components/molecules';
import styles from './MainAuction.module.scss';
import { Image } from '@/components/atoms';

const MainAuction = ({ data }: any) => {
  const ddd = {
    title: '개쩌는 그림',
    user: '개쩌는 유저',
    content: '개쩌는 내용',
  };
  return (
    <div className={styles['main-auction']}>
      <MainAuctionDescription data={ddd} />
      <Image src="" alt="aa" />
    </div>
  );
};

export default MainAuction;
