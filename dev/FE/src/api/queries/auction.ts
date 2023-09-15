import {
  getAuctions,
  getAuctionDetailByAuctionNo,
  postAuction,
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

const postAuctionQuery = (auction: Auction) => {
  return {
    queryKey: ['postAuction', auction],
    queryFn: postAuction,
  };
};

export { getAuctionsQuery, getAuctionDetailByAuctionNoQuery, postAuctionQuery };
