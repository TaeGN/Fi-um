import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileAsset.module.scss';
import { PieChart, Text } from '@/components/atoms';
import { useQuery } from '@tanstack/react-query';
import { Capital } from '@/types';
import { getUserCapitalQuery } from '@/api/queries/user';
import { useMemo } from 'react';

interface ProfileAssetProps {
  className?: string;
  userNo: number;
}

const ProfileAsset = ({
  className,
  userNo,
}: ProfileAssetProps): JSX.Element => {
  const { data: capital } = useQuery<Capital, Error>(
    getUserCapitalQuery(userNo),
  );
  console.log(capital);

  const { capitalChart, revenueChart, rivalChart } = useMemo(() => {
    if (!capital)
      return {
        capitalChart: undefined,
        revenueChart: undefined,
        rivalChart: undefined,
      };
    const capitalChart = {
      labels: ['stock', 'deposit', 'saving', 'donation'],
      data: [capital.stock, capital.deposit, capital.saving, capital.donation],
      length: 4,
    };

    const revenueChart = {
      labels: ['stock', 'deposit', 'saving', 'auction', 'quizIncome'],
      data: [
        capital.stockIncome,
        capital.depositIncome,
        capital.savingIncome,
        capital.auctionIncome,
        capital.quizIncome,
      ],
      length: 5,
    };

    return {
      capitalChart,
      revenueChart,
    };
  }, [capital]);

  return (
    <div
      style={{
        width: '75%',
      }}
      className={
        (convertClassNameList(convertClassName(className, styles)),
        'flex-container')
      }
    >
      <div>
        <Text className="text-lg center" text="내 자산" />
        <PieChart chartData={capitalChart} />
      </div>
      <div>
        <Text className="text-lg center" text="수익률" />
        <PieChart chartData={revenueChart} />
      </div>
      <div>
        <Text className="text-lg center" text="라이벌의 자산" />
        <PieChart chartData={rivalChart} />
      </div>
    </div>
  );
};

export default ProfileAsset;
