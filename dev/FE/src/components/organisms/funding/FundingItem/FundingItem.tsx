import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingItem.module.scss';
import { FundingItemStatus } from '@/components/molecules';
import { Image } from '@/components/atoms';

interface FundingItemProps {
  className?: string;
}

const FundingItem = ({ className }: FundingItemProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['funding-item'],
        'flex-container',
      )}
    >
      <Image
        className={convertClassNameList(styles['funding-item__image'])}
        src=""
        alt="a"
      />
      <FundingItemStatus />
    </div>
  );
};

export default FundingItem;
