import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetails } from "@/services/Authentication";
import { ContractCreatorType } from "@/services/ContractsService";

import { AppState } from "../index";

export interface AuthState {
  userData: UserDetails | null;
  creatorType: ContractCreatorType;
}

const initialState: AuthState = {
  userData: null,
  creatorType: ContractCreatorType.Payer,
};

export const authSlice = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserDetails | null>) => {
      state.userData = action.payload;
    },

    setCreatorType: (state, action: PayloadAction<ContractCreatorType>) => {
      state.creatorType = action.payload;
    },
  },
});

export const selectUserData = (state: AppState) => state.auth.userData;
export const selectCreatorType = (state: AppState) => state.auth.creatorType;

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
