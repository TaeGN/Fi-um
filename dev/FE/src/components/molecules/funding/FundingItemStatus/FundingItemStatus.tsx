import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import styles from './FundingItemStatus.module.scss';
import { Button, Text } from '@/components/atoms';
import { Funding } from '@/types';
import useAuth from '@/hooks/useAuth';
import { USER_TYPE } from '@/constants';

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
  const { userInfo } = useAuth();
  const userType = userInfo?.userType;

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
        text={`목표 금액 : ${priceFilter(
          funding.itemUnitPrice
            ? funding.itemUnitPrice * funding.itemCount * 0.3
            : funding.unitPrice * funding.itemCount,
        )}`}
      />
      <div className="flex-container jc-space-between flex-wrap">
        <Text
          className={convertClassNameList(
            'blue bold text-xl',
            styles['funding-item-status__price'],
          )}
          text={`현재 금액 : ${priceFilter(
            userType === USER_TYPE.후원자
              ? funding.sponsorshipAmount
              : funding.fundingAmount,
          )}`}
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
