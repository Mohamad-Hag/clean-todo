import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import PassCodeStore from "utils/local-storage/PassCodeStore";

export interface PassCode {
  isPassed?: boolean;
  value?: string;
  passCodeTimeout: PassCodeTimeout;
}

export type PassCodeTimeout = "none" | "15 minute" | "30 minutes" | "1 hour";

const initialState: PassCode = {
  isPassed: !!!PassCodeStore.get().value,
  value: PassCodeStore.get().value,
  passCodeTimeout: "none",
};

export const passCodeSlice = createSlice({
  name: "passCode",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string | undefined>) =>
      PassCodeStore.setValue(state, action.payload),
    lock: (state) => PassCodeStore.lock(state),
    unlock: (state) => PassCodeStore.unlock(state),
    replace: (state, action: PayloadAction<PassCode>) =>
      PassCodeStore.replace(state, action.payload),
    setPassCodeTimeout: (state, action: PayloadAction<PassCodeTimeout>) =>
      PassCodeStore.setPassCodeTimeout(state, action.payload),
  },
});

export const { setValue, lock, unlock, replace } = passCodeSlice.actions;

export const selectPassCode = (state: RootState) => state.passCode;

export default passCodeSlice.reducer;
