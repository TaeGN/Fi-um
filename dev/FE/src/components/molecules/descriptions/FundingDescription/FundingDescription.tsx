import { FundingItemStatus, RankingCard } from '../..';
import styles from './FundingDescription.module.scss';

const FundingDescription = () => {
  return (
    <div className="flex-container jc-space-between">
      <RankingCard />
      <FundingItemStatus />
    </div>
  );
};

export default FundingDescription;
