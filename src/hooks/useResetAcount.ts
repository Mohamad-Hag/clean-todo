import initialPreferences from "data/typescript/initialPreferences";
import useImportData from "./useImportData";

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
    });
  };

  return resetAccount;
};

export default useResetAccount;
