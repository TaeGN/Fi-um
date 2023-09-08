import styles from '@/App.module.scss';
import { Image, Text } from '@/components/atoms';

const App = () => {
  return (
    <>
      <Image className="bb big aa gg hbig big aa" src="aaa" alt="aaa" />
      <div className={styles.app}>Hi my name is seung woo</div>;
      <Text text="Text" className="blue text-lg" />
    </>
  );
};

export default App;
