import { AxiosRequestConfig } from "./../node_modules/axios/index.d";
import axios from "axios";
import { getAuthTokens, setAuthTokens } from "./utils/token";
import { refreshTokens } from "./services/auth.service";
import { IAuthTokens } from "./types/authTokens.type";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    //logout if 403
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      const tokens: IAuthTokens = await refreshTokens(
        getAuthTokens().refreshToken as string
      );
      originalRequest.headers["authorization"] = `Bearer ${tokens.authToken}`;
      setAuthTokens(tokens.authToken, tokens.refreshToken);
      return axiosInstance(originalRequest);
    }
  }
);

const getConfigWithTokens = (config?: AxiosRequestConfig) => {
  const headers = config?.headers || {};
  headers["authorization"] = `Bearer ${getAuthTokens().authToken}`;
  return config != null
    ? { ...config, headers: headers }
    : { headers: headers };
};

export const http = {
  get: async (url: string, config?: AxiosRequestConfig) => {
    return await axiosInstance.get(url, config);
  },
  post: async (url: string, data?: any, config?: AxiosRequestConfig) => {
    return await axiosInstance.post(url, data, config);
  },
  withToken: {
    get: async (url: string, config?: AxiosRequestConfig) => {
      return await axiosInstance.get(url, getConfigWithTokens(config));
    },
    post: async (url: string, data?: any, config?: AxiosRequestConfig) => {
      return await axiosInstance.post(url, data, getConfigWithTokens(config));
    },
  },
};
