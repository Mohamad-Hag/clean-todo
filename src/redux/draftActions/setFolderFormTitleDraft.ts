import { Draft } from "redux/features/draftSlice";

function setFolderFormTitleDraft(draft: Draft, title: string) {
  draft.createFolder.title = title;
  return draft;
}

export default setFolderFormTitleDraft;
