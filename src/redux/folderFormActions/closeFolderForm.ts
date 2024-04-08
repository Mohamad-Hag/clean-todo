import defaultFolderIcon from "data/typescript/defaultFolderIcon";
import { FolderForm } from "../features/folderFormSlice";

export function closeFolderForm(form: FolderForm) {
  form.isOpen = false;
  form.title = "";
  form.icon = defaultFolderIcon;
  form.id = undefined;
  form.mode = "create";
}
