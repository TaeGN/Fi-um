import { Button, Text } from '@/components/atoms';
import {
  convertClassName,
  convertClassNameList,
  formatCurrency,
} from '@/utils';
import styles from './AuctionDescription.module.scss';

interface AuctionDescriptionProps {
  className?: string;
  title: string;
  auctionPrice: string;
  instantPrice: string;
  auctionClick: () => void;
  buyItClick: () => void;
}

const AuctionDescription = ({
  className,
  title,
  auctionPrice,
  instantPrice,
  auctionClick,
  buyItClick,
}: AuctionDescriptionProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['auction-description'],
      )}
    >
      <Text className="text-xl" text={title} />
      <div>
        <Text className="text-lg" text="현재가" /> :
        <Text className="blue" text={formatCurrency(auctionPrice)} />
      </div>
      <div>
        <Text className="text-lg" text="즉시구매가" /> :
        <Text className="blue" text={formatCurrency(instantPrice)} />
      </div>
      <div>
        <Text className="text-lg" text="남은 시간" /> :
        <Text className="blue" text="123456" />
      </div>
      <div>
        <Button className="primary" label="경매하기" onClick={auctionClick} />
        <Button className="primary" label="즉시구매" onClick={buyItClick} />
      </div>
    </div>
  );
};

export default AuctionDescription;
