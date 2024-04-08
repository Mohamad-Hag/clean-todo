import { Draft } from "redux/features/draftSlice";
import defaultFolderIcon from "./defaultFolderIcon";
import { defaultPriority } from "utils/types/Priority";

const initialDraft: Draft = {
  createFolder: {
    title: "",
    icon: defaultFolderIcon,
  },
  createTodo: {
    title: "",
    description: "",
    priority: defaultPriority,
  },
};

export default initialDraft;
