import TodoProps from "utils/interfaces/common/Todo";
import { ItemIds_CategoryId } from "../features/todosSlice";

function addCategorySomeTodos(
  todos: TodoProps[],
  itemIds_categoryId: ItemIds_CategoryId
) {
  for (let todo of todos)
    if (itemIds_categoryId.itemIds.includes(todo.id!))
      todo.categoryId = itemIds_categoryId.categoryId;
  return todos;
}

export default addCategorySomeTodos;
