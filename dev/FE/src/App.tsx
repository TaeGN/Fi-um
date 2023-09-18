import styles from '@/App.module.scss';
import Router from './router/Router';
import { Footer, Navbar } from './components/molecules';
import { convertClassNameList } from './utils';

const App = () => {
  window.addEventListener('scroll', () => {
    const scrollbar = document.querySelector('.scrollbar');
    if (scrollbar) {
      // 스크롤 위치가 일정 이상 내려갔을 때 스크롤 바를 나타나게 함
      if (window.scrollY > 100) {
        scrollbar.classList.add('active');
      } else {
        scrollbar.classList.remove('active');
      }
    }
  });

  return (
    <div className={convertClassNameList(styles.app)}>
      <Navbar className={styles['app__navbar']} />
      <Router className={styles['app__main']} />
      <Footer className={styles['app__footer']} />
    </div>
  );
};

export default App;
