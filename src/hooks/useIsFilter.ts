import TodoProps from "../utils/interfaces/common/Todo";
import { useLocation } from "react-router-dom";
import isCategoryPath from "../utils/isCategoryPath";
import getCategoryIdByPath from "../utils/getCategoryIdByPath";

const useIsFilter = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  const isFilter = (todo: TodoProps) =>
    pathname === "/active"
      ? !todo.isFinished!
      : pathname === "/finished"
      ? todo.isFinished!
      : isCategoryPath(pathname)
      ? todo.categoryId === getCategoryIdByPath(pathname)
      : true;

  return isFilter;
};

export default useIsFilter;
