import { apiInstance, authApiInstance } from '.';

const api = apiInstance();
const authApi = authApiInstance();

const getCheckId = async (userId: string) => {
  return await api.get(`user/check-id?${userId}`);
};

const getTotalCapital = async () => {
  return await authApi.get(`user/total-capital`);
};

const getTotalCapitalQuery = {
  queryKey: ['getTotalCapital'],
  queryFn: getTotalCapital,
};

const getArtist = async ({ queryKey: [_, userNo] }: any) => {
  return await authApi.get(`user/artist/${userNo}`);
};

const getArtistQuery = (userNo: string) => {
  return {
    queryKey: ['getArtist', userNo],
    queryFn: getArtist,
  };
};

export {
  getCheckId,
  getArtist,
  getTotalCapital,
  getTotalCapitalQuery,
  getArtistQuery,
};
