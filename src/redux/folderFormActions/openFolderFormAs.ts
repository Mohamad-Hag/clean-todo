import defaultFolderIcon from "data/typescript/defaultFolderIcon";
import { FolderForm } from "../features/folderFormSlice";
import { FormMode } from "../features/formSlice";

function openFolderFormAs(
  form: FolderForm,
  mode?: FormMode,
  updatedForm?: FolderForm
) {
  if (!mode) {
    form.isOpen = true;
    return;
  }
  let title = updatedForm?.title;
  let icon = updatedForm?.icon;
  form.isOpen = true;
  form.mode = mode;
  form.id = mode === "edit" || mode === "draft" ? updatedForm?.id : form.id;
  form.title = mode === "edit" || mode === "draft" ? title : "";
  form.icon = mode === "edit" || mode === "draft" ? icon : defaultFolderIcon;
}

export default openFolderFormAs;
