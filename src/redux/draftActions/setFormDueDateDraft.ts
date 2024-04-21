import { Draft } from "redux/features/draftSlice";

function setFormDueDateDraft(draft: Draft, dueDate: string) {
  draft.createTodo.dueDate = dueDate;
  return draft;
}

export default setFormDueDateDraft;
