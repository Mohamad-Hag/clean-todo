import sidebarButtonsBase from "data/typescript/sidebarButtonsBase";
import labels from "data/typescript/uiLabels";
import convertPathnamesToNames from "utils/convertPathnamesToNames";
import SidebarButton from "utils/interfaces/common/SidebarButton";
import useLanguage from "./useLanguage";

const useGetSidebarButtons = () => {
  const { language } = useLanguage();
  const sidebarButtonsTitles: string[] = convertPathnamesToNames();

  const sidebarButtons: SidebarButton[] = sidebarButtonsTitles.map(
    (sidebarButtonTitle, index) => ({
      ...sidebarButtonsBase[index],
      title: (labels[language.code] as any)[sidebarButtonTitle],
    })
  );

  return sidebarButtons;
};

export default useGetSidebarButtons;
