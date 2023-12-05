import { BiCheck, BiFlag, BiListUl, BiStar, BiTrash } from "react-icons/bi";
import { URLString } from "components/layout/sidebar/SidebarButton";

interface SidebarButton {
  to: URLString;
  title: string;
  icon: React.ReactElement;
}

const sidebarButtons: SidebarButton[] = [
  {
    title: "All",
    to: "/",
    icon: <BiListUl />,
  },
  {
    title: "Active",
    to: "/active",
    icon: <BiStar />,
  },
  {
    title: "Finished",
    to: "/finished",
    icon: <BiCheck />,
  },
  {
    title: "Trash",
    to: "/trash",
    icon: <BiTrash />,
  },
];

export default sidebarButtons;
