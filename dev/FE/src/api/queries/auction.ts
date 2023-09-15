import {
  getAuctions,
  getAuctionDetailByAuctionNo,
  getAuctionPurchase,
  postAuction,
  postAuctionBid,
  putAuction,
} from '@/api/auction';
import { Auction } from '@/types';

const getAuctionsQuery = () => {
  return {
    queryKey: ['getAuctions'],
    queryFn: getAuctions,
  };
};

const getAuctionDetailByAuctionNoQuery = (auctionNo: string) => {
  return {
    queryKey: ['getAuctionDetailByAuctionNo', auctionNo],
    queryFn: getAuctionDetailByAuctionNo,
  };
};

const getAuctionPurchaseQuery = () => {
  return {
    queryKey: ['getAuctionPurchase'],
    queryFn: getAuctionPurchase,
  };
};

const postAuctionQuery = (auction: Auction) => {
  return {
    mutationFn: () => postAuction(auction),
  };
};

// 경매 입찰 / 즉시구매
const postAuctionBidQuery = ({
  auctionNo,
  auctionPrice,
}: {
  auctionNo: string;
  auctionPrice: string;
}) => {
  return {
    mutationFn: () =>
      postAuctionBid({
        auctionNo,
        auctionPrice,
      }),
  };
};

// 경매 물품 내용 수정
const putAuctionQuery = ({
  auctionNo,
  title,
  content,
}: {
  auctionNo: string;
  title: string;
  content: string;
}) => {
  return {
    mutationFn: () =>
      putAuction({
        auctionNo,
        title,
        content,
      }),
  };
};

export {
  getAuctionsQuery,
  getAuctionDetailByAuctionNoQuery,
  getAuctionPurchaseQuery,
  postAuctionQuery,
  postAuctionBidQuery,
  putAuctionQuery,
};
