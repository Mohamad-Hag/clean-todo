import { RemoveItemPayload } from "redux/features/todosSlice";
import TodoProps from "utils/interfaces/common/Todo";

function removeTodo(todos: TodoProps[], removeItem: RemoveItemPayload) {
  if (!removeItem.isInTrash) {
    let todoIndex = todos.findIndex((todo) => todo.id === removeItem.id);
    let todo = todos[todoIndex];
    todo.isInTrash = true;
    todo.isSelected = false;
  } else todos = todos.filter((todo) => todo.id !== removeItem.id);
  return todos;
}

export default removeTodo;
