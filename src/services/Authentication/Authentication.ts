import {
  UserDetails,
  UserInfoResponse,
  UserRegisterResponse,
} from "./Authentication.types";

import { IApiService } from "@/services/Api";
import { authActions, store } from "@/services/Store";

class Authentication {
  _apiService: IApiService;

  constructor(_apiService: IApiService) {
    this._apiService = _apiService;
  }

  //-------------------------

  registerUser = (data: Partial<Omit<UserDetails, "id">>) => {
    return this._apiService
      .post<UserRegisterResponse>("/auth/register", data)
      .then((res) => {
        store.dispatch(authActions.setUserData(res.data.data));

        return res;
      });
  };

  fetchUserInfo = () => {
    return this._apiService.get<UserInfoResponse>("/user").then((res) => {
      const userData = res.data?.data?.user;
      console.log({userData,res})
      if (userData) store.dispatch(authActions.setUserData(userData));

      return res;
    });
  };
}

export default Authentication;
