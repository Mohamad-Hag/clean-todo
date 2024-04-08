import TodoProps from "utils/interfaces/common/Todo";
import { ItemIds_FolderId } from "../features/todosSlice";

function addFolderSomeTodos(
  todos: TodoProps[],
  itemIds_folderId: ItemIds_FolderId
) {
  for (let todo of todos)
    if (itemIds_folderId.itemIds.includes(todo.id!))
      todo.folderId = itemIds_folderId.folderId;
  return todos;
}

export default addFolderSomeTodos;
