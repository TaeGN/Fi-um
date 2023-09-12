import styles from './MainPage.module.scss';
import { Image, LineChart, PieChart, Table, Text } from '@/components/atoms';
import {
  AuctionDescription,
  AuctionDetailDescription,
  FundingCard,
  FundingDescription,
  Swiper,
} from '@/components/molecules';
import { AuctionDetailMain, MainAuction } from '@/components/organisms';
import { convertClassNameList } from '@/utils';

const MainPage = () => {
  return (
    <div className={styles['main-page']}>
      <Swiper className={convertClassNameList(styles['main-page__swiper'])}>
        <PieChart />
        <PieChart />
        <PieChart />
        <PieChart />
      </Swiper>

      <div className="card-container">
        <FundingCard />
        <LineChart />
        <LineChart />
      </div>
      <div className="mint">Hi my name is seung woo</div>
      <Text className="text-lg blue" text="개쩌는 테이블" />
      <Table />
      <MainAuction />
      <AuctionDescription />
      <AuctionDetailDescription />
      <FundingDescription />
    </div>
  );
};

export default MainPage;
