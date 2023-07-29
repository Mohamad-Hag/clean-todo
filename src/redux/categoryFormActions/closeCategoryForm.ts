import defaultCategoryIcon from "../../data/typescript/defaultCategoryIcon";
import { CategoryForm } from "../features/categoryFormSlice";

export function closeCategoryForm(form: CategoryForm) {
  form.isOpen = false;
  form.title = "";
  form.icon = defaultCategoryIcon;
  form.id = undefined;
  form.mode = "create";
}
