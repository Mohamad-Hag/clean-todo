import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initializeIsActiveArray from "utils/initializeIsActiveArray";
import updateArray from "../sidebarIsActiveArrayActions/updateArray";
import type { RootState } from "../store";

const initialState: boolean[] = initializeIsActiveArray();

export const sidebarIsActiveArraySlice = createSlice({
  name: "sidebarIsActiveArray",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<number>) =>
      updateArray(state, action.payload),
  },
});

export const { update } = sidebarIsActiveArraySlice.actions;

export const selectSidebarIsActiveArray = (state: RootState) =>
  state.sidebarIsActiveArray;

export default sidebarIsActiveArraySlice.reducer;
