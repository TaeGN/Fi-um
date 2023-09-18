import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

const authInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const user = sessionStorage.getItem('user');
      if (!user) throw new Error('비 로그인 상태');

      const {
        data: {
          tokenResponse: { accessToken },
        },
      } = JSON.parse(user);

      console.log('accessToken : ', accessToken);

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
      if (error.response && error.response.status === 400) {
        // refresh token 관련 코드
      }
      console.error('response error : ', error);
      return Promise.reject(error);
    },
  );

  return instance;
};

const authApiInstance = () => {
  return authInterceptor(apiInstance());
};

const api = apiInstance();
const authApi = authApiInstance();

export { apiInstance, authApiInstance, api, authApi };
