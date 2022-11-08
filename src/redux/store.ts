import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./features/alertSlice";
import formSlice from "./features/formSlice";
import sidebarSlice from "./features/sidebarSlice";
import todosSlice from "./features/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    form: formSlice,
    alert: alertSlice,
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
