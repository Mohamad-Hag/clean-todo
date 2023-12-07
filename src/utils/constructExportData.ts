import CategoryStore from "./CategoryStore";
import PreferencesStore from "./PreferencesStore";
import SidebarStore from "./SidebarStore";
import TodoStore from "./TodoStore";
import ImportExportData from "./interfaces/common/ExportData";
import JSONString from "./types/JSONString";

export default function constructExportData(): JSONString {
  let todoStore = TodoStore.get();
  let preferencesStore = PreferencesStore.get();
  let categoryStore = CategoryStore.get();
  let sidebarStore = SidebarStore.get();

  let exportData: ImportExportData = {
    categoryStore: categoryStore,
    preferencesStore: preferencesStore,
    sidebarStore: sidebarStore,
    todoStore: todoStore,
  };

  return JSON.stringify(exportData);
}
