import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CategorySelector {
  isOpen: boolean;
  ids?: CategorySelectorIds;
  onSelect?: (categoryId: number) => void;
  onChange?: (categoryId: number) => void;
}

interface CategorySelectorIds {
  categoryId?: number;
  itemId: number;
}

const initialState: CategorySelector = {
  isOpen: false,
};

export const categorySelectorSlice = createSlice({
  name: "categorySelector",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.ids = {
        categoryId: undefined,
        itemId: action.payload,
      };
    },
    openWithSelectedId: (state, action: PayloadAction<CategorySelectorIds>) => {
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
    change: (state, action: PayloadAction<CategorySelectorIds>) => {
      state.ids = action.payload;
    },
    setOnSelect: (
      state,
      action: PayloadAction<(categoryId: number) => void>
    ) => {
      state.onSelect = action.payload;
    },
    setOnChange: (
      state,
      action: PayloadAction<(categoryId: number) => void>
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
} = categorySelectorSlice.actions;

export const selectCategorySelector = (state: RootState) =>
  state.categorySelector;

export default categorySelectorSlice.reducer;
