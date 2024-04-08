import TodoProps from "utils/interfaces/common/Todo";

function replaceTodos(todos: TodoProps[], newTodos: TodoProps[]) {
  todos = newTodos;
  return todos;
}

export default replaceTodos;
