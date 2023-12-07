import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";
import { replace as replaceCategories } from "redux/features/categorySlice";
import { replace as replacePreferences } from "redux/features/preferencesSlice";
import { replace as replaceSidebar } from "redux/features/sidebarSlice";
import { replace as replaceTodos } from "redux/features/todosSlice";
import ImportExportData from "utils/interfaces/common/ExportData";
import labels from "data/json/ui-labels.json";

const useImportData = () => {
  let d = useDispatch();

  return (importData: ImportExportData): string => {
    let todoStore = importData.todoStore;
    let categoryStore = importData.categoryStore;
    let preferencesStore = importData.preferencesStore;
    let sidebarStore = importData.sidebarStore;
    let isImportDataValid =
      todoStore && categoryStore && preferencesStore && sidebarStore;

    if (!isImportDataValid) {
      return labels.cantImport;
    }

    d(replaceTodos(todoStore));
    d(replaceCategories(categoryStore));
    d(replacePreferences(preferencesStore));
    d(replaceSidebar(sidebarStore));
    d(close());

    return "";
  };
};

export default useImportData;
