import { Image, Text, BarChart } from '@/components/atoms';
import styles from './FundingCard.module.scss';
import { loremData } from '@/utils';

const FundingCard = () => {
  return (
    <div className={styles['funding-card']} data-testid="funding-card">
      <Image src="" alt="aa" />
      <Text className="test-sm" text={loremData} />
      <BarChart className={styles['bar-chart']} ratio={70} />
    </div>
  );
};

export default FundingCard;
