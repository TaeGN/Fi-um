import { convertClassName, convertClassNameList } from '@/utils';
import styles from './ProfileAsset.module.scss';
import { PieChart, Text } from '@/components/atoms';
import { useQuery } from '@tanstack/react-query';
import { MyStock } from '@/types';
import { getMyStocksQuery } from '@/api/queries/stock';

interface ProfileAssetProps {
  className?: string;
}

const ProfileAsset = ({ className }: ProfileAssetProps): JSX.Element => {
  const { data: myStocks } = useQuery<MyStock[], Error>(getMyStocksQuery());
  console.log(myStocks);

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
        <PieChart />
      </div>
      <div>
        <Text className="text-lg center" text="수익률" />
        <PieChart />
      </div>
      <div>
        <Text className="text-lg center" text="라이벌의 자산" />
        <PieChart />
      </div>
    </div>
  );
};

export default ProfileAsset;
