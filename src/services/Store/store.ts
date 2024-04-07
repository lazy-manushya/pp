import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { authReducer } from "./slices/authSlice";
import { contractReducer } from "./slices/contractSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contract: contractReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppState = ReturnType<typeof store.getState>;
