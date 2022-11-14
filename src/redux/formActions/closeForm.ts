import { Form } from "../features/formSlice";

function closeForm(form: Form) {
  form.isOpen = false;
  form.title = "";
  form.description = "";
  form.priority = "medium";
  form.id = undefined;
  form.mode = "create";
}

export default closeForm;
