import { Draft } from "redux/features/draftSlice";

export default function isDraft(draft: Draft, draftType: "todo" | "category") {
  let createTodo = draft.createTodo;
  let createCategory = draft.createCategory;

  if (draftType === "todo" && createTodo)
    return (
      (createTodo.title && createTodo.title !== "") ||
      (createTodo.description && createTodo.description !== "") ||
      createTodo.priority
    );

  if (draftType === "category" && createCategory)
    return (
      (createCategory.title && createCategory.title !== "") ||
      (createCategory.icon && createCategory.icon !== "")
    );

  return false;
}
