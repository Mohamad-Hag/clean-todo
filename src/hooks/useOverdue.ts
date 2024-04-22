import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";
import isOverdue from "utils/isOverdue";

const useOverdue = () => {
  const todos = useSelector(selectTodos);

  // Get todos that not have overdue set.
  const noOverdue = todos.filter((todo) => !todo.dueDate);

  // Get all not overdue todos.
  const reverseOverdue = todos.filter(
    (todo) => !todo.isFinished! && !todo.isInTrash && !isOverdue(todo)
  );

  // Get all overdue todos.
  const allOverdue = todos.filter(
    (todo) => !todo.isFinished! && !todo.isInTrash && isOverdue(todo)
  );

  return { allOverdue, reverseOverdue, noOverdue };
};

export default useOverdue;
