import { Preferences } from "redux/features/preferencesSlice";
import TodoProps from "./Todo";
import Category from "./Category";
import { Sidebar } from "redux/features/sidebarSlice";

interface ImportExportData {
  todoStore: TodoProps[];
  preferencesStore: Preferences;
  categoryStore: Category[];
  sidebarStore: Sidebar;
}

export default ImportExportData;
