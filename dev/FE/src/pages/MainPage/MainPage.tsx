import styles from './MainPage.module.scss';
import { MainAuction } from '@/components/organisms';

const MainPage = () => {
  return (
    <div className={styles['main-page']}>
      <MainAuction />
    </div>
  );
};

export default MainPage;
