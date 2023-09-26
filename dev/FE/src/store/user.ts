import { UserInfo } from '@/types';
import { atom } from 'recoil';

const userState = atom<UserInfo | undefined>({
  key: 'userState',
  default: undefined,
});

export { userState };
