import styles from '@/App.module.scss';
import { Image, Text } from '@/components/atoms';
import { Table } from './components/molecules';

const App = () => {
  return (
    <div className={styles.app}>
      <Image
        className="bg-blue big aa gg hbig big aa blue"
        src="aaa"
        alt="aaa"
      />
      <div className="mint">Hi my name is seung woo</div>;
      <Text className="text-lg blue" text="개쩌는 테이블" />
      <Table />
    </div>
  );
};

export default App;
