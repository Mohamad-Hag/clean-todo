import TodoProps from "utils/interfaces/common/Todo";

function activateSomeTodos(todos: TodoProps[], identifiers: number[]) {
  for (let todo of todos)
    if (identifiers.includes(todo.id!)) {
      todo.isFinished = false;
      todo.isInTrash = false;
    }
  return todos;
}

export default activateSomeTodos;
