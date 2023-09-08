import styles from '@/App.module.scss';
import { Image } from '@/components/atoms';
import Table from './components/molecules/Table/Table';

const App = () => {
  return (
    <>
      <Image
        className="bg-blue big aa gg hbig big aa blue"
        src="aaa"
        alt="aaa"
      />
      <div className={styles.app}>Hi my name is seung woo</div>;
      <Table />
    </>
  );
};

export default App;
