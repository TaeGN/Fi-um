import {
  checkConditionClassName,
  convertClassName,
  convertClassNameList,
} from '@/utils';
import styles from './UserList.module.scss';
import { TotalCapital } from '@/types';
import { PieChart, Table } from '@/components/atoms';
import { useState } from 'react';

interface UserListProps {
  className?: string;
  totalCapitals?: TotalCapital[];
}

const UserList = ({ className, totalCapitals }: UserListProps): JSX.Element => {
  const [chartState, setChartState] = useState<number>(0);

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
                {point}
              </span>
              <span
                className={convertClassNameList(styles['total-capital__item'])}
              >
                {stockMoney}
              </span>
              <span
                className={convertClassNameList(styles['total-capital__item'])}
              >
                {depositMoney}
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
              onClick={() => setChartState(userNo)}
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
              <Table data={pointRecord} />
            </div>
          </>
        ),
      )}
    </div>
  );
};

export default UserList;
