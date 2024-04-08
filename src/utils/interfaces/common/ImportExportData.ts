import { Preferences } from "redux/features/preferencesSlice";
import TodoProps from "./Todo";
import Folder from "./Folder";
import { Sidebar } from "redux/features/sidebarSlice";
import { PassCode } from "redux/features/passCodeSlice";
import { Draft } from "redux/features/draftSlice";

interface ImportExportData {
  todoStore: TodoProps[];
  preferencesStore: Preferences;
  folderStore: Folder[];
  sidebarStore: Sidebar;
  passCodeStore: PassCode;
  draftStore: Draft;
}

export default ImportExportData;
