import TodoProps from "../../utils/interfaces/common/Todo";

function removeFinishedTodos(todos: TodoProps[]) {
  todos = todos.filter((todo) => !todo.isFinshed);
  return todos;
}

export default removeFinishedTodos;
