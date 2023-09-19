import { Text } from '@/components/atoms';
import { loremData } from '@/utils';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './AuctionDetailDescription.module.scss';

interface AuctionDetailDescriptionProps {
  className?: string;
}

const AuctionDetailDescription = ({
  className,
}: AuctionDetailDescriptionProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['auction-detail-description'],
      )}
    >
      <Text className="text-lg" text="작품 소개" />
      <Text text={loremData} />
    </div>
  );
};

export default AuctionDetailDescription;
