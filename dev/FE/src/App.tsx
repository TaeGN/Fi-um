import styles from '@/App.module.scss';
import { Image, Text } from '@/components/atoms';
import { Table } from './components/molecules';

const App = () => {
  return (
    <>
      <Image
        className="bg-blue big aa gg hbig big aa blue"
        src="aaa"
        alt="aaa"
      />
      <div className={styles.app}>Hi my name is seung woo</div>;
      <Text className="text-lg blue" text="개쩌는 테이블" />
      <Table />
    </>
  );
};

export default App;
