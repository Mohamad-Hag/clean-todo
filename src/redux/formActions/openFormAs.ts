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
  form.id = mode === "edit" ? updatedForm?.id : form.id;
  form.title = mode === "edit" ? title : "";
  form.description = mode === "edit" ? description : "";
  form.priority = mode === "edit" ? priority : "law";
}

export default openFormAs;
