import initialPreferences from "data/typescript/initialPreferences";
import useImportData from "./useImportData";
import initialDraft from "data/typescript/initialDraft";

const useResetAccount = () => {
  const importData = useImportData();

  const resetAccount = () => {
    importData({
      categoryStore: [],
      preferencesStore: initialPreferences,
      sidebarStore: { status: "shown" },
      todoStore: [],
      passCodeStore: {
        passCodeTimeout: "none",
      },
      draftStore: initialDraft,
    });
  };

  return resetAccount;
};

export default useResetAccount;
