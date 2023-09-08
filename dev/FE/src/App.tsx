import styles from '@/App.module.scss';
import { Image } from '@/components/atoms';

const App = () => {
  return (
    <>
      <Image
        className="bg-blue big aa gg hbig big aa blue"
        src="aaa"
        alt="aaa"
      />
      <div className={styles.app}>Hi my name is seung woo</div>;
    </>
  );
};

export default App;
