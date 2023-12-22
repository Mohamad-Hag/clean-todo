import { Draft } from "redux/features/draftSlice";

function setCategoryFormTitleDraft(draft: Draft, title: string) {
  draft.createCategory.title = title;
  return draft;
}

export default setCategoryFormTitleDraft;
