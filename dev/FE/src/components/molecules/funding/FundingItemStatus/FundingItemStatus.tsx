import {
  convertClassName,
  convertClassNameList,
  loremData,
  priceFilter,
} from '@/utils';
import styles from './FundingItemStatus.module.scss';
import { Button, Text } from '@/components/atoms';
import { Funding } from '@/types';
import { MouseEvent } from 'react';

interface FundingItemStatusProps {
  className?: string;
  funding: Funding;
  onModal?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FundingItemStatus = ({
  className,
  funding,
  onModal,
}: FundingItemStatusProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['funding-item-status'],
      )}
    >
      <Text className="text-lg" text={funding.itemName} />
      <Text text={loremData} />
      <Text
        className={convertClassNameList(
          'blue bold text-xl',
          styles['funding-item-status__price'],
        )}
        text={priceFilter(funding.itemUnitPrice)}
      />
      <div className="flex-container jc-space-between flex-wrap">
        <Text
          className={convertClassNameList(
            'blue bold text-xl',
            styles['funding-item-status__price'],
          )}
          text={priceFilter(funding.fundingAmount)}
        />
        <Button
          onClick={onModal}
          label="펀딩하기"
          className={convertClassNameList(
            'bg-blue white',
            'xsmall',
            'primary',
            styles['funding-item-status__button'],
          )}
        />
      </div>
    </div>
  );
};

export default FundingItemStatus;
