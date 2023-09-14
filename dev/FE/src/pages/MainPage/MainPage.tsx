import styles from './MainPage.module.scss';
import { Funding, MainAuction, Ranking } from '@/components/organisms';

const MainPage = () => {
  return (
    <div className={styles['main-page']}>
      <MainAuction />
      <Ranking />
      <Funding />
    </div>
  );
};

export default MainPage;
