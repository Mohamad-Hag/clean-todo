import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import FolderStore from "utils/local-storage/FolderStore";
import Folder, { FolderEditable } from "utils/interfaces/common/Folder";
import type { RootState } from "../store";

export interface EditData {
  id: number;
  editable: FolderEditable;
}

const initialState: Folder[] = FolderStore.get();

export const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    replace: (state, action: PayloadAction<Folder[]>) =>
      FolderStore.replace(state, action.payload),
    create: (state, action: PayloadAction<Folder>) =>
      FolderStore.create(state, action.payload),
    edit: (state, action: PayloadAction<EditData>) =>
      FolderStore.edit(state, action.payload),
    remove: (state, action: PayloadAction<number>) =>
      FolderStore.remove(state, action.payload),
  },
});

export const { create, edit, remove, replace } = folderSlice.actions;

export const selectFolders = (state: RootState) => state.folders;

export default folderSlice.reducer;
