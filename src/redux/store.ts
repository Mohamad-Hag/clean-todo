import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./features/alertSlice";
import formSlice from "./features/formSlice";
import preferencesSlice from "./features/preferencesSlice";
import sidebarSlice from "./features/sidebarSlice";
import todosSlice from "./features/todosSlice";
import sidebarIsActiveArraySlice from "./features/sidebarIsActiveArraySlice";
import folderSlice from "./features/folderSlice";
import folderFormSlice from "./features/folderFormSlice";
import folderSelectorSlice from "./features/folderSelectorSlice";
import passCodeSlice from "./features/passCodeSlice";
import languageSlice from "./features/languageSlice";
import draftSlice from "./features/draftSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["your/action/type"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }),
  reducer: {
    todos: todosSlice,
    form: formSlice,
    folderForm: folderFormSlice,
    alert: alertSlice,
    sidebar: sidebarSlice,
    preferences: preferencesSlice,
    sidebarIsActiveArray: sidebarIsActiveArraySlice,
    folders: folderSlice,
    folderSelector: folderSelectorSlice,
    passCode: passCodeSlice,
    language: languageSlice,
    draft: draftSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
