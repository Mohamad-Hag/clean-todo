import { BiCheck, BiFlag, BiListUl, BiStar, BiTrash } from "react-icons/bi";
import { URLString } from "components/layout/sidebar/SidebarButton";
import LanguageStore from "utils/local-storage/LanguageStore";
import labels from "data/typescript/uiLabels";

interface SidebarButton {
  to: URLString;
  title: string;
  icon: React.ReactElement;
}

const language = LanguageStore.get();

const sidebarButtons: SidebarButton[] = [
  {
    title: labels[language.code].all,
    to: "/",
    icon: <BiListUl />,
  },
  {
    title: labels[language.code].active,
    to: "/active",
    icon: <BiStar />,
  },
  {
    title: labels[language.code].finished,
    to: "/finished",
    icon: <BiCheck />,
  },
  {
    title: labels[language.code].trash,
    to: "/trash",
    icon: <BiTrash />,
  },
];

export default sidebarButtons;
