import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import updateArray from "../sidebarIsActiveArrayActions/updateArray";
import sidebarButtons from "../../data/sidebarButtons";

const initialState: boolean[] = Array(sidebarButtons.length + 2)
  .fill(false)
  .map((_, i) => (i === 0 ? true : false));

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
