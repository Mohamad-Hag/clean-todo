import TodoProps from "utils/interfaces/common/Todo";

function clearTodos(todos: TodoProps[]) {
  todos = todos.filter((todo) => todo.isInTrash); // Keep the todos that exist in trash.
  return todos;
}

export default clearTodos;
