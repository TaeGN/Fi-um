import {
  checkConditionClassName,
  convertClassName,
  convertClassNameList,
  convertDate,
  priceFilter,
} from '@/utils';
import styles from './UserList.module.scss';
import { TotalCapital } from '@/types';
import { PieChart, Table, Text } from '@/components/atoms';
import { useState } from 'react';

interface UserListProps {
  className?: string;
  totalCapitals?: TotalCapital[];
}

const UserList = ({ className, totalCapitals }: UserListProps): JSX.Element => {
  const [chartState, setChartState] = useState<number>(0);

  const handleChangeChartState = (userNo: number) => () => {
    if (userNo === chartState) setChartState(0);
    else setChartState(userNo);
  };

  console.log(totalCapitals?.[0].pointRecord[0].changedTime);
  console.log(
    totalCapitals?.[0].pointRecord[0].changedTime &&
      new Date(totalCapitals?.[0].pointRecord[0].changedTime),
  );

  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      {totalCapitals?.map(
        ({
          userNo,
          userName,
          point,
          stockMoney,
          depositMoney,
          fundingMoney,
          pointRecord,
          stockList,
        }) => (
          <>
            <div
              onClick={handleChangeChartState(userNo)}
              key={userNo}
              className={convertClassNameList(styles['total-capital'])}
            >
              <span
                className={convertClassNameList(styles['total-capital__item'])}
              >
                {userName}
              </span>
              <span
                className={convertClassNameList(styles['total-capital__item'])}
              >
                {priceFilter(point)}
              </span>
              <span
                className={convertClassNameList(styles['total-capital__item'])}
              >
                {priceFilter(stockMoney)}
              </span>
              <span
                className={convertClassNameList(styles['total-capital__item'])}
              >
                {priceFilter(depositMoney)}
              </span>
            </div>
            <div
              className={convertClassNameList(
                'flex-container',
                checkConditionClassName(
                  chartState !== userNo,
                  styles['disabled'],
                ),
              )}
            >
              <PieChart
                chartData={{
                  labels: ['주식', '예적금', '펀딩', '포인트'],
                  data: [stockMoney, depositMoney, fundingMoney, point],
                  length: 4,
                }}
              />
              <PieChart
                chartData={{
                  labels: stockList.map(({ stockName }) => stockName),
                  data: stockList.map(({ stockCount }) => stockCount),
                  length: stockList.length,
                }}
              />

              <Table
                className={styles['user-list__table']}
                data={
                  pointRecord &&
                  pointRecord
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
                size={2}
              />
            </div>
          </>
        ),
      )}
    </div>
  );
};

export default UserList;
