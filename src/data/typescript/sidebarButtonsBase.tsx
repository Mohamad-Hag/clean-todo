import { BiCheck, BiListUl, BiStar, BiTrash } from "react-icons/bi";
import SidebarButtonBase from "utils/interfaces/common/SidebarButtonBase";

const sidebarButtonsBase: SidebarButtonBase[] = [
  {
    to: "/",
    icon: <BiListUl />,
  },
  {
    to: "/active",
    icon: <BiStar />,
  },
  {
    to: "/finished",
    icon: <BiCheck />,
  },
  {
    to: "/trash",
    icon: <BiTrash />,
  },
];

export default sidebarButtonsBase;