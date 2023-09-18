import { useState } from 'react';
import { convertClassName, convertClassNameList, loremData } from '@/utils';
import styles from './FundingItem.module.scss';
import { Image, Text } from '@/components/atoms';
import { Funding } from '@/types';
import { FundingBar, FundingDescription } from '@/components/molecules';

interface FundingItemProps {
  className?: string;
  funding: Funding;
}

const FundingItem = ({ className, funding }: FundingItemProps): JSX.Element => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  console.log(funding);

  return (
    <div>
      <div
        className={convertClassNameList(
          convertClassName(className, styles),
          styles['funding-item'],
          'flex-container',
          'container',
        )}
        onClick={toggleDescription}
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
              'text-lg',
            )}
            text={loremData}
          />
          <FundingBar
            itemUnitPrice={funding.itemUnitPrice}
            fundingAmount={funding.fundingAmount}
            ratio={
              funding.fundingAmount !== 0
                ? (funding.fundingAmount / funding.itemUnitPrice) * 100
                : 0
            }
          />
        </div>
      </div>
      {showDescription ? <FundingDescription funding={funding} /> : <></>}
    </div>
  );
};

export default FundingItem;
