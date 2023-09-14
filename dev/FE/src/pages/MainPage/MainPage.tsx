import { useQuery } from '@tanstack/react-query';
import styles from './MainPage.module.scss';
import { Funding, MainAuction, Ranking } from '@/components/organisms';
import { getAuctions } from '@/api/auction';
import { Swiper } from '@/components/molecules';

const MainPage = () => {
  const { data } = useQuery({
    queryKey: ['getAuctions'],
    queryFn: getAuctions,
  });

  console.log(data);

  return (
    <div className={styles['main-page']}>
      <MainAuction auctionList={data} />
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
