import TodoProps from "../../utils/interfaces/common/Todo";

function finishAllTodos(todos: TodoProps[]) {
  for (let todo of todos) todo.isFinshed = true;
  return todos;
}

export default finishAllTodos;
