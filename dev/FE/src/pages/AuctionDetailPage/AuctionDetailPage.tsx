import { convertClassName, convertClassNameList, loremData } from '@/utils';
import styles from './AuctionDetailPage.module.scss';
import { CreaterProfile } from '@/components/organisms';
import { Image } from '@/components/atoms';

interface AuctionDetailPageProps {
  className?: string;
}

const AuctionDetailPage = ({
  className,
}: AuctionDetailPageProps): JSX.Element => {
  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['auction-detail-page'],
      )}
    >
      <Image
        src="/vite.svg"
        alt="image"
        className={convertClassNameList(styles['auction-detail-page__image'])}
      />
      <div
        className={convertClassNameList(styles['auction-detail-page__card'])}
      >
        card
      </div>
      <div
        className={convertClassNameList(
          styles['auction-detail-page__description'],
        )}
      >
        {loremData}
      </div>
      <CreaterProfile
        className={convertClassNameList(styles['auction-detail-page__profile'])}
      />
    </div>
  );
};

export default AuctionDetailPage;
