import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./features/alertSlice";
import formSlice from "./features/formSlice";
import preferencesSlice from "./features/preferencesSlice";
import sidebarSlice from "./features/sidebarSlice";
import todosSlice from "./features/todosSlice";
import sidebarIsActiveArraySlice from "./features/sidebarIsActiveArraySlice";
import categorySlice from "./features/categorySlice";
import categoryFormSlice from "./features/categoryFormSlice";
import categorySelectorSlice from "./features/categorySelectorSlice";
import passCodeSlice from "./features/passCodeSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    form: formSlice,
    categoryForm: categoryFormSlice,
    alert: alertSlice,
    sidebar: sidebarSlice,
    preferences: preferencesSlice,
    sidebarIsActiveArray: sidebarIsActiveArraySlice,
    categories: categorySlice,
    categorySelector: categorySelectorSlice,
    passCode: passCodeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
