import TodoProps from "utils/interfaces/common/Todo";
import { EditData } from "../features/todosSlice";

function editTodo(todos: TodoProps[], editData: EditData): TodoProps[] {
  let payload = editData;
  let todoIndex = todos.findIndex((x) => x.id === payload.id);
  let todo = todos[todoIndex];
  let title = payload.editable.title;
  let description = payload.editable.description;
  let priority = payload.editable.priority;
  let isFinished = payload.editable.isFinished;
  let isSelected = payload.editable.isSelected;
  let folderId = payload.editable.folderId;
  let isInTrash = payload.editable.isInTrash;

  todo.title = title ? title : todo.title;
  todo.description = description === undefined ? todo.description : description;
  todo.priority = priority === undefined ? todo.priority : priority;
  todo.isFinished = isFinished !== undefined ? isFinished : todo.isFinished;
  todo.isSelected = isSelected !== undefined ? isSelected : todo.isSelected;
  todo.folderId =
    folderId === null
      ? undefined
      : folderId !== undefined
      ? folderId
      : todo.folderId;
  todo.isInTrash = isInTrash !== undefined ? isInTrash : todo.isInTrash;  

  return todos;
}

export default editTodo;
