import { Funding, FundingProgress } from '@/types';
import { api, authApi } from '.';

// 진행 중인 펀딩 리스트 전체 조회
const getFundings = async (): Promise<Funding[]> => {
  return await api.get(`funding`).then(({ data }) => data);
};

// 전체 펀딩 진행률(원장쌤)
const getFundingProgress = async (): Promise<FundingProgress> => {
  return await authApi.get(`funding/progress`).then(({ data }) => data);
};

// 내 펀딩 확인
const getMyFundings = async (): Promise<Funding[]> => {
  return await authApi.get(`funding/myFunding`).then(({ data }) => data);
};

// 펀딩하기
const postFunding = async (money: number): Promise<string> => {
  return await authApi.post(`funding`, money);
};

export { getFundings, getFundingProgress, getMyFundings, postFunding };
