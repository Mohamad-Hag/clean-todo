import { Form, FormMode } from "../features/formSlice";

function openFormAs(form: Form, mode?: FormMode, updatedForm?: Form) {
  if (!mode) {
    form.isOpen = true;
    return;
  }
  let title = updatedForm?.title;
  let description = updatedForm?.description;
  let priority = updatedForm?.priority;
  form.isOpen = true;
  form.mode = mode;
  form.id = mode === "edit" || mode === "draft" ? updatedForm?.id : form.id;
  form.title = mode === "edit" || mode === "draft" ? title : "";
  form.description = mode === "edit" || mode === "draft" ? description : "";
  form.priority = mode === "edit" || mode === "draft" ? priority : "low";
  form.folderId =
    mode === "edit" || mode === "draft" ? updatedForm?.folderId : form.folderId;
  form.dueDate =
    mode === "edit" || mode === "draft" ? updatedForm?.dueDate : form.dueDate;
}

export default openFormAs;
