import { BiCheck, BiListUl, BiStar, BiTrash } from "react-icons/bi";
import { FaRegCalendarTimes } from "react-icons/fa";
import SidebarButtonBase from "utils/interfaces/common/SidebarButtonBase";

const sidebarButtonsBase: SidebarButtonBase[] = [
  {
    to: "/",
    isDroppable: true,
    icon: <BiListUl />,
  },
  {
    to: "/active",
    icon: <BiStar />,
    isDroppable: true,
  },
  {
    to: "/finished",
    icon: <BiCheck />,
    isDroppable: true,
  },
  {
    to: "/overdue",
    icon: <FaRegCalendarTimes />,
    isDroppable: false,
  },
  {
    to: "/trash",
    icon: <BiTrash />,
    isDroppable: true,
  },
];

export default sidebarButtonsBase;