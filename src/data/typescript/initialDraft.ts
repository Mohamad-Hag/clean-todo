import { Draft } from "redux/features/draftSlice";
import defaultCategoryIcon from "./defaultCategoryIcon";
import { defaultPriority } from "utils/types/Priority";

const initialDraft: Draft = {
  createCategory: {
    title: "",
    icon: defaultCategoryIcon,
  },
  createTodo: {
    title: "",
    description: "",
    priority: defaultPriority,
  },
};

export default initialDraft;
