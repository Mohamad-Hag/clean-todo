import { Preferences } from "redux/features/preferencesSlice";
import TodoProps from "./Todo";
import Category from "./Category";
import { Sidebar } from "redux/features/sidebarSlice";
import { PassCode } from "redux/features/passCodeSlice";
import { Draft } from "redux/features/draftSlice";

interface ImportExportData {
  todoStore: TodoProps[];
  preferencesStore: Preferences;
  categoryStore: Category[];
  sidebarStore: Sidebar;
  passCodeStore: PassCode;
  draftStore: Draft;
}

export default ImportExportData;
