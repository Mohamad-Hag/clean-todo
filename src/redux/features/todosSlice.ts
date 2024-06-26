import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import TodoProps, {
  TodoData,
  TodoEditable,
} from "utils/interfaces/common/Todo";
import TodoStore from "utils/local-storage/TodoStore";
import type { RootState } from "../store";
import { WithConditionCallback } from "../todoActions/selectAllTodos";

export interface EditData {
  id: number;
  editable: TodoEditable;
}

export interface ItemIds_FolderId {
  folderId?: number;
  itemIds: number[];
}

export interface RemoveItemPayload {
  id: number;
  isInTrash?: boolean;
}

const initialState: TodoProps[] = TodoStore.get();

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    replace: (state, action: PayloadAction<TodoProps[]>) =>
      TodoStore.replace(state, action.payload),
    create: (state, action: PayloadAction<TodoData>) =>
      TodoStore.create(state, action.payload),
    edit: (state, action: PayloadAction<EditData>) =>
      TodoStore.edit(state, action.payload),
    expandDescription: (state, action: PayloadAction<number>) =>
      TodoStore.expandDescription(state, action.payload),
    collapseDescription: (state, action: PayloadAction<number>) =>
      TodoStore.collapseDescription(state, action.payload),
    remove: (state, action: PayloadAction<RemoveItemPayload>) =>
      TodoStore.remove(state, action.payload),
    removeSome: (state, action: PayloadAction<RemoveItemPayload[]>) =>
      TodoStore.removeSome(state, action.payload),
    removeFinished: (state) => TodoStore.removeFinished(state),
    clear: (state) => void TodoStore.clear(state),
    finishAll: (state) => TodoStore.finishAll(state),
    finishSome: (state, action: PayloadAction<number[]>) =>
      TodoStore.finishSome(state, action.payload),
    addFolderSome: (state, action: PayloadAction<ItemIds_FolderId>) =>
      TodoStore.addFolderSome(state, action.payload),
    activateAll: (state) => TodoStore.activateAll(state),
    activateSome: (state, action: PayloadAction<number[]>) =>
      TodoStore.activateSome(state, action.payload),
    restoreSome: (state, action: PayloadAction<number[]>) =>
      TodoStore.restoreSome(state, action.payload),
    selectAll: (state, action: PayloadAction<WithConditionCallback>) =>
      TodoStore.selectAll(state, action.payload),
  },
});

export const {
  create,
  replace,
  edit,
  expandDescription,
  collapseDescription,
  remove,
  removeSome,
  removeFinished,
  clear,
  finishAll,
  finishSome,
  activateAll,
  activateSome,
  addFolderSome,
  selectAll,
  restoreSome,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
