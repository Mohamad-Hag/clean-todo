import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type SidebarStatus = "hidden" | "shown";

interface Sidebar {
  status: SidebarStatus;
}

const initialState: Sidebar = {
  status: "shown",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<SidebarStatus>) => {
      state.status = action.payload;
    },
    changeOppositeStatus: (state, action: PayloadAction<SidebarStatus>) => {
      state.status = action.payload === "hidden" ? "shown" : "hidden";
    },
    show: (state) => {
      state.status = "shown";
    },
    hide: (state) => {
      state.status = "hidden";
    },
  },
});

export const { changeOppositeStatus, changeStatus, show, hide } = sidebarSlice.actions;

export const selectSidebar = (state: RootState) => state.sidebar;

export default sidebarSlice.reducer;
