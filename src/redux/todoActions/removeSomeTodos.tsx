import TodoProps from "utils/interfaces/common/Todo";

function removeSomeTodos(todos: TodoProps[], identifiers: number[]) {
  todos = todos.filter((todo) => !identifiers.includes(todo.id!));
  return todos;
}

export default removeSomeTodos;
