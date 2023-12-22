import defaultCategoryIcon from "data/typescript/defaultCategoryIcon";
import { CategoryForm } from "../features/categoryFormSlice";
import { FormMode } from "../features/formSlice";

function openCategoryFormAs(
  form: CategoryForm,
  mode?: FormMode,
  updatedForm?: CategoryForm
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
  form.icon = mode === "edit" || mode === "draft" ? icon : defaultCategoryIcon;
}

export default openCategoryFormAs;
