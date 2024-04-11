import sidebarButtonsBase from "data/typescript/sidebarButtonsBase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectFolders } from "redux/features/folderSlice";
import {
  selectSidebarIsActiveArray,
  update,
} from "redux/features/sidebarIsActiveArraySlice";
import pathnames from "data/json/pathnames.json";
import getIsActiveArrayActiveIndex from "utils/getIsActiveArrayActiveIndex";
import { selectAll } from "redux/features/todosSlice";

const useSidebarNavigate = () => {
  const navigate = useNavigate();
  const d = useDispatch();
  const folders = useSelector(selectFolders);
  const sidebarButtonsLength = sidebarButtonsBase.length;
  const length = folders.length + sidebarButtonsLength;
  const isActiveArray = useSelector(selectSidebarIsActiveArray);
  const activeIndex = getIsActiveArrayActiveIndex(isActiveArray);

  const navigateByIndex = (index: number) => {
    if (index > 8) return; // Because only numbers from 1 -> 9 are allowed.

    let link = "";

    if (index > 8 || index >= length) return;
    else if (index < sidebarButtonsLength) link = sidebarButtonsBase[index].to;
    else if (index >= sidebarButtonsLength) {
      let folderIndex = index - sidebarButtonsLength;
      let folderId = folders[folderIndex].id;
      link = `${pathnames.foldersPathName}/folder-${folderId}`;
    } else link = pathnames.allPathName;

    navigate(link);
    d(update(index));
    d(selectAll({ isSelectAll: false }));
  };

  const navigateUp = () => {
    let index = activeIndex === 0 ? length - 1 : activeIndex - 1;
    navigateByIndex(index);
  };

  const navigateDown = () => {
    let index = activeIndex === length - 1 ? 0 : activeIndex + 1;
    navigateByIndex(index);
  };

  return { navigateUp, navigateDown, navigateByIndex };
};

export default useSidebarNavigate;
