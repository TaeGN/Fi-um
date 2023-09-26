import { getUserInfo } from '@/api/user';
import { userState } from '@/store';
import { UserInfo } from '@/types';
import { getAccessToken } from '@/utils';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';

let isRefresh = false;

const useAuth = () => {
  const [userInfo, setUserInfo] = useRecoilState<UserInfo | undefined>(
    userState,
  );
  const refreshUserInfo = useCallback(async () => {
    const newUserInfo = await getUserInfo();
    setUserInfo(newUserInfo);
  }, []);

  useEffect(() => {
    if (!userInfo && getAccessToken() && !isRefresh) {
      isRefresh = true;
      refreshUserInfo().then(() => {
        isRefresh = false;
      });
    }
  }, []);

  return { userInfo, setUserInfo, refreshUserInfo };
};

export default useAuth;
