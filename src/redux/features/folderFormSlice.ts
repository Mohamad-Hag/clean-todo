import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { closeFolderForm } from "../folderFormActions/closeFolderForm";
import openFolderFormAs from "../folderFormActions/openFolderFormAs";
import type { RootState } from "../store";
import { FormMode } from "./formSlice";
import defaultFolderIcon from "data/typescript/defaultFolderIcon";

export interface FolderForm {
  id?: number;
  icon?: string;
  title?: string;
  isOpen?: boolean;
  mode?: FormMode;
}

const initialState: FolderForm = {
  title: "",
  isOpen: false,
  icon: defaultFolderIcon, // Allowed icons found in "folderIcons.ts" file
  mode: "create",
};

export const folderFormSlice = createSlice({
  name: "folderForm",
  initialState,
  reducers: {
    open: (state) => openFolderFormAs(state),
    openAsCreate: (state, action: PayloadAction<FolderForm>) =>
      openFolderFormAs(state, "create", action.payload),
    openAsEdit: (state, action: PayloadAction<FolderForm>) =>
      openFolderFormAs(state, "edit", action.payload),
    openAsDraft: (state, action: PayloadAction<FolderForm>) =>
      openFolderFormAs(state, "draft", action.payload),
    close: (state) => closeFolderForm(state),
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setIcon: (state, action: PayloadAction<string>) => {
      state.icon = action.payload;
    },
    setMode: (state, action: PayloadAction<FormMode>) => {
      state.mode = action.payload;
    },
  },
});

export const {
  open,
  openAsCreate,
  openAsEdit,
  openAsDraft,
  close,
  setId,
  setIcon,
  setTitle,
  setMode,
} = folderFormSlice.actions;

export const selectFolderForm = (state: RootState) => state.folderForm;

export default folderFormSlice.reducer;
