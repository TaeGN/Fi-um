import axios, { AxiosInstance } from 'axios';
import { getreissue } from './user';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
let isRefresh = false;

const apiInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json,',
    },
  });
  return instance;
};

const formApiInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data;charset=UTF-8',
      Accept: 'application/json,',
    },
  });
  return instance;
};

const authInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const user = sessionStorage.getItem('user');
      if (!user) {
        alert('로그인이 필요합니다.!!');
        window.location.href = '/login';
        return Promise.reject(new Error('비 로그인'));
      }

      const {
        data: {
          tokenResponse: { accessToken },
        },
      } = JSON.parse(user);

      config.headers['X-ACCESS-TOKEN'] = accessToken;
      return config;
    },
    (error) => {
      console.error('request error : ', error);
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          // 토큰 만료
          case 400:
          // 권한 없음
          case 401:
            const user = sessionStorage.getItem('user');
            if (!user) {
              alert('로그인이 필요합니다.!!');
              window.location.href = '/login';
              return Promise.reject(error);
            }

            const {
              data: {
                tokenResponse: { refreshToken },
              },
            } = JSON.parse(user);

            // access token 재 발급
            if (!isRefresh) {
              // refresh 요청 한 번만
              isRefresh = true;
              getreissue(refreshToken).finally(() => (isRefresh = false));
            }
            break;
        }

        console.error('response error : ', error);
        return Promise.reject(error);
      }
    },
  );

  return instance;
};

const authApiInstance = () => {
  return authInterceptor(apiInstance());
};

const authFormApiInstance = () => {
  return authInterceptor(formApiInstance());
};

const api = apiInstance();
const authApi = authApiInstance();
const formApi = formApiInstance();
const authFormApi = authFormApiInstance();

export { api, authApi, formApi, authFormApi };
