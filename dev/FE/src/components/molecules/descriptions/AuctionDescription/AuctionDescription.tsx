import { Button, Text } from '@/components/atoms';
import styles from './AuctionDescription.module.scss';

const AuctionDescription = () => {
  return (
    <div className={styles['auction-description']}>
      <div>
        <Text className="text-lg" text="현재가" /> :
        <Text className="blue" text="123456" />
      </div>

      <div>
        <Text className="text-lg" text="즉시구매가" /> :
        <Text className="blue" text="123456" />
      </div>

      <div>
        <Text className="text-lg" text="남은 시간" /> :
        <Text className="blue" text="123456" />
      </div>

      <div>
        <Button className="primary" label="경매하기" />
        <Button className="primary" label="즉시구매" />
      </div>
    </div>
  );
};

export default AuctionDescription;
