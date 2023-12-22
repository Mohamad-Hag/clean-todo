import { Draft } from "redux/features/draftSlice";

function setCategoryFormIconDraft(draft: Draft, icon: string) {
  draft.createCategory.icon = icon;
  return draft;
}

export default setCategoryFormIconDraft;
