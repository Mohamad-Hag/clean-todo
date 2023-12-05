import { RemoveItemPayload } from "redux/features/todosSlice";
import TodoProps from "utils/interfaces/common/Todo";

function removeSomeTodos(todos: TodoProps[], removeItems: RemoveItemPayload[]) {
  let isTrashPage = removeItems[0].isInTrash;
  let identifiers = removeItems.map((removeItem) => removeItem.id);

  if (isTrashPage)
    todos = todos.filter((todo) => !identifiers.includes(todo.id!));
  else
    for (let todo of todos)
      if (identifiers.includes(todo.id!)) {
        todo.isInTrash = true;
        todo.isSelected = false;
      }

  return todos;
}

export default removeSomeTodos;
