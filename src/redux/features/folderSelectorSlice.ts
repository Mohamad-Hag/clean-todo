import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface FolderSelector {
  isOpen: boolean;
  ids?: FolderSelectorIds;
  onSelect?: (folderId: number) => void;
  onChange?: (folderId: number) => void;
}

interface FolderSelectorIds {
  folderId?: number;
  itemId: number;
}

const initialState: FolderSelector = {
  isOpen: false,
};

export const folderSelectorSlice = createSlice({
  name: "folderSelector",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.ids = {
        folderId: undefined,
        itemId: action.payload,
      };
    },
    openWithSelectedId: (state, action: PayloadAction<FolderSelectorIds>) => {
      state.isOpen = true;
      state.ids = action.payload;
    },
    select: (state) => {
      state.isOpen = false;
    },
    close: (state) => {
      state.isOpen = false;
      state.ids = undefined;
      state.onChange = undefined;
      state.onSelect = undefined;
    },
    change: (state, action: PayloadAction<FolderSelectorIds>) => {
      state.ids = action.payload;
    },
    setOnSelect: (
      state,
      action: PayloadAction<(folderId: number) => void>
    ) => {
      state.onSelect = action.payload;
    },
    setOnChange: (
      state,
      action: PayloadAction<(folderId: number) => void>
    ) => {
      state.onChange = action.payload;
    },
  },
});

export const {
  open,
  close,
  change,
  openWithSelectedId,
  select,
  setOnChange,
  setOnSelect,
} = folderSelectorSlice.actions;

export const selectFolderSelector = (state: RootState) =>
  state.folderSelector;

export default folderSelectorSlice.reducer;
