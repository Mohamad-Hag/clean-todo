import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { closeCategoryForm } from "../categoryFormActions/closeCategoryForm";
import openCategoryFormAs from "../categoryFormActions/openCategoryFormAs";
import type { RootState } from "../store";
import { FormMode } from "./formSlice";
import defaultCategoryIcon from "data/typescript/defaultCategoryIcon";

export interface CategoryForm {
  id?: number;
  icon?: string;
  title?: string;
  isOpen?: boolean;
  mode?: FormMode;
}

const initialState: CategoryForm = {
  title: "",
  isOpen: false,
  icon: defaultCategoryIcon, // Allowed icons found in "categoryIcons.ts" file
  mode: "create",
};

export const categoryFormSlice = createSlice({
  name: "categoryForm",
  initialState,
  reducers: {
    open: (state) => openCategoryFormAs(state),
    openAsCreate: (state, action: PayloadAction<CategoryForm>) =>
      openCategoryFormAs(state, "create", action.payload),
    openAsEdit: (state, action: PayloadAction<CategoryForm>) =>
      openCategoryFormAs(state, "edit", action.payload),
    close: (state) => closeCategoryForm(state),
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
  close,
  setId,
  setIcon,
  setTitle,
  setMode,
} = categoryFormSlice.actions;

export const selectCategoryForm = (state: RootState) => state.categoryForm;

export default categoryFormSlice.reducer;
