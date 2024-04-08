import { Draft } from "redux/features/draftSlice";

function setFolderFormIconDraft(draft: Draft, icon: string) {
  draft.createFolder.icon = icon;
  return draft;
}

export default setFolderFormIconDraft;
