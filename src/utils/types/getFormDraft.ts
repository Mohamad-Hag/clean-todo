import defaultFolderIcon from "data/typescript/defaultFolderIcon";
import { FolderForm } from "redux/features/folderFormSlice";
import { Draft } from "redux/features/draftSlice";
import { Form } from "redux/features/formSlice";
import { defaultPriority } from "./Priority";

export default function getFormDraft(
  draft: Draft,
  draftType: "todo" | "folder"
): Form | FolderForm {
  let createTodo = draft.createTodo;
  let createFolder = draft.createFolder;
  let form: Form = {};
  let folderForm: FolderForm = {};

  if (draftType === "todo" && createTodo)
    form = {
      title:
        createTodo.title && createTodo.title !== "" ? createTodo.title : "",
      description:
        createTodo.description && createTodo.description !== ""
          ? createTodo.description
          : "",
      priority: createTodo.priority ? createTodo.priority : defaultPriority,
      folderId: createTodo.folderId,
      dueDate: createTodo.dueDate,
    };
  else if (draftType === "folder" && createFolder)
    folderForm = {
      title:
        createFolder.title && createFolder.title !== ""
          ? createFolder.title
          : "",
      icon:
        createFolder.icon && createFolder.icon !== ""
          ? createFolder.icon
          : defaultFolderIcon,
    };

  return draftType === "todo" ? form : folderForm;
}
