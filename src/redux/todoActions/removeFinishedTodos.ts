import TodoProps from "utils/interfaces/common/Todo";

function removeFinishedTodos(todos: TodoProps[]) {
  todos = todos.filter((todo) => !todo.isFinished || todo.isInTrash);
  return todos;
}

export default removeFinishedTodos;
