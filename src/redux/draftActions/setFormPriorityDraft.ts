import { Draft } from "redux/features/draftSlice";
import Priority from "utils/types/Priority";

function setFormPriorityDraft(draft: Draft, priority: Priority) {
  draft.createTodo.priority = priority;
  return draft;
}

export default setFormPriorityDraft;
