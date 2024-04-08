import TodoProps from "utils/interfaces/common/Todo";
import { useLocation } from "react-router-dom";
import isFolderPath from "utils/isFolderPath";
import getFolderIdByPath from "utils/getFolderIdByPath";
import pathnames from "data/json/pathnames.json";

const useIsFilter = () => {
  const { pathname } = useLocation();

  const isFilter = (todo: TodoProps) =>
    pathname === pathnames.activePathName
      ? !todo.isFinished! && !todo.isInTrash
      : pathname === pathnames.finishedPathName
      ? todo.isFinished! && !todo.isInTrash
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
