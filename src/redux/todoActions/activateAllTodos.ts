import TodoProps from "utils/interfaces/common/Todo";

function activateAllTodos(todos: TodoProps[]) {
  for (let todo of todos) todo.isFinished = false;
  return todos;
}

export default activateAllTodos;
