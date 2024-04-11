import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export type ApiHandler = AxiosInstance;

export type RequestInterceptorFunction = (
  req: InternalAxiosRequestConfig
) => Promise<InternalAxiosRequestConfig>;

export type ResponseInterceptorFunction = (
  req: AxiosResponse
) => Promise<AxiosResponse>;

export type ResponseInterceptorErrorFunction = (
  err: AxiosResponse
) => Promise<AxiosResponse>;

//--------> Methods
export type ApiGetMethod = <T = any>(
  endpoint: string,
  config?: AxiosRequestConfig<any>
) => Promise<AxiosResponse<T, any>>;

export type ApiPostMethod = <T = any>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig<any>
) => Promise<AxiosResponse<T, any>>;

export type ApiPutMethod = <T = any>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig<any>
) => Promise<AxiosResponse<T, any>>;

export type ApiDeleteMethod = <T = any>(
  endpoint: string,
  config?: AxiosRequestConfig<any>
) => Promise<AxiosResponse<T, any>>;

export type ApiPatchMethod = <T = any>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig<any>
) => Promise<AxiosResponse<T, any>>;

//   ====================

export interface IApiMethods {
  get: ApiGetMethod;
  post: ApiPostMethod;
  put: ApiPutMethod;
  delete: ApiDeleteMethod;
  patch: ApiPatchMethod;
  anonGet: ApiGetMethod;
  anonPost: ApiPostMethod;
  anonPut: ApiPutMethod;
  anonDelete: ApiDeleteMethod;
  anonPatch: ApiPatchMethod;
}

export interface IApiServiceParams {
  baseUrl: string;
  requestInterceptor?: RequestInterceptorFunction;
  responseInterceptor?: ResponseInterceptorFunction;
  responseErrorInterceptor?: ResponseInterceptorErrorFunction;
  authToken?: string;
}

export interface IApiService extends IApiServiceParams, IApiMethods {
  getAuthToken: () => string;
  setAuthToken: (authToken: string) => void;
  clearAuthToken: () => void;
}

export type ApiResponse<T> = {
  code: number;
  message: string;
  data: T;
};
