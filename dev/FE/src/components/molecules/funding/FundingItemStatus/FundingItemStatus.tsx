import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import styles from './FundingItemStatus.module.scss';
import { Button, Text } from '@/components/atoms';
import { Funding } from '@/types';

interface FundingItemStatusProps {
  className?: string;
  funding: Funding;
  onModal: (i: Funding) => void;
}

const FundingItemStatus = ({
  className,
  funding,
  onModal,
}: FundingItemStatusProps): JSX.Element => {
  const handleModal = () => {
    onModal(funding);
  };
  console.log(funding);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['funding-item-status'],
      )}
    >
      <Text
        className="text-lg"
        text={`${funding.itemName} (${priceFilter(
          funding.itemUnitPrice
            ? funding.itemUnitPrice * 0.3
            : funding.unitPrice,
        )} ${funding.itemCount}개)`}
      />
      <Text text={funding.description} />
      <Text
        className={convertClassNameList(
          'blue bold text-xl',
          styles['funding-item-status__price'],
        )}
        text={priceFilter(
          funding.itemUnitPrice
            ? funding.itemUnitPrice * funding.itemCount * 0.3
            : funding.unitPrice * funding.itemCount,
        )}
      />
      <div className="flex-container jc-space-between flex-wrap">
        <Text
          className={convertClassNameList(
            'blue bold text-xl',
            styles['funding-item-status__price'],
          )}
          text={priceFilter(funding.fundingAmount ?? funding.sponsorshipAmount)}
        />
        <Button
          onClick={handleModal}
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
