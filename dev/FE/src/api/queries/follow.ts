import { getFollowing } from '@/api/follow';

// 팔로우 전체 조회
const getFollowingQuery = () => {
  return {
    queryKey: ['getFollowing'],
    queryFn: getFollowing,
  };
};

export { getFollowingQuery };
