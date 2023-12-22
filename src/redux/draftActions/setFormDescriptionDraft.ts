import { Draft } from "redux/features/draftSlice";

function setFormDescriptionDraft(draft: Draft, description: string) {
  draft.createTodo.description = description;
  return draft;
}

export default setFormDescriptionDraft;
