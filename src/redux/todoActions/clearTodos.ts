import TodoProps from "utils/interfaces/common/Todo";

function clearTodos(todos: TodoProps[]) {
  todos = [];
  return todos;
}

export default clearTodos;
