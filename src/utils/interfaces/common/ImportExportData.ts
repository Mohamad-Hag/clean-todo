import { Preferences } from "redux/features/preferencesSlice";
import TodoProps from "./Todo";
import Category from "./Category";
import { Sidebar } from "redux/features/sidebarSlice";
import { PassCode } from "redux/features/passCodeSlice";

interface ImportExportData {
  todoStore: TodoProps[];
  preferencesStore: Preferences;
  categoryStore: Category[];
  sidebarStore: Sidebar;
  passCodeStore: PassCode;
}

export default ImportExportData;
