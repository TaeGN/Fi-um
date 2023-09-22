import { convertClassName, convertClassNameList } from '@/utils';
import styles from './AuctionDetailPage.module.scss';
import { AuctionDetailMain, CreaterProfile } from '@/components/organisms';
import { AuctionDetailDescription, Modal } from '@/components/molecules';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postAuctionBid } from '@/api/auction';
import { Auction } from '@/types';
import { getAuctionDetailByAuctionNoQuery } from '@/api/queries';
import useModal from '@/hooks/useModal';
import { Button } from '@/components/atoms';
import { useEffect, useState } from 'react';

interface AuctionDetailPageProps {
  className?: string;
}

const AuctionDetailPage = ({
  className,
}: AuctionDetailPageProps): JSX.Element => {
  const [auctionPrice, setAuctionPrice] = useState<number>(0);
  const { auctionNo = '' } = useParams();
  const { data: auction, status: isAuctionLoading } = useQuery<Auction>(
    getAuctionDetailByAuctionNoQuery(auctionNo),
  );

  useEffect(() => {
    if (isAuctionLoading === 'success') {
      setAuctionPrice(auction.auctionPrice);
    }
  }, [auction]);

  const handleBlur = () => {
    if (auction && auctionPrice < auction.auctionPrice) {
      alert('입력하신 경매 금액이 현재 경매 금액보다 작습니다.');
      setAuctionPrice(auction.auctionPrice);
    }
  };

  const postAuctionBidMutation = useMutation(
    ({
      auctionNo,
      auctionPrice,
    }: {
      auctionNo: number;
      auctionPrice: number;
    }) => postAuctionBid({ auctionNo, auctionPrice }),
    {
      onSuccess(data) {
        console.log(data);

        alert(data);
        closeToggle();
      },
      onError(error) {
        alert(`구매 실패.. \n ${error}`);
      },
    },
  );
  const { isOpen, closeToggle, openToggle } = useModal();

  return (
    <div
      className={convertClassNameList(
        convertClassName(className, styles),
        styles['auction-detail-page'],
      )}
    >
      {auction && (
        <AuctionDetailMain
          className={convertClassNameList(styles['auction-detail-page__main'])}
          title={auction.title}
          src={auction.itemImagePath}
          alt={auction.title}
          imageClassName=""
          descriptionClassName={auction.content}
          auctionClick={() => {
            // if (window.confirm('경매 하시겠습니까?'))
            //   postAuctionBidMutation.mutate({
            //     auctionNo: auction.auctionNo,
            //     auctionPrice: auction.auctionPrice + 100,
            //   });
            openToggle();
          }}
          buyItClick={() => {
            if (window.confirm('즉시구매 하시겠습니까?'))
              postAuctionBidMutation.mutate({
                auctionNo: auction.auctionNo,
                auctionPrice: auction.instantPrice,
              });
          }}
          auctionPrice={auction.auctionPrice}
          instantPrice={auction.instantPrice}
        />
      )}
      <AuctionDetailDescription
        className={convertClassNameList(
          styles['auction-detail-page__description'],
        )}
        description={auction?.content}
      />
      <CreaterProfile
        className={convertClassNameList(styles['auction-detail-page__profile'])}
      />
      {auction && (
        <Modal isOpen={isOpen} toggle={closeToggle}>
          <>
            <input
              type="number"
              value={auctionPrice}
              onChange={(e) => {
                setAuctionPrice(Number(e.target.value));
              }}
              onBlur={handleBlur}
            />
            <Button
              label="경매하기"
              onClick={() => {
                postAuctionBidMutation.mutate({
                  auctionNo: auction.auctionNo,
                  auctionPrice: auctionPrice,
                });
              }}
            />
          </>
        </Modal>
      )}
    </div>
  );
};

export default AuctionDetailPage;
