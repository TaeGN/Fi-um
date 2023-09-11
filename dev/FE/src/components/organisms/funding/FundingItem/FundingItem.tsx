import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingItem.module.scss';
import { FundingItemStatus } from '@/components/molecules';

interface FundingItemProps {
  className?: string;
}

const FundingItem = ({ className }: FundingItemProps): JSX.Element => {
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <FundingItemStatus />
    </div>
  );
};

export default FundingItem;
