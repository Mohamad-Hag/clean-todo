import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";
import { replace as replaceFolders } from "redux/features/folderSlice";
import { replace as replacePreferences } from "redux/features/preferencesSlice";
import { replace as replaceSidebar } from "redux/features/sidebarSlice";
import { replace as replaceTodos } from "redux/features/todosSlice";
import { replace as replacePassCode } from "redux/features/passCodeSlice";
import { replace as replaceDraft } from "redux/features/draftSlice";
import ImportExportData from "utils/interfaces/common/ImportExportData";
import labels from "data/typescript/uiLabels";
import useLanguage from "./useLanguage";

const useImportData = () => {
  const { language } = useLanguage();
  let d = useDispatch();

  return (importData: ImportExportData): string => {
    let todoStore = importData.todoStore;
    let folderStore = importData.folderStore;
    let preferencesStore = importData.preferencesStore;
    let sidebarStore = importData.sidebarStore;
    let passCodeStore = importData.passCodeStore;
    let draftStore = importData.draftStore;
    let isImportDataValid =
      todoStore &&
      folderStore &&
      preferencesStore &&
      sidebarStore &&
      passCodeStore &&
      draftStore;

    if (!isImportDataValid) {
      return labels[language.code].cantImport;
    }

    d(replaceTodos(todoStore));
    d(replaceFolders(folderStore));
    d(replacePreferences(preferencesStore));
    d(replaceSidebar(sidebarStore));
    d(replacePassCode(passCodeStore));
    d(replaceDraft(draftStore));
    d(close());

    return "";
  };
};

export default useImportData;
