import TodoProps from "utils/interfaces/common/Todo";

function restoreSomeTodos(todos: TodoProps[], identifiers: number[]) {
  for (let todo of todos)
    if (identifiers.includes(todo.id!)) todo.isInTrash = false;

  return todos;
}

export default restoreSomeTodos;
