import { Capital, TotalCapital, UserDetail } from '@/types';
import { QueryKey } from '@tanstack/react-query';
import { api, authApi } from '.';

// 아이디 중복 확인
const getUserCheckId = async ({
  queryKey: [_, userId],
}: {
  queryKey: QueryKey;
}): Promise<string> => {
  return await api.get(`user/check-id?userId=${userId}`);
};

// 예술가 작품 전체 조회
const getUserArtist = async ({
  queryKey: [_, userNo],
}: {
  queryKey: QueryKey;
}) => {
  return await authApi.get(`user/artist/${userNo}`);
};

// 개인정보 조회
const getUser = async () => {
  return await authApi.get(`user`);
};

// refresh token
const getreissue = async (refreshToken: string): Promise<string> => {
  return await api
    .get(`user/reissue`, {
      headers: {
        'X-REFRESH-TOKEN': refreshToken,
      },
    })
    .then(({ data }) => data)
    .then(({ token }) => {
      const user = sessionStorage.getItem('user');
      if (!user) throw new Error('비 로그인 상태');

      const newUser = JSON.parse(user);
      newUser.data.tokenResponse.accessToken = token;
      sessionStorage.setItem('user', JSON.stringify(newUser));
      return token;
    })
    .catch(({ error }) => {
      console.error('refresh token error : ', error);
      return Promise.reject(error);
    });
};

// 전체 아이들의 자산 현황
const getUserTotalCapital = async (): Promise<TotalCapital[]> => {
  return await authApi.get(`user/total-capital`);
};

// 특정 아이의 재무 상태표
const getUserCapital = async ({
  queryKey: [_, userNo],
}: any): Promise<Capital> => {
  return await authApi.get(`user/capital/${userNo}`).then(({ data }) => data);
};

// 회원가입
const userSignup = async (userDetail: UserDetail) => {
  return await api.post(`user/signup`, userDetail);
};

// 로그인
const userLogin = async (userDetail: UserDetail) => {
  return await api.post('user/login', userDetail);
};

export {
  getUserCheckId,
  getUserArtist,
  getUser,
  getUserTotalCapital,
  userSignup,
  userLogin,
  getreissue,
  getUserCapital,
};
