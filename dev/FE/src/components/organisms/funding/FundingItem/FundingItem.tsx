import { convertClassName, convertClassNameList, loremData } from '@/utils';
import styles from './FundingItem.module.scss';
import { Image, Text } from '@/components/atoms';
import { Funding } from '@/types';
import { FundingBar } from '@/components/molecules';

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
        'container',
      )}
    >
      <Image
        className={convertClassNameList(styles['funding-item__image'])}
        src={funding?.imagePath || '/vite.svg'}
        alt={funding?.itemName}
      />
      <div className={convertClassNameList(styles['funding-item__main'])}>
        <Text
          className={convertClassNameList(
            styles['funding-item__main'],
            'text-xl',
          )}
          text={funding.itemName}
        />
        <Text
          className={convertClassNameList(
            styles['funding-item__main'],
            'text-xl',
          )}
          text={loremData}
        />
        <FundingBar ratio={80} />
      </div>
    </div>
  );
};

export default FundingItem;
