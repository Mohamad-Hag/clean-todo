import initialDraft from "data/typescript/initialDraft";
import { Draft } from "redux/features/draftSlice";

function clearFolderForm(draft: Draft) {
  draft.createFolder = initialDraft.createFolder;
  return draft;
}

export default clearFolderForm;
