import TodoProps from "../../utils/interfaces/common/Todo";

export interface WithConditionCallback {
  isSelectAll: boolean;
  selectConditionCallback?: (todo: TodoProps) => boolean;
}

function selectAllTodos(todos: TodoProps[], condition: WithConditionCallback) {
  if (!condition.selectConditionCallback)
    condition.selectConditionCallback = () => true;

  for (let todo of todos) {
    if (condition.selectConditionCallback(todo))
      todo.isSelected = condition.isSelectAll;
  }
  return todos;
}

export default selectAllTodos;
