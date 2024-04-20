import { Draft } from "redux/features/draftSlice";

function setFormFolderIdDraft(draft: Draft, folderId: number | undefined) {
  draft.createTodo.folderId = folderId;
  return draft;
}

export default setFormFolderIdDraft;
