import TodoProps from "../../utils/interfaces/common/Todo";

function selectAllTodos(todos: TodoProps[], isSelected: boolean = true) {
  for (let todo of todos) todo.isSelected = isSelected;
  return todos;
}

export default selectAllTodos;
