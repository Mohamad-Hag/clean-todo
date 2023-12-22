import { Draft } from "redux/features/draftSlice";

function replaceDraft(draft: Draft, newDraft: Draft) {
  draft = newDraft;
  return draft;
}

export default replaceDraft;
