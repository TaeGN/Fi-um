import styles from '@/App.module.scss';
import { Image, LineChart, PieChart, Table, Text } from '@/components/atoms';
import { FundingCard } from './components/molecules';
import { MainAuction } from './components/organisms';

const App = () => {
  return (
    <div className={['container', styles.app].join(' ')}>
      <Image className="bg-blue big aa gg hbig big aa blue" src="" alt="aaa" />
      <div className="card-container">
        <FundingCard />
        <FundingCard />
        <PieChart />
        <LineChart />
      </div>
      <Text text="Hi my name is seung woo" />
      <Text className="text-lg blue" text="개쩌는 테이블" />
      <Table />
      <MainAuction />
    </div>
  );
};

export default App;
