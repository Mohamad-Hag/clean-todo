import initialPreferences from "data/typescript/initialPreferences";
import useImportData from "./useImportData";
import initialDraft from "data/typescript/initialDraft";

const useResetAccount = () => {
  const importData = useImportData();

  const resetAccount = () => {
    importData({
      folderStore: [],
      preferencesStore: initialPreferences,
      sidebarStore: { status: "shown" },
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
