import { ApiResponse, IApiService } from "@/services/Api";
import { store } from "@/services/Store";

import {
  ContractDetails,
  CreatedContractDetails,
} from "./ContractsService.types";
import { contractActions } from "../Store/slices/contractSlice";

class ContractsService {
  _apiService: IApiService;

  constructor(_apiService: IApiService) {
    this._apiService = _apiService;
  }

  //------------------

  createContract = (data: ContractDetails) => {
    return this._apiService
      .post<ApiResponse<CreatedContractDetails>>("/contract", data)
      .then((res) => {
        store.dispatch(
          contractActions.addContracts({
            data: [res.data.data],
          })
        );

        return res;
      });
  };

  fetchContracts = () => {
    return this._apiService
      .get<
        ApiResponse<{
          count: number;
          rows: CreatedContractDetails[];
        }>
      >("/contract?limit=100&offset=0")
      .then((res) => {
        store.dispatch(
          contractActions.addContracts({
            data: res.data.data.rows,
          })
        );

        return res;
      });
  };
}

export default ContractsService;
