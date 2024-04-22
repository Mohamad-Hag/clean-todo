import pathnames from "data/json/pathnames.json";
import TodoProps from "utils/interfaces/common/Todo";
import isOverdue from "./isOverdue";

const countTodosByPage = (todos: TodoProps[], pathname: string): number => {
  let allTodos = todos.filter((todo) => !todo.isInTrash);
  let activeTodos = todos.filter((todo) => !todo.isFinished && !todo.isInTrash);
  let finishedTodos = todos.filter(
    (todo) => todo.isFinished && !todo.isInTrash
  );
  let trashTodos = todos.filter((todo) => todo.isInTrash);
  const overdueTodos = todos.filter(
    (todo) => !todo.isFinished! && !todo.isInTrash && isOverdue(todo)
  );

  switch (pathname) {
    case pathnames.allPathName:
      return allTodos.length;
    case pathnames.activePathName:
      return activeTodos.length;
    case pathnames.finishedPathName:
      return finishedTodos.length;
    case pathnames.overduePathName:
      return overdueTodos.length;
    case pathnames.trashPathName:
      return trashTodos.length;
    default:
      return allTodos.length;
  }
};

export default countTodosByPage;
