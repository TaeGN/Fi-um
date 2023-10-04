import { followingState } from '@/store';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import { getFollowingQuery } from '@/api/queries';
import { USER_TYPE } from '@/constants';

const useFollowing = () => {
  const [following, setFollowing] = useRecoilState(followingState);
  const { userInfo } = useAuth();
  const { data: newFollowing, refetch: refreshFollowing } = useQuery(
    getFollowingQuery(),
  );

  useEffect(() => {
    if (
      !userInfo ||
      userInfo.userType !== USER_TYPE.후원자 ||
      !newFollowing ||
      following === newFollowing
    )
      return;
    setFollowing(newFollowing);
  }, [userInfo, newFollowing]);

  return { following, setFollowing, refreshFollowing };
};

export { useFollowing };
