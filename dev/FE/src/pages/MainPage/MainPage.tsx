import { useQuery } from '@tanstack/react-query';
import styles from './MainPage.module.scss';
import { Funding, MainAuction, Ranking } from '@/components/organisms';
import { Swiper } from '@/components/molecules';
import { getAuctionsQuery } from '@/api/queries/auction';
import { Auction, Funding as FundingType } from '@/types';
import { getFundingsQuery } from '@/api/queries';

const MainPage = () => {
  const { data: auctions } = useQuery<Auction[], Error>(getAuctionsQuery());
  const { data: fundings } = useQuery<FundingType[]>(getFundingsQuery());

  return (
    <div className={styles['main-page']}>
      <MainAuction auctions={auctions} />
      <div className={styles['main-page__swiper']}>
        <Swiper>
          <Ranking />
          <Ranking />
          <Ranking />
        </Swiper>
      </div>
      <Funding fundings={fundings} />

      {/* <div className={styles['main-page__education']}>{eduBook()}</div> */}
    </div>
  );
};

export default MainPage;
