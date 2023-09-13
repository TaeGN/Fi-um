import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json,',
    },
    withCredentials: true,
  });
  return instance;
};

const authInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
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
      console.error('response error : ', error);
      return Promise.reject(error);
    },
  );

  return instance;
};

const authApiInstance = () => {
  return authInterceptor(apiInstance());
};

export { apiInstance, authApiInstance };
