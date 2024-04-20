import defaultSidebarWidth from "data/typescript/defaultSidebarWidth";
import initialDraft from "data/typescript/initialDraft";
import initialPreferences from "data/typescript/initialPreferences";
import useImportData from "./useImportData";

const useResetAccount = () => {
  const importData = useImportData();

  const resetAccount = () => {
    importData({
      folderStore: [],
      preferencesStore: initialPreferences,
      sidebarStore: { status: "shown", width: defaultSidebarWidth },
      todoStore: [],
      passCodeStore: {
        passCodeTimeout: "0",
      },
      draftStore: initialDraft,
    });
  };

  return resetAccount;
};

export default useResetAccount;
