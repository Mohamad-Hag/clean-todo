import CategoryStore from "./local-storage/CategoryStore";
import PassCodeStore from "./local-storage/PassCodeStore";
import PreferencesStore from "./local-storage/PreferencesStore";
import SidebarStore from "./local-storage/SidebarStore";
import TodoStore from "./local-storage/TodoStore";
import ImportExportData from "./interfaces/common/ImportExportData";
import JSONString from "./types/JSONString";
import DraftStore from "./local-storage/DraftStore";

export default function constructExportData(): JSONString {
  let todoStore = TodoStore.get();
  let preferencesStore = PreferencesStore.get();
  let categoryStore = CategoryStore.get();
  let sidebarStore = SidebarStore.get();
  let passCodeStore = PassCodeStore.get();
  let draftStore = DraftStore.get();

  let exportData: ImportExportData = {
    categoryStore: categoryStore,
    preferencesStore: preferencesStore,
    sidebarStore: sidebarStore,
    todoStore: todoStore,
    passCodeStore: passCodeStore,
    draftStore: draftStore,
  };

  return JSON.stringify(exportData);
}
