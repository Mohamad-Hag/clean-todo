import { Draft } from "redux/features/draftSlice";

export default function isDraft(draft: Draft, draftType: "todo" | "folder") {
  let createTodo = draft.createTodo;
  let createFolder = draft.createFolder;

  if (draftType === "todo" && createTodo)
    return (
      (createTodo.title && createTodo.title !== "") ||
      (createTodo.description && createTodo.description !== "") ||
      createTodo.priority
    );

  if (draftType === "folder" && createFolder)
    return (
      (createFolder.title && createFolder.title !== "") ||
      (createFolder.icon && createFolder.icon !== "")
    );

  return false;
}
