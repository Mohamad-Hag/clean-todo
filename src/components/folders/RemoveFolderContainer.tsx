import pathnames from "data/json/pathnames.json";
import sidebarButtonsBase from "data/typescript/sidebarButtonsBase";
import labels from "data/typescript/uiLabels";
import useAlert from "hooks/useAlert";
import useLanguage from "hooks/useLanguage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove, selectFolders } from "redux/features/folderSlice";
import {
  selectSidebarIsActiveArray,
  update,
} from "redux/features/sidebarIsActiveArraySlice";
import {
  addFolderSome,
  selectAll,
  selectTodos,
} from "redux/features/todosSlice";
import getIsActiveArrayActiveIndex from "utils/getIsActiveArrayActiveIndex";
import Folder from "utils/interfaces/common/Folder";
import FolderControl from "./FolderControl";

interface RemoveFolderContainerProps {
  folder: Folder;
}

export default function RemoveFolderContainer({
  folder,
}: RemoveFolderContainerProps) {
  const todos = useSelector(selectTodos);
  const folders = useSelector(selectFolders);
  const foldersLength = folders.length;
  const isActiveArray = useSelector(selectSidebarIsActiveArray);
  const activeIndex = getIsActiveArrayActiveIndex(isActiveArray);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { open, setTitle, setDescription, setOnOk, close } = useAlert();
  const d = useDispatch();

  const removeFolderAlert = () => {
    open();
    setTitle(labels[language.code].removeFolder);
    setDescription(labels[language.code].sureRemoveFolder);
    setOnOk(remove_);
  };

  const remove_ = () => {
    removeFolder();
    unlinkFolderFromRelatedTodos();
    updateActiveSidebarButton();
  };

  const removeFolder = () => {
    d(remove(folder.id!));
    close();
  };

  const updateActiveSidebarButton = () => {
    const updatedIndex = foldersLength === 1 ? 0 : sidebarButtonsBase.length;
    const foldersAfterRemove = folders.filter((fldr) => folder.id !== fldr.id);
    const navigationTo =
      foldersLength === 1
        ? pathnames.allPathName
        : `${pathnames.foldersPathName}/folder-${foldersAfterRemove[0].id}`;

    d(update(updatedIndex));
    navigate(navigationTo);
    d(selectAll({ isSelectAll: false }));
  };

  const unlinkFolderFromRelatedTodos = () => {
    let itemIds = todos
      .filter((todo) => todo.folderId === folder.id!)
      .map((todo) => todo.id);
    d(
      addFolderSome({
        folderId: undefined,
        itemIds: itemIds,
      })
    );
  };

  return <FolderControl type="remove" onClick={removeFolderAlert} />;
}
