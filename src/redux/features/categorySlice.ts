import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import CategoryStore from "utils/local-storage/CategoryStore";
import Category, { CategoryEditable } from "utils/interfaces/common/Category";
import type { RootState } from "../store";

export interface EditData {
  id: number;
  editable: CategoryEditable;
}

const initialState: Category[] = CategoryStore.get();

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    replace: (state, action: PayloadAction<Category[]>) =>
      CategoryStore.replace(state, action.payload),
    create: (state, action: PayloadAction<Category>) =>
      CategoryStore.create(state, action.payload),
    edit: (state, action: PayloadAction<EditData>) =>
      CategoryStore.edit(state, action.payload),
    remove: (state, action: PayloadAction<number>) =>
      CategoryStore.remove(state, action.payload),
  },
});

export const { create, edit, remove, replace } = categorySlice.actions;

export const selectCategories = (state: RootState) => state.categories;

export default categorySlice.reducer;
