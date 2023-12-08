import CategoryStore from "./local-storage/CategoryStore";
import PassCodeStore from "./local-storage/PassCodeStore";
import PreferencesStore from "./local-storage/PreferencesStore";
import SidebarStore from "./local-storage/SidebarStore";
import TodoStore from "./local-storage/TodoStore";
import ImportExportData from "./interfaces/common/ImportExportData";
import JSONString from "./types/JSONString";

export default function constructExportData(): JSONString {
  let todoStore = TodoStore.get();
  let preferencesStore = PreferencesStore.get();
  let categoryStore = CategoryStore.get();
  let sidebarStore = SidebarStore.get();
  let passCodeStore = PassCodeStore.get();

  let exportData: ImportExportData = {
    categoryStore: categoryStore,
    preferencesStore: preferencesStore,
    sidebarStore: sidebarStore,
    todoStore: todoStore,
    passCodeStore: passCodeStore,
  };

  return JSON.stringify(exportData);
}
