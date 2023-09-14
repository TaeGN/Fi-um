import { MainAuctionDescription, Swiper } from '@/components/molecules';
import { Image } from '@/components/atoms';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './MainAuction.module.scss';
import { Auction } from '@/types';

interface MainAuctionProps {
  className?: string;
  auctionList?: Auction[];
}

const MainAuction = ({
  className,
  auctionList,
}: MainAuctionProps): JSX.Element => {
  const data = [];
  for (let i = 1; i <= 5; i++) {
    if (auctionList) data.push(...auctionList);
  }
  console.log(data);
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <Swiper type="autoplay">
        {data.map((auction) => {
          return (
            <div className={styles['main-auction']} key={auction.title}>
              <MainAuctionDescription
                className={styles['main-auction__description']}
                auction={auction}
              />
              <div className={styles.imageWrapper}>
                <Image
                  className={styles['main-auction__image']}
                  src="/img/dummy.jpg"
                  alt="aa"
                />
              </div>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MainAuction;
