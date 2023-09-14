import { MainAuctionDescription, Swiper } from '@/components/molecules';
import { Image } from '@/components/atoms';
import { convertClassName, convertClassNameList } from '@/utils';
import styles from './MainAuction.module.scss';

interface MainAuctionProps {
  className?: string;
}

const MainAuction = ({ className }: MainAuctionProps): JSX.Element => {
  const data = [];
  for (let i = 1; i <= 5; i++) {
    const title = `그림 ${i}`;
    const user = `예술가 ${i}`;
    const content = `내용 ${i}`;
    data.push({
      title: title,
      user: user,
      content: content,
    });
  }
  console.log(data);
  return (
    <div className={convertClassNameList(convertClassName(className, styles))}>
      <Swiper type="autoplay">
        {data.map((dt) => {
          return (
            <div className={styles['main-auction']} key={dt.title}>
              <MainAuctionDescription
                className={styles['main-auction__description']}
                data={dt}
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
