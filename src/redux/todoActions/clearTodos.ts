import TodoProps from "utils/interfaces/common/Todo";

function clearTodos(todos: TodoProps[]) {
  todos = todos.map((todo) => {
    if (!todo.isInTrash) todo.isInTrash = true;
    return todo;
  }); // Keep the todos that exist in trash.
  return todos;
}

export default clearTodos;
