import { Button, Text } from '@/components/atoms';
import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import styles from './MainAuctionDescription.module.scss';
import { Auction } from '@/types';

interface MainAuctionDescriptionProps {
  className?: string;
  auction: Auction;
}

const MainAuctionDescription = ({
  className,
  auction,
}: MainAuctionDescriptionProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['main-auction-description'],
      )}
    >
      <Text className="text-xl" text={auction.title} />
      <Text className="text-sm" text={auction.name} />
      <Text text={auction.content} />
      <div className="flex-container">
        <Text className="text-sm" text={priceFilter(auction.auctionPrice)} />
        &nbsp;
        <Text className="text-sm" text={priceFilter(auction.instantPrice)} />
      </div>

      <Button className="primary" label="사러가기" />
    </div>
  );
};

export default MainAuctionDescription;
