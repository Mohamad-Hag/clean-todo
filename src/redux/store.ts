import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./features/formSlice";
import todosSlice from "./features/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
