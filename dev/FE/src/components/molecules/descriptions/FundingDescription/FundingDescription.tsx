import { FundingItemStatus, RankingCard } from '@/components/molecules';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingDescription.module.scss';
import { Funding, Item } from '@/types';

interface FundingDescriptionProps {
  className?: string;
  funding: Funding | Item;
  onModal: (i: Funding) => void;
}

const FundingDescription = ({
  className,
  funding,
  onModal,
}: FundingDescriptionProps): JSX.Element => {
  return (
    <div
      className={
        (convertClassNameList(convertClassName(className, styles)),
        styles['funding-description'])
      }
    >
      <RankingCard no1="노태균" no2="신기정" no3="김승우" />
      <FundingItemStatus funding={funding} onModal={onModal} />
    </div>
  );
};

export default FundingDescription;
