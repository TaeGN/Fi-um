import { ChildProfile } from '@/types';
import { authApi } from '.';

// 팔로우 전체 조회
const getFollowing = async (): Promise<ChildProfile[]> => {
  return await authApi.get(`following`).then(({ data }) => data);
};

export { getFollowing };
