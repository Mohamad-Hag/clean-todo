import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "redux/features/folderSlice";
import { update } from "redux/features/sidebarIsActiveArraySlice";
import { addFolderSome, selectTodos } from "redux/features/todosSlice";
import Folder from "utils/interfaces/common/Folder";
import FolderControl from "./FolderControl";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import useAlert from "hooks/useAlert";

interface RemoveFolderContainerProps {
  folder: Folder;
}

export default function RemoveFolderContainer({
  folder,
}: RemoveFolderContainerProps) {
  const todos = useSelector(selectTodos);
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
    update(0);
    navigate("/");
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
