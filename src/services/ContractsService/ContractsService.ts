import { ApiResponse, IApiService } from "@/services/Api";
import { store } from "@/services/Store";
import { contractActions } from "../Store/slices/contractSlice";

import {
  ContractCompleteDetails,
  ContractCreatePayload,
  CreatedContractDetails,
} from "./ContractsService.types";
import { contractModelToCompleteDetails } from "./ContractsService.utils";

class ContractsService {
  _apiService: IApiService;

  constructor(_apiService: IApiService) {
    this._apiService = _apiService;
  }

  //------------------

  createContract = async (data: ContractCreatePayload) => {
    const createApiRes = await this._apiService.post<
      ApiResponse<CreatedContractDetails>
    >("/contract", data);

    const contractId = createApiRes.data.data.id;

    const contractApiRes = await this._apiService.get<
      ApiResponse<ContractCompleteDetails>
    >(`/contract/detail/${contractId}`);
    const contractDetails = contractApiRes.data.data;

    store.dispatch(
      contractActions.addContracts({
        data: [contractDetails],
      })
    );

    return createApiRes;
  };

  getContractByID = async (id: string) => {
    if (this._apiService.getAuthToken()) {
      const contractApiRes = await this._apiService.get<
        ApiResponse<ContractCompleteDetails>
      >(`/contract/detail/${id}`);
      const contractDetails = contractApiRes.data.data;

      store.dispatch(
        contractActions.addContracts({
          data: [contractDetails],
        })
      );

      return contractDetails;
    }

    const otpApiRes = await this._apiService.anonGet<
      ApiResponse<{ vCode: number }>
    >(`/contract/detail/${id}`);

    const verifyApiRes = await this._apiService.anonPost<
      ApiResponse<{ token: string }>
    >(`/contract/detail/verify/${id}`, {
      v_code: otpApiRes.data.data.vCode,
    });

    const token = verifyApiRes.data.data.token;

    this._apiService.setAuthToken(token);

    const contractApiRes = await this._apiService.get<
      ApiResponse<ContractCompleteDetails>
    >(`/contract/detail/${id}`, {});

    const contractDetails = contractApiRes.data.data;

    store.dispatch(
      contractActions.addContracts({
        data: [contractDetails],
      })
    );

    return contractDetails;
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
        const contractList = res.data.data.rows.map(
          contractModelToCompleteDetails
        );

        store.dispatch(
          contractActions.addContracts({
            data: contractList,
          })
        );

        return res;
      });
  };

  rejectContract = (
    id: String,
    data: { reason: string; description: string }
  ) => {
    return this._apiService
      .post<
        ApiResponse<{
          data: null;
        }>
      >(`/contract/reject/${id}`, {
        reject_header: data.reason,
        reject_reason: data.description,
      })
      .then((res) => {
        return res.data.code === 200;
      });
  };
}

export default ContractsService;
