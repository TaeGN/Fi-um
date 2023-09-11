import styles from './MainPage.module.scss';
import { Image, LineChart, PieChart, Table, Text } from '@/components/atoms';
import { FundingCard } from '@/components/molecules';

const MainPage = () => {
  return (
    <div className={styles['main-page']}>
      <Image className="bg-blue big aa gg hbig big aa blue" src="" alt="aaa" />
      <div className="card-container">
        <FundingCard />
        <FundingCard />
        <PieChart />
        <LineChart />
        <LineChart />
      </div>
      <div className="mint">Hi my name is seung woo</div>
      <Text className="text-lg blue" text="개쩌는 테이블" />
      <Table />
    </div>
  );
};

export default MainPage;
