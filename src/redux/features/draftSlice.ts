import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import DraftStore from "utils/local-storage/DraftStore";
import Priority from "utils/types/Priority";
import type { RootState } from "../store";
import { CategoryForm } from "./categoryFormSlice";
import { Form } from "./formSlice";

export interface Draft {
  createTodo: Form;
  createCategory: CategoryForm;
}

const initialState: Draft = DraftStore.get();

export const draftSlice = createSlice({
  name: "draftSlice",
  initialState,
  reducers: {
    setFormTitleDraft: (state, action: PayloadAction<string>) =>
      DraftStore.setFormTitleDraft(state, action.payload),
    setCategoryFormTitleDraft: (state, action: PayloadAction<string>) =>
      DraftStore.setCategoryFormTitleDraft(state, action.payload),
    setCategoryFormIconDraft: (state, action: PayloadAction<string>) =>
      DraftStore.setCategoryFormIconDraft(state, action.payload),
    setFormDescriptionDraft: (state, action: PayloadAction<string>) =>
      DraftStore.setFormDescriptionDraft(state, action.payload),
    setFormPriorityDraft: (state, action: PayloadAction<Priority>) =>
      DraftStore.setFormPriorityDraft(state, action.payload),
    clearForm: (state) => DraftStore.clearForm(state),
    clearCategoryForm: (state) => DraftStore.clearCategoryForm(state),
    replace: (state, action: PayloadAction<Draft>) =>
      DraftStore.replace(state, action.payload),
  },
});

export const {
  setFormTitleDraft,
  setCategoryFormIconDraft,
  setCategoryFormTitleDraft,
  setFormDescriptionDraft,
  setFormPriorityDraft,
  clearForm,
  clearCategoryForm,
  replace,
} = draftSlice.actions;

export const selectDraft = (state: RootState) => state.draft;

export default draftSlice.reducer;
