import TodoProps from "utils/interfaces/common/Todo";

function finishSomeTodos(todos: TodoProps[], identifiers: number[]) {
  for (let todo of todos)
    if (identifiers.includes(todo.id!)) {
      todo.isFinished = true;
      todo.isInTrash = false;
    }
  return todos;
}

export default finishSomeTodos;
