import { apiInstance, authApiInstance } from '.';

const api = apiInstance();
const authApi = authApiInstance();

const getCheckId = async (userId: string) => {
  return await api.get(`user/check-id?${userId}`);
};

const getArtist = async (userNo: string) => {
  return await authApi.get(`user/artist/${userNo}`);
};

const getTotalCapital = async () => {
  return await authApi.get(`user/total-capital`);
};

export { getCheckId, getArtist, getTotalCapital };
