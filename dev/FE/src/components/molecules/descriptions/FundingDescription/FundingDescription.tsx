import { FundingItemStatus, RankingCard } from '@/components/molecules';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingDescription.module.scss';

interface FundingDescriptionProps {
  className?: string;
}

const FundingDescription = ({
  className,
}: FundingDescriptionProps): JSX.Element => {
  return (
    <div
      className={
        (convertClassNameList(convertClassName(className, styles)),
        styles['funding-description'])
      }
    >
      <RankingCard />
      <FundingItemStatus />
    </div>
  );
};

export default FundingDescription;
