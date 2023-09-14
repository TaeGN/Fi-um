import { UserDetail } from '@/types';

const user: UserDetail = {
  id: '아이디',
  name: '이름',
  password: '비밀번호',
  phonenumber: '전화번호',
  password2: '비밀번호 확인',
};

const convertUser = (key: keyof UserDetail): string => {
  return user[key];
};

export default convertUser;
