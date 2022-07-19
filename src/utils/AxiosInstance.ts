import axios, { AxiosRequestConfig } from "axios";

import { API_KEY } from "../data/Constants";

export const defaultAxiosConfig: AxiosRequestConfig = {
  timeout: 10000,
  params: {},
};

const AxiosInstance = axios.create(defaultAxiosConfig);

export const onFullfilled = async (config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    "x-api-key": API_KEY,
  };
  return config;
};

export const onRejected = async (error: any) => {
  return Promise.reject(error);
};

AxiosInstance.interceptors.request.use(onFullfilled, onRejected);

export default AxiosInstance;
