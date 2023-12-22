import { title } from "process";
import { Draft } from "redux/features/draftSlice";
import { Form } from "redux/features/formSlice";
import { defaultPriority } from "./Priority";
import { CategoryForm } from "redux/features/categoryFormSlice";
import defaultCategoryIcon from "data/typescript/defaultCategoryIcon";

export default function getFormDraft(
  draft: Draft,
  draftType: "todo" | "category"
): Form | CategoryForm {
  let createTodo = draft.createTodo;
  let createCategory = draft.createCategory;
  let form: Form = {};
  let categoryForm: CategoryForm = {};

  if (draftType === "todo" && createTodo)
    form = {
      title:
        createTodo.title && createTodo.title !== "" ? createTodo.title : "",
      description:
        createTodo.description && createTodo.description !== ""
          ? createTodo.description
          : "",
      priority: createTodo.priority ? createTodo.priority : defaultPriority,
    };
  else if (draftType === "category" && createCategory)
    categoryForm = {
      title:
        createCategory.title && createCategory.title !== ""
          ? createCategory.title
          : "",
      icon:
        createCategory.icon && createCategory.icon !== ""
          ? createCategory.icon
          : defaultCategoryIcon,
    };

  return draftType === "todo" ? form : categoryForm;
}
