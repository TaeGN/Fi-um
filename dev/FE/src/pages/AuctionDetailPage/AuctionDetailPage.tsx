import { convertClassName, convertClassNameList } from '@/utils';
import styles from './AuctionDetailPage.module.scss';
import { AuctionDetailMain, CreaterProfile } from '@/components/organisms';
import { AuctionDetailDescription } from '@/components/molecules';
import { useLocation } from 'react-router-dom';

interface AuctionDetailPageProps {
  className?: string;
}

const AuctionDetailPage = ({
  className,
}: AuctionDetailPageProps): JSX.Element => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['auction-detail-page'],
      )}
    >
      <AuctionDetailMain
        className={convertClassNameList(styles['auction-detail-page__main'])}
        title={state.title}
        src={state.itemImagePath}
        alt={state.title}
        imageClassName=""
        descriptionClassName={state.content}
        auctionClick={() => {
          console.log('개쩔어');
        }}
        buyItClick={() => {
          console.log('와우 개쩔어');
        }}
        auctionPrice={state.auctionPrice}
        instantPrice={state.instantPrice}
      />
      <AuctionDetailDescription
        className={convertClassNameList(
          styles['auction-detail-page__description'],
        )}
        description={state.content}
      />
      <CreaterProfile
        className={convertClassNameList(styles['auction-detail-page__profile'])}
      />
    </div>
  );
};

export default AuctionDetailPage;
