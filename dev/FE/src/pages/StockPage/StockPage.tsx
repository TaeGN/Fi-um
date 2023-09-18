import { getStockKing, getStocks } from '@/api/stock';
import { Table } from '@/components/atoms';
import { StockRanking } from '@/components/molecules';
import { Stock, StockRanking as StockRank } from '@/types';
import { useQuery } from '@tanstack/react-query';
import styles from './StockPage.module.scss';

const StockPage = () => {
  const { data: allStocks, status: isAllStocksLoading } = useQuery<
    Stock[],
    string
  >(['getStockInformation'], getStocks);
  console.log(allStocks, '전체 조회');
  const { data: stockKing, status: isStockKingLoading } = useQuery<
    StockRank[],
    string
  >(['getStockKing'], getStockKing);
  console.log(stockKing, '랭킹조회');
  return (
    <div className={styles.stockPage}>
      <div className={styles.allStocks}>
        {isAllStocksLoading === 'success' ? (
          <Table propsData={allStocks} />
        ) : (
          ''
        )}
      </div>
      <div className={styles.newsWrapper}>뉴스 들어갈곳</div>
      <div className={styles.rankingWrapper}>
        {isStockKingLoading === 'success'
          ? stockKing.map((item) => {
              return <StockRanking key={item.userName} title={item.userName} />;
            })
          : ''}
      </div>
    </div>
  );
};

export default StockPage;
