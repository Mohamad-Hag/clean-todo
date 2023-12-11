import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import LanguageCodes from "utils/enums/LanguageCodes";
import LanguageStore from "utils/local-storage/LanguageStore";
import type { RootState } from "../store";
import Language from "utils/interfaces/common/Language";

const initialState: Language = LanguageStore.get();

export const LanguageSlice = createSlice({
  name: "passCode",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageCodes>) =>
      LanguageStore.setLanguage(state, action.payload),
  },
});

export const { setLanguage } = LanguageSlice.actions;

export const selectLanguage = (state: RootState) => state.language;

export default LanguageSlice.reducer;
