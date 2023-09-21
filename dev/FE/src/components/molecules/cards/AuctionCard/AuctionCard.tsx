import { Button, Image, Text } from '@/components/atoms';
import styles from './AuctionCard.module.scss';
import { convertClassName, priceFilter } from '@/utils';

interface AuctionCardProps {
  className?: string;
  onClick?: () => void;
  itemImagePath: string;
  title: string;
  auctionPrice?: number;
  instantPrice?: number;
  content?: string;
  review?: boolean;
}

const AuctionCard = ({
  className,
  onClick,
  itemImagePath,
  title,
  auctionPrice,
  instantPrice,
  content,
  review,
}: AuctionCardProps) => {
  return (
    <div
      className={`${styles.auctionCard} ${convertClassName(className, styles)}`}
    >
      <div className={styles.image}>
        <Image src={itemImagePath} alt={title} />
      </div>
      <div className={styles.title}>
        <Text text={title} className="text-lg" />
      </div>
      <div className={styles.content}>
        {auctionPrice && (
          <Text text={`현재가 : ${priceFilter(auctionPrice)}`} />
        )}
        {instantPrice && (
          <Text text={`즉시구매가 : ${priceFilter(instantPrice)}`} />
        )}
        {content && <Text text={content} />}
      </div>

      <div className={styles.button}>
        <Button
          label={review ? '자세히 보기' : '경매하러가기'}
          className="primary xsmall"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default AuctionCard;
