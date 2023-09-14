import styles from '@/App.module.scss';
import Router from './router/Router';
import { Footer, Navbar } from './components/molecules';
import { convertClassNameList } from './utils';

const App = () => {
  return (
    <div className={convertClassNameList(styles.app)}>
      <Navbar className={styles['app__navbar']} />
      <Router className={styles['app__main']} />
      <Footer className={styles['app__footer']} />
    </div>
  );
};

export default App;
