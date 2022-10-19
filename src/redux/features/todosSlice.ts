import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import TodoProps, {
  TodoData,
  TodoEditable,
} from "../../utils/interfaces/common/Todo";
import Store from "../../utils/Store";
import type { RootState } from "../store";

export interface EditData {
  id: number;
  editable: TodoEditable;
}

const initialState: TodoProps[] = Store.get();

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoData>) =>
      Store.create(state, action.payload),
    edit: (state, action: PayloadAction<EditData>) =>
      Store.edit(state, action.payload),
    remove: (state, action: PayloadAction<number>) =>
      Store.remove(state, action.payload),
    removeSome: (state, action: PayloadAction<number[]>) =>
      Store.removeSome(state, action.payload),
    removeFinished: (state) => Store.removeFinished(state),
    clear: (state) => Store.clear(state),
    finishAll: (state) => Store.finishAll(state),
    finishSome: (state, action: PayloadAction<number[]>) =>
      Store.finishSome(state, action.payload),
    selectAll: (state, action: PayloadAction<boolean>) =>
      Store.selectAll(state, action.payload),
  },
});

export const {
  create,
  edit,
  remove,
  removeSome,
  removeFinished,
  clear,
  finishAll,
  finishSome,
  selectAll,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
