import pathnames from "data/json/pathnames.json";
import TodoProps from "utils/interfaces/common/Todo";

const countTodosByPage = (todos: TodoProps[], pathname: string): number => {
  let allTodos = todos.filter((todo) => !todo.isInTrash);
  let activeTodos = todos.filter((todo) => !todo.isFinished);
  let finishedTodos = todos.filter((todo) => todo.isFinished);
  let trashTodos = todos.filter((todo) => todo.isInTrash);

  switch (pathname) {
    case pathnames.allPathName:
      return allTodos.length;
    case pathnames.activePathName:
      return activeTodos.length;
    case pathnames.finishedPathName:
      return finishedTodos.length;
    case pathnames.trashPathName:
      return trashTodos.length;
    default:
      return allTodos.length;
  }
};

export default countTodosByPage;
