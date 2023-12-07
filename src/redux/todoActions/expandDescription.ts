import TodoProps from "utils/interfaces/common/Todo";

function expandDescription(todos: TodoProps[], id: number): TodoProps[] {
  let todoIndex = todos.findIndex((x) => x.id === id);
  let todo = todos[todoIndex];

  todo.isDescriptionExpanded = true;

  return todos;
}

export default expandDescription;
