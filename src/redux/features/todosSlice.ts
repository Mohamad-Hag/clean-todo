import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import TodoProps, {
  TodoData,
  TodoEditable,
} from "../../utils/interfaces/common/Todo";
import TodoStore from "../../utils/TodoStore";
import type { RootState } from "../store";
import { WithConditionCallback } from "../todoActions/selectAllTodos";

export interface EditData {
  id: number;
  editable: TodoEditable;
}

const initialState: TodoProps[] = TodoStore.get();

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TodoData>) =>
      TodoStore.create(state, action.payload),
    edit: (state, action: PayloadAction<EditData>) =>
      TodoStore.edit(state, action.payload),
    remove: (state, action: PayloadAction<number>) =>
      TodoStore.remove(state, action.payload),
    removeSome: (state, action: PayloadAction<number[]>) =>
      TodoStore.removeSome(state, action.payload),
    removeFinished: (state) => TodoStore.removeFinished(state),
    clear: (state) => TodoStore.clear(state),
    finishAll: (state) => TodoStore.finishAll(state),
    finishSome: (state, action: PayloadAction<number[]>) =>
      TodoStore.finishSome(state, action.payload),
    activateAll: (state) =>
      TodoStore.activateAll(state),
    selectAll: (state, action: PayloadAction<WithConditionCallback>) =>
      TodoStore.selectAll(state, action.payload),
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
  activateAll,
  selectAll,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
