import { Draft } from "redux/features/draftSlice";

function setFormTitleDraft(draft: Draft, title: string) {
  draft.createTodo.title = title;
  return draft;
}

export default setFormTitleDraft;
