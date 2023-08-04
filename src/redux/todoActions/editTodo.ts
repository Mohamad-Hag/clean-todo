import TodoProps from "utils/interfaces/common/Todo";
import { EditData } from "../features/todosSlice";

function editTodo(todos: TodoProps[], editData: EditData): TodoProps[] {
  let payload = editData;
  let todoIndex = todos.findIndex((x) => x.id === payload.id);
  let todo = todos[todoIndex];
  let title = payload.editable.title;
  let description = payload.editable.description;
  let priority = payload.editable.priority;
  let isFinshed = payload.editable.isFinished;
  let isSelected = payload.editable.isSelected;
  let categoryId = payload.editable.categoryId;
  todo.title = title ? title : todo.title;
  todo.description = description === undefined ? todo.description : description;
  todo.priority = priority === undefined ? todo.priority : priority;
  todo.isFinished = isFinshed !== undefined ? isFinshed : todo.isFinished;
  todo.isSelected = isSelected !== undefined ? isSelected : todo.isSelected;
  todo.categoryId =
    categoryId === null
      ? undefined
      : categoryId !== undefined
      ? categoryId
      : todo.categoryId;
  return todos;
}

export default editTodo;
