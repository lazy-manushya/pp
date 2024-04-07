import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 

import { 
  CreatedContractDetails,
} from "@/services/ContractsService";

import { AppState } from "../index";
import { listStateRemover, listStateSetter } from "../utils";

export interface ContractState {
  contracts: CreatedContractDetails[];
}

const initialState: ContractState = {
  contracts: [],
};

export const contractSlice = createSlice({
  name: "CONTRACT",
  initialState,
  reducers: {
    addContracts: (
      state,
      action: PayloadAction<{
        data: CreatedContractDetails[];
        replaceData?: boolean;
        replaceList?: boolean;
      }>
    ) => {
      const { data, replaceData, replaceList } = action.payload;
      state.contracts = listStateSetter(state.contracts, data, {
        replaceData,
        replaceList,
      });
    },

    removeContracts: (
      state,
      action: PayloadAction<{
        idList: string[];
      }>
    ) => {
      const { idList } = action.payload;
      state.contracts = listStateRemover(state.contracts, idList);
    },
  },
});

export const selectContracts = (state: AppState) => state.contract.contracts; 

export const contractActions = contractSlice.actions;
export const contractReducer = contractSlice.reducer;
