import './AuctionDetailpage.module.scss';
import { AuctionDetailMain } from '@/components/organisms';

const AuctionDetailPage = () => {
  return (
    <>
      <div>AuctionDetailPage</div>
      <div>
        <AuctionDetailMain
          src=""
          alt=""
          title="확인용"
          auctionClick={() => {
            console.log('경매하기');
          }}
          buyItClick={() => {
            console.log('즉시구매');
          }}
          auctionPrice="124123412"
          instantPrice="235213341"
        />
      </div>
    </>
  );
};

export default AuctionDetailPage;
