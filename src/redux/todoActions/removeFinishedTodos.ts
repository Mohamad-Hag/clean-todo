import TodoProps from "../../utils/interfaces/common/Todo";

function removeFinishedTodos(todos: TodoProps[]) {
  todos = todos.filter((todo) => !todo.isFinished);
  return todos;
}

export default removeFinishedTodos;
