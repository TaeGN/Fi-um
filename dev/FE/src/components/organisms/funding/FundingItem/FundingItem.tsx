import { useState } from 'react';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './FundingItem.module.scss';
import { Image, Text } from '@/components/atoms';
import { FundingBar, FundingDescription } from '@/components/molecules';
import { MouseEvent } from 'react';

interface FundingItemProps {
  className?: string;
  itemNo: string;
  itemName: string;
  imagePath: string;
  itemUnitPrice: number;
  itemCount: number;
  fundingAmount: number;
  description: string;
  unitPrice: number;
  sponsorshipAmount: number;
  onModal?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FundingItem = ({
  className,
  onModal,
  ...funding
}: FundingItemProps): JSX.Element => {
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

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
            className={convertClassNameList(styles['funding-item__main'])}
            text={funding.description ?? funding.description}
          />
          {funding.itemUnitPrice ? (
            <FundingBar
              itemUnitPrice={funding.itemUnitPrice}
              fundingAmount={funding.fundingAmount}
              itemCount={funding.itemCount}
              ratio={
                funding.fundingAmount !== 0
                  ? (funding.fundingAmount / funding.itemUnitPrice) * 100
                  : 0
              }
            />
          ) : (
            <FundingBar
              itemUnitPrice={funding.unitPrice * funding.itemCount}
              fundingAmount={funding.sponsorshipAmount}
              itemCount={funding.itemCount}
              ratio={
                funding.sponsorshipAmount !== 0
                  ? (funding.sponsorshipAmount /
                      (funding.unitPrice * funding.itemCount)) *
                    100
                  : 0
              }
            />
          )}
        </div>
      </div>
      {showDescription ? (
        <FundingDescription onModal={onModal} funding={funding} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default FundingItem;
