import initialDraft from "data/typescript/initialDraft";
import { Draft } from "redux/features/draftSlice";

function clearForm(draft: Draft) {
  draft.createTodo = initialDraft.createTodo;
  return draft;
}

export default clearForm;
