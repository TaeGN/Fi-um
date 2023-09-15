import { MainAuctionDescription, Swiper } from '@/components/molecules';
import { Image } from '@/components/atoms';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './MainAuction.module.scss';
import { Auction } from '@/types';

interface MainAuctionProps {
  className?: string;
  auctions?: Auction[];
}

const MainAuction = ({
  className,
  auctions,
}: MainAuctionProps): JSX.Element => {
  // 나중에 지울 부분
  const data = [];
  for (let i = 1; i <= 5; i++) {
    if (auctions) data.push(...auctions);
  }
  console.log(data);
  // 지울 부분 끝
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <Swiper type="autoplay">
        {data.map((auction) => {
          return (
            <div
              className={styles['main-auction']}
              key={auction.auctionNo + auction.title}
            >
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
