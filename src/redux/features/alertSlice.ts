import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { AlertProps } from "../../components/Alert";
import type { RootState } from "../store";

export type FormMode = "create" | "edit";

const initialState: AlertProps = {
  title: "Title",
  description: "Description",
  isOpen: false,
  isOkButtonDisabled: false,
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
      state.title = initialState.title;
      state.description = initialState.description;
      state.onOk = initialState.onOk;
      state.onCancel = initialState.onCancel;
      state.onClose = initialState.onClose;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDescription: (state, action: PayloadAction<React.ReactNode>) => {
      state.description = action.payload;
    },
    setOnOk: (state, action: PayloadAction<() => void>) => {
      state.onOk = action.payload;
    },
    setOnCancel: (state, action: PayloadAction<() => void>) => {
      state.onCancel = action.payload;
    },
    setOnClose: (state, action: PayloadAction<() => void>) => {
      state.onClose = action.payload;
    },
    enableOkButton: (state) => {
        state.isOkButtonDisabled = false;
    },
    disableOkButton: (state) => {
      state.isOkButtonDisabled = true;
    },
  },
});

export const {
  open,
  close,
  setTitle,
  setDescription,
  setOnOk,
  setOnCancel,
  setOnClose,
  enableOkButton,
  disableOkButton,
} = alertSlice.actions;

export const selectAlert = (state: RootState) => state.alert;

export default alertSlice.reducer;
