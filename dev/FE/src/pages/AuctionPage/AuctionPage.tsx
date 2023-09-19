import { convertClassName, convertClassNameList, priceFilter } from '@/utils';
import styles from './AuctionPage.module.scss';
import { AuctionCard } from '@/components/molecules';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Auction } from '@/types';
import { getAuctionsQuery } from '@/api/queries/auction';
import useAuth from '@/hooks/useAuth';
import { Button } from '@/components/atoms';

interface AuctionPageProps {
  className?: string;
}

const AuctionPage = ({ className }: AuctionPageProps): JSX.Element => {
  const { data: auctions } = useQuery<Auction[], Error>(getAuctionsQuery());
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const userType = userInfo?.userType ?? 3;
  console.log(auctions);

  const handleMoveAuctionDetail = (auctionNo: number) => {
    navigate(`/auction/${auctionNo}`);
  };

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        'flex-container-col',
      )}
    >
      {userType === 0 && (
        <Button
          className={convertClassNameList(
            convertClassName(className, styles),
            'self-end m-1',
            'primary xsmall',
          )}
          label="등록하기"
          onClick={() => navigate(`/create`, { state: 'auction' })}
        />
      )}
      <div className={styles['auction-page']}>
        {auctions?.map((auction) => (
          <AuctionCard
            key={auction.auctionNo + auction.title}
            src={auction?.itemImagePath || '/vite.svg'}
            alt={auction.title}
            title={auction.title}
            currentValue={priceFilter(auction.auctionPrice)}
            buyItNow={priceFilter(auction.instantPrice)}
            onClick={() => handleMoveAuctionDetail(auction.auctionNo)}
          />
        ))}
      </div>
    </div>
  );
};

export default AuctionPage;
