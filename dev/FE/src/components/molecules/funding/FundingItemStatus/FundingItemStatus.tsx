import { convertClassName, convertClassNameList, loremData } from '@/utils';
import styles from './FundingItemStatus.module.scss';
import { Button, Text } from '@/components/atoms';

interface FundingItemStatusProps {
  className?: string;
}

const FundingItemStatus = ({
  className,
}: FundingItemStatusProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['funding-item-status'],
      )}
    >
      <Text className="text-md" text={loremData} />
      <Text
        className={convertClassNameList(
          'text-lg',
          styles['funding-item-status__price'],
        )}
        text="title1211111111111111111111111"
      />
      <div className="flex-container jc-space-between flex-wrap">
        <Text
          className={convertClassNameList(
            'text-lg',
            styles['funding-item-status__price'],
          )}
          text="title1211111111111111111111111"
        />
        <Button
          label="펀딩하기"
          className={convertClassNameList(
            'bg-blue white',
            styles['funding-item-status__button'],
          )}
        />
      </div>
    </div>
  );
};

export default FundingItemStatus;
