import styles from '@/App.module.scss';
import { Image, LineChart, PieChart, Text } from '@/components/atoms';
import { FundingCard, Table } from './components/molecules';

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
      <div className="mint">Hi my name is seung woo</div>
      <Text className="text-lg blue" text="개쩌는 테이블" />
      <Table />
    </div>
  );
};

export default App;
