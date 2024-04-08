import Folder from "utils/interfaces/common/Folder";
import { EditData } from "../features/folderSlice";

function editFolder(folders: Folder[], editData: EditData) {
  let payload = editData;
  let todoIndex = folders.findIndex((x) => x.id === payload.id);
  let folder = folders[todoIndex];
  let title = payload.editable.title;
  let icon = payload.editable.icon;
  folder.title = title ? title : folder.title;
  folder.icon = icon === undefined ? folder.icon : icon;
  return folders;
}

export default editFolder;
