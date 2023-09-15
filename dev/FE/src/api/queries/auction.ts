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
    queryKey: ['postAuction', auction],
    queryFn: postAuction,
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
    queryKey: ['postAuctionBid', { auctionNo, auctionPrice }],
    queryFn: postAuctionBid,
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
    queryKey: ['putAuction', { auctionNo, title, content }],
    queryFn: putAuction,
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
