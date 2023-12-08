import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SidebarStore from "utils/local-storage/SidebarStore";
import type { RootState } from "../store";

export type SidebarStatus = "hidden" | "shown";

export interface Sidebar {
  status: SidebarStatus;
}

const initialState: Sidebar = SidebarStore.get();

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    replace: (state, action: PayloadAction<Sidebar>) =>
      SidebarStore.replace(state, action.payload),
    changeStatus: (state, action: PayloadAction<SidebarStatus>) =>
      SidebarStore.changeStatus(state, action.payload),
    changeOppositeStatus: (state, action: PayloadAction<SidebarStatus>) =>
      SidebarStore.changeOppositeStatus(state, action.payload),
  },
});

export const { changeOppositeStatus, changeStatus, replace } =
  sidebarSlice.actions;

export const selectSidebar = (state: RootState) => state.sidebar;

export default sidebarSlice.reducer;
