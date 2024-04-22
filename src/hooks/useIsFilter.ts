import pathnames from "data/json/pathnames.json";
import { useLocation } from "react-router-dom";
import getFolderIdByPath from "utils/getFolderIdByPath";
import TodoProps from "utils/interfaces/common/Todo";
import isFolderPath from "utils/isFolderPath";
import useOverdue from "./useOverdue";
import isOverdue from "utils/isOverdue";

const useIsFilter = () => {
  const { pathname } = useLocation();

  const isFilter = (todo: TodoProps) =>
    pathname === pathnames.activePathName
      ? !todo.isFinished! && !todo.isInTrash
      : pathname === pathnames.finishedPathName
      ? todo.isFinished! && !todo.isInTrash
      : pathname === pathnames.overduePathName
      ? !todo.isFinished! && !todo.isInTrash && isOverdue(todo)
      : isFolderPath(pathname)
      ? todo.folderId === getFolderIdByPath(pathname) && !todo.isInTrash
      : pathname === pathnames.trashPathName
      ? todo.isInTrash!
      : pathname === pathnames.allPathName
      ? !todo.isInTrash
      : true;

  return isFilter;
};

export default useIsFilter;
