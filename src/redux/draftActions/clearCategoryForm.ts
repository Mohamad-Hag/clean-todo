import initialDraft from "data/typescript/initialDraft";
import { Draft } from "redux/features/draftSlice";

function clearCategoryForm(draft: Draft) {
  draft.createCategory = initialDraft.createCategory;
  return draft;
}

export default clearCategoryForm;
