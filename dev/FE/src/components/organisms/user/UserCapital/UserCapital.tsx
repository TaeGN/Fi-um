import {
  convertClassName,
  convertClassNameList,
  convertDate,
  priceFilter,
} from '@/utils';
import styles from './UserCapital.module.scss';
import { TotalCapital } from '@/types';
import { PieChart, Table, Text } from '@/components/atoms';
import { useMemo } from 'react';

interface UserCapitalProps {
  className?: string;
  totalCapitals?: TotalCapital[];
  chartState: number;
}

const UserCapital = ({
  className,
  totalCapitals,
  chartState,
}: UserCapitalProps): JSX.Element => {
  const totalCapital = useMemo<TotalCapital | undefined>(() => {
    return totalCapitals?.find(({ userNo }) => userNo === chartState);
  }, [chartState]);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['user-capital'],
      )}
    >
      {totalCapital && (
        <>
          <div className={styles['user-capital__pie-chart-container']}>
            <PieChart
              className={styles['user-capital__pie-chart']}
              chartData={{
                labels: ['주식', '예적금', '펀딩', '포인트'],
                data: [
                  totalCapital.stockMoney,
                  totalCapital.depositMoney,
                  totalCapital.fundingMoney,
                  totalCapital.point,
                ],
                length: 4,
              }}
            />
            <PieChart
              className={styles['user-capital__pie-chart']}
              chartData={{
                labels: totalCapital.stockList.map(
                  ({ stockName }) => stockName,
                ),
                data: totalCapital.stockList.map(
                  ({ stockCount }) => stockCount,
                ),
                length: totalCapital.stockList.length,
              }}
            />
          </div>

          <Table
            className={styles['user-list__table']}
            data={
              totalCapital.pointRecord &&
              totalCapital.pointRecord
                .sort((a, b) => b.changedTime - a.changedTime)
                .map(({ useType, pointChange, changedTime }) => {
                  return {
                    타입: useType,
                    변화량: (
                      <Text
                        className={
                          pointChange > 0
                            ? 'blue'
                            : pointChange !== 0
                            ? 'red'
                            : ''
                        }
                        text={priceFilter(pointChange)}
                      />
                    ),
                    시간: convertDate(changedTime),
                  };
                })
            }
            size={5}
          />
        </>
      )}
    </div>
  );
};

export default UserCapital;
