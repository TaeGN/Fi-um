import { Auction } from '@/types';
import { api, authApi } from '.';

// 경매 물품 전체 조회
const getAuctions = async (): Promise<Auction[]> => {
  return await api.get('auction').then(({ data }) => data);
};

// 경매 물품 상세 조회
const getAuctionDetailByAuctionNo = async ({
  queryKey: [_, auctionNo],
}: {
  queryKey: [string, string];
}): Promise<Auction> => {
  return await api.get(`user/auction/${auctionNo}`).then(({ data }) => data);
};

// 경매 물품 등록
const postAuction = async ({
  queryKey: [_, auction],
}: {
  queryKey: [string, Auction];
}): Promise<string> => {
  return await authApi.post(`auction`, auction);
};

export { getAuctions, getAuctionDetailByAuctionNo, postAuction };
