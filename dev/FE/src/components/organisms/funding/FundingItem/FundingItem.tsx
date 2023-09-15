import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingItem.module.scss';
import { FundingItemStatus } from '@/components/molecules';
import { Image } from '@/components/atoms';
import { Funding } from '@/types';

interface FundingItemProps {
  className?: string;
  funding: Funding;
}

const FundingItem = ({ className, funding }: FundingItemProps): JSX.Element => {
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
        src={funding?.imagePath || '/vite.svg'}
        alt={funding?.itemName}
      />
      <FundingItemStatus funding={funding} />
    </div>
  );
};

export default FundingItem;
