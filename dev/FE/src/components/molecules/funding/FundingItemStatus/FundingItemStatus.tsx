import { convertClassName, convertClassNameList } from '@/utils';
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
      <Text className="text-lg" text="title" />
      <Text className="text-md" text="content" />
      <Button
        label="펀딩하기"
        className={convertClassNameList(
          'bg-blue white',
          styles['funding-item-status__button'],
        )}
      />
    </div>
  );
};

export default FundingItemStatus;
