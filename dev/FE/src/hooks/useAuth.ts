import { UserInfo } from '@/types/user';
import { useEffect, useState } from 'react';

const useAuth = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

  useEffect(() => {
    const data = sessionStorage.getItem('user');
    if (data) {
      setUserInfo(JSON.parse(data).data);
    }
  }, []);

  return { userInfo, setUserInfo };
};

export default useAuth;
