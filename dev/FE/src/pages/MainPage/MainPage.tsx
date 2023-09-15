import { useQuery } from '@tanstack/react-query';
import styles from './MainPage.module.scss';
import { Funding, MainAuction, Ranking } from '@/components/organisms';
import { Swiper } from '@/components/molecules';
import { getAuctionsQuery } from '@/api/queries/auction';

const MainPage = () => {
  const { data: auctions } = useQuery(getAuctionsQuery());
  console.log(auctions);

  return (
    <div className={styles['main-page']}>
      <MainAuction auctionList={auctions} />
      <div className={styles['main-page__swiper']}>
        <Swiper>
          <Ranking />
          <Ranking />
          <Ranking />
        </Swiper>
      </div>
      <Funding />
    </div>
  );
};

export default MainPage;
