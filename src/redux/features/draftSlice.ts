import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import DraftStore from "utils/local-storage/DraftStore";
import Priority from "utils/types/Priority";
import type { RootState } from "../store";
import { FolderForm } from "./folderFormSlice";
import { Form } from "./formSlice";

export interface Draft {
  createTodo: Form;
  createFolder: FolderForm;
}

const initialState: Draft = DraftStore.get();

export const draftSlice = createSlice({
  name: "draftSlice",
  initialState,
  reducers: {
    setFormTitleDraft: (state, action: PayloadAction<string>) =>
      DraftStore.setFormTitleDraft(state, action.payload),
    setFolderFormTitleDraft: (state, action: PayloadAction<string>) =>
      DraftStore.setFolderFormTitleDraft(state, action.payload),
    setFolderFormIconDraft: (state, action: PayloadAction<string>) =>
      DraftStore.setFolderFormIconDraft(state, action.payload),
    setFormDescriptionDraft: (state, action: PayloadAction<string>) =>
      DraftStore.setFormDescriptionDraft(state, action.payload),
    setFormPriorityDraft: (state, action: PayloadAction<Priority>) =>
      DraftStore.setFormPriorityDraft(state, action.payload),
    setFormFolderIdDraft: (state, action: PayloadAction<number | undefined>) =>
      DraftStore.setFormFolderIdDraft(state, action.payload),
    setFormDueDateDraft: (state, action: PayloadAction<string>) =>
      DraftStore.setFormDueDateDraft(state, action.payload),
    clearForm: (state) => DraftStore.clearForm(state),
    clearFolderForm: (state) => DraftStore.clearFolderForm(state),
    replace: (state, action: PayloadAction<Draft>) =>
      DraftStore.replace(state, action.payload),
  },
});

export const {
  setFormTitleDraft,
  setFolderFormIconDraft,
  setFolderFormTitleDraft,
  setFormDescriptionDraft,
  setFormPriorityDraft,
  setFormFolderIdDraft,
  setFormDueDateDraft,
  clearForm,
  clearFolderForm,
  replace,
} = draftSlice.actions;

export const selectDraft = (state: RootState) => state.draft;

export default draftSlice.reducer;
