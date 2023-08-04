import TodoProps from "utils/interfaces/common/Todo";

function finishAllTodos(todos: TodoProps[]) {
  for (let todo of todos) todo.isFinished = true;
  return todos;
}

export default finishAllTodos;
