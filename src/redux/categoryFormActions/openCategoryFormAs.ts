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
  form.isOpen = true;
  form.mode = mode;
  form.id = mode === "edit" ? updatedForm?.id : form.id;
  form.title = mode === "edit" ? title : "";
}

export default openCategoryFormAs;
