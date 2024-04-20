import sidebarButtonsBase from "data/typescript/sidebarButtonsBase";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectFolders } from "redux/features/folderSlice";
import { update } from "redux/features/sidebarIsActiveArraySlice";
import { selectAll } from "redux/features/todosSlice";
import getFolderIdByPath from "utils/getFolderIdByPath";
import isFolderPath from "utils/isFolderPath";

const useDetectPathChange = (callback?: () => void) => {
  const d = useDispatch();
  const folders = useSelector(selectFolders);

  const handlePathChange = () => {
    let pathname = window.location.pathname;
    let pathnameIndex = isFolderPath(pathname)
      ? folders.findIndex(
          (folder) => folder.id === getFolderIdByPath(pathname)
        ) + sidebarButtonsBase.length
      : sidebarButtonsBase.findIndex((button) => button.to === pathname);
    d(update(pathnameIndex));
    d(selectAll({ isSelectAll: false }));
    if (callback) callback();
  };

  useEffect(() => {
    window.addEventListener("popstate", handlePathChange, false);
    return () => {
      window.removeEventListener("popstate", handlePathChange, false);
    };
  });
};

export default useDetectPathChange;
