import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ContractCompleteDetails } from "@/services/ContractsService";

import { AppState } from "../index";
import { listStateRemover, listStateSetter } from "../utils";

export interface ContractState {
  contracts: ContractCompleteDetails[];
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
        data: ContractCompleteDetails[];
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

export const selectContract = (contractId: string) => (state: AppState) =>
  state.contract.contracts.find((c) => c.id === contractId);

export const contractActions = contractSlice.actions;
export const contractReducer = contractSlice.reducer;
