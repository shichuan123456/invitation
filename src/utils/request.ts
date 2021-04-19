import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';
import store from '@/store';

import { getToken } from '@/utils/auth';
import { Message } from 'element-ui';

const service: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_SERVER_BASE_URL,
  timeout: 50 * 1000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (store.getters['register/token']) {
      config.headers['X-Token'] = getToken();
    }
    return config;
  },
  (error: AxiosError) => {
    console.error(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (response.status !== 200) {
      Message({
        message: res.message || 'error',
        type: 'error',
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(res.message || 'error'));
    } else {
      return res;
    }
  },
  (error) => {
    let message = 'request error';
    if (error?.response?.status === 400) {
      message = error.response.data?.errorMessage;
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000,
      });
    }
    return Promise.reject(message);
  }
);

export default service;
