import TodoProps from "../../utils/interfaces/common/Todo";

function removeTodo(todos: TodoProps[], id: number) {
  todos = todos.filter((todo) => todo.id !== id);
  return todos;
}

export default removeTodo;
