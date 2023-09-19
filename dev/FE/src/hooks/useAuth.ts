import { UserInfo } from '@/types/user';
import { useCallback, useEffect, useState } from 'react';

const useAuth = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);
  const resetUserInfo = useCallback(() => {
    const data = sessionStorage.getItem('user');
    setUserInfo(data ? JSON.parse(data).data : '');
  }, []);

  useEffect(() => {
    resetUserInfo();
  }, [sessionStorage.getItem('user')]);

  return { userInfo, setUserInfo, resetUserInfo };
};

export default useAuth;
