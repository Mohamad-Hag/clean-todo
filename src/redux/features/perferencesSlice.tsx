import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import PerferencesStore from "../../utils/PerferencesStore";
import type { RootState } from "../store";

export type PerferencesMode = "create" | "edit";

export interface Perferences {
  background: string;
}

const initialState: Perferences = PerferencesStore.get();

export const perferencesSlice = createSlice({
  name: "perferences",
  initialState,
  reducers: {
    changeBackground: (state, action: PayloadAction<string>) =>
      PerferencesStore.changeBackground(state, action.payload),
  },
});

export const { changeBackground } = perferencesSlice.actions;

export const selectPerferences = (state: RootState) => state.perferences;

export default perferencesSlice.reducer;
