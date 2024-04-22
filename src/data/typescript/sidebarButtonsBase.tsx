import { BiCheck, BiListUl, BiStar, BiTrash } from "react-icons/bi";
import { FaRegCalendarTimes } from "react-icons/fa";
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
    to: "/overdue",
    icon: <FaRegCalendarTimes />,
  },
  {
    to: "/trash",
    icon: <BiTrash />,
  },
];

export default sidebarButtonsBase;