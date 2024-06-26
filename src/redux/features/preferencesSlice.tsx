import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import PreferencesStore from "utils/local-storage/PreferencesStore";
import type { RootState } from "../store";

export type PreferencesMode = "create" | "edit";

export interface FilterPreferences {
  includeFolder?: boolean;
  includeDescription?: boolean;
  includeDate?: boolean;
}

export interface TodoPreferences {
  alwaysShowDescription?: boolean;
  alwaysShowPriorityIcon?: boolean;
  editOnDoubleClick?: boolean;
  collapseDescription?: boolean;
  allowDrafts?: boolean;
}

export interface Preferences {
  background: string;
  filterPreferences?: FilterPreferences;
  todoPreferences?: TodoPreferences;
}

const initialState: Preferences = PreferencesStore.get();

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    replace: (state, action: PayloadAction<Preferences>) =>
      PreferencesStore.replace(state, action.payload),
    changeBackground: (state, action: PayloadAction<string>) =>
      PreferencesStore.changeBackground(state, action.payload),
    setFilterIncludeFolder: (state, action: PayloadAction<boolean>) =>
      PreferencesStore.setFilterIncludeFolder(state, action.payload),
    setFilterIncludeDescription: (state, action: PayloadAction<boolean>) =>
      PreferencesStore.setFilterIncludeDescription(state, action.payload),
    setFilterIncludeDate: (state, action: PayloadAction<boolean>) =>
      PreferencesStore.setFilterIncludeDate(state, action.payload),
    setTodoShowDescription: (state, action: PayloadAction<boolean>) =>
      PreferencesStore.setTodoShowDescription(state, action.payload),
    setTodoShowPriorityIcon: (state, action: PayloadAction<boolean>) =>
      PreferencesStore.setTodoShowPriorityIcon(state, action.payload),
    setTodoEditOnDoubleClick: (state, action: PayloadAction<boolean>) =>
      PreferencesStore.setTodoEditOnDoubleClick(state, action.payload),
    setTodoCollapseDescription: (state, action: PayloadAction<boolean>) =>
      PreferencesStore.setTodoCollapseDescription(state, action.payload),
    setTodoAllowDrafts: (state, action: PayloadAction<boolean>) =>
      PreferencesStore.setTodoAllowDrafts(state, action.payload),
    resetPreferences: (state) => PreferencesStore.resetPreferences(state),
  },
});

export const {
  changeBackground,
  setFilterIncludeFolder,
  setFilterIncludeDescription,
  setFilterIncludeDate,
  setTodoEditOnDoubleClick,
  setTodoShowDescription,
  setTodoShowPriorityIcon,
  setTodoCollapseDescription,
  setTodoAllowDrafts,
  resetPreferences,
  replace,
} = preferencesSlice.actions;

export const selectPreferences = (state: RootState) => state.preferences;

export default preferencesSlice.reducer;
