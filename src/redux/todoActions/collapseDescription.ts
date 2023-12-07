import TodoProps from "utils/interfaces/common/Todo";

function collapseDescription(todos: TodoProps[], id: number): TodoProps[] {
  let todoIndex = todos.findIndex((x) => x.id === id);
  let todo = todos[todoIndex];

  todo.isDescriptionExpanded = false;

  return todos;
}

export default collapseDescription;
