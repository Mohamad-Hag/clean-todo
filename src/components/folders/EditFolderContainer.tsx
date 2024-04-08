import { useDispatch } from "react-redux";
import { openAsEdit } from "redux/features/folderFormSlice";
import Folder from "utils/interfaces/common/Folder";
import FolderControl from "./FolderControl";

interface EditFolderContainerProps {
  folder: Folder;
}

export default function EditFolderContainer({
  folder,
}: EditFolderContainerProps) {
  const d = useDispatch();

  const edit = () => {
    d(
      openAsEdit({
        id: folder.id,
        title: folder.title,
        icon: folder.icon,
      })
    );
  };

  return <FolderControl type="edit" onClick={edit} />;
}
