import axios, { AxiosRequestConfig } from "axios";
import lodashSet from "lodash/set";
import lodashGet from "lodash/get";

import { LOCAL_STORE_AUTH_DATA_KEY } from "@/config/api";
import { APP_NAME } from "@/config/app";

import {
  ApiHandler,
  RequestInterceptorFunction,
  ResponseInterceptorErrorFunction,
  ResponseInterceptorFunction,
  IApiService,
  IApiServiceParams,
} from "./Api.types";

export class ApiService implements IApiService {
  private _serviceName = `@${APP_NAME}:API`;
  private _apiHandler: ApiHandler = null as unknown as ApiHandler;
  private _authToken: string = "";
  private _useLocalStorage = false;

  baseUrl: string = "";
  requestInterceptor: RequestInterceptorFunction =
    null as unknown as RequestInterceptorFunction;
  responseInterceptor: ResponseInterceptorFunction =
    null as unknown as ResponseInterceptorFunction;
  responseErrorInterceptor: ResponseInterceptorErrorFunction =
    null as unknown as ResponseInterceptorErrorFunction;

  constructor(params: IApiServiceParams) {
    this._apiHandler = this.createInstance(params) as ApiHandler;
  }

  //--------> UTIL Methods
  getAuthToken = () => {
    if (this._useLocalStorage && typeof localStorage !== "undefined") {
      try {
        const authData = JSON.parse(
          localStorage.getItem(LOCAL_STORE_AUTH_DATA_KEY) || "{}"
        );
        const authToken = lodashGet(authData, "token");
        this._authToken = authToken;
      } catch {}
    }

    return this._authToken ? `Bearer ${this._authToken}` : "";
  };

  setAuthToken = (authToken: string) => {
    this._authToken = authToken;

    if (this._useLocalStorage && typeof localStorage !== "undefined") {
      localStorage.setItem(
        LOCAL_STORE_AUTH_DATA_KEY,
        JSON.stringify({ token: authToken })
      );
    }
  };

  clearAuthToken = () => {
    this._authToken = "";
  };

  //--------> main Methods
  private createInstance = (params: IApiServiceParams = { baseUrl: "" }) => {
    const {
      baseUrl,
      requestInterceptor,
      responseInterceptor,
      responseErrorInterceptor,
      authToken,
    } = params;

    if (!baseUrl) return null;

    this.baseUrl = baseUrl;
    const axiosInstance = axios.create({ baseURL: baseUrl });

    if (requestInterceptor) this.requestInterceptor = requestInterceptor;
    if (responseInterceptor) this.responseInterceptor = responseInterceptor;
    if (responseErrorInterceptor)
      this.responseErrorInterceptor = responseErrorInterceptor;
    if (authToken) this._authToken = authToken;

    if (requestInterceptor) {
      axiosInstance.interceptors.request.use(async (req) => {
        req = await requestInterceptor(req);
        return Promise.resolve(req);
      });
    }

    axiosInstance.interceptors.response.use(
      async (res: any) => {
        if (responseInterceptor) {
          res = await responseInterceptor(res);
        }
        return res;
      },
      async (res: any) => {
        if (responseErrorInterceptor) {
          res = await responseErrorInterceptor(res);
        }
        return res;
      }
    );

    return axiosInstance;
  };

  //--------> API Methods

  get = <T>(endpoint: string, config: AxiosRequestConfig<any> = {}) => {
    if (!this.getAuthToken())
      throw new Error(
        `[${this._serviceName}]: Auth token is not set, use anonGet method for anonymous get calls`
      );
      
    lodashSet(config, 'headers["Authorization"]', this.getAuthToken());

    return this._apiHandler.get<T>(endpoint, config);
  };

  post = <T>(
    endpoint: string,
    data?: any,
    config: AxiosRequestConfig<any> = {}
  ) => {
    if (!this.getAuthToken())
      throw new Error(
        `[${this._serviceName}]: Auth token is not set, use anonPost method for anonymous post calls`
      );

    lodashSet(config, 'headers["Authorization"]', this.getAuthToken());
    return this._apiHandler.post<T>(endpoint, data, config);
  };

  put = <T>(
    endpoint: string,
    data?: any,
    config: AxiosRequestConfig<any> = {}
  ) => {
    if (!this.getAuthToken())
      throw new Error(
        `[${this._serviceName}]: Auth token is not set, use anonPut method for anonymous put calls`
      );

    lodashSet(config, 'headers["Authorization"]', this.getAuthToken());
    return this._apiHandler.put<T>(endpoint, data, config);
  };

  delete = <T>(endpoint: string, config: AxiosRequestConfig<any> = {}) => {
    if (!this.getAuthToken())
      throw new Error(
        `[${this._serviceName}]: Auth token is not set, use anonDelete method for anonymous delete calls`
      );

    lodashSet(config, 'headers["Authorization"]', this.getAuthToken());
    return this._apiHandler.delete<T>(endpoint, config);
  };

  patch = <T>(
    endpoint: string,
    data?: any,
    config: AxiosRequestConfig<any> = {}
  ) => {
    if (!this.getAuthToken())
      throw new Error(
        `[${this._serviceName}]: Auth token is not set, use anonPatch for anonymous patch calls`
      );

    lodashSet(config, 'headers["Authorization"]', this.getAuthToken());
    return this._apiHandler.patch<T>(endpoint, data, config);
  };

  //--------> API Methods

  anonGet = <T>(endpoint: string, config?: AxiosRequestConfig<any>) => {
    return this._apiHandler.get<T>(endpoint, config);
  };

  anonPost = <T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ) => {
    return this._apiHandler.post<T>(endpoint, data, config);
  };

  anonPut = <T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ) => {
    return this._apiHandler.put<T>(endpoint, data, config);
  };

  anonDelete = <T>(endpoint: string, config?: AxiosRequestConfig<any>) => {
    return this._apiHandler.delete<T>(endpoint, config);
  };

  anonPatch = <T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ) => {
    return this._apiHandler.patch<T>(endpoint, data, config);
  };
}
