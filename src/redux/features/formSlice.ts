import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import Priority from "utils/types/Priority";
import closeForm from "../formActions/closeForm";
import openFormAs from "../formActions/openFormAs";
import type { RootState } from "../store";

export type FormMode = "create" | "edit";

export interface Form {
  id?: number;
  title?: string;
  description?: string;
  categoryId?: number;
  priority?: Priority;
  isOpen?: boolean;
  mode?: FormMode;
}

const initialState: Form = {
  title: "",
  description: "",
  priority: "medium",
  isOpen: false,
  mode: "create",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    open: (state) => openFormAs(state),
    openAsCreate: (state, action: PayloadAction<Form>) =>
      openFormAs(state, "create", action.payload),
    openAsEdit: (state, action: PayloadAction<Form>) =>
      openFormAs(state, "edit", action.payload),
    close: (state) => closeForm(state),
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setPriority: (state, action: PayloadAction<Priority>) => {
      state.priority = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
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
  setTitle,
  setDescription,
  setPriority,
  setCategoryId,
  setMode,
} = formSlice.actions;

export const selectForm = (state: RootState) => state.form;

export default formSlice.reducer;
