import { Image, Text, BarChart } from '@/components/atoms';
import styles from './FundingCard.module.css';

const FundingCard = () => {
  return (
    <div className={styles['funding-card']} data-testid="funding-card">
      <Image src="aa" alt="aa" />
      <Text className="test-sm" text="fundingCard" />
      <BarChart className={styles['bar-chart']} ratio={50} />
    </div>
  );
};

export default FundingCard;
