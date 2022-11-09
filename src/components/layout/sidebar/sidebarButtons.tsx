import { URLString } from "./SidebarButton";
import { BiCheck, BiListUl, BiStar } from "react-icons/bi";

interface SidebarButton {
  to: URLString;
  title: string;
  icon: React.ReactElement;
}

const sidebarButtons: SidebarButton[] = [
  {
    title: "All Todos",
    to: "/",
    icon: <BiListUl />,
  },
  {
    title: "Active Todos",
    to: "/active",
    icon: <BiStar />,
  },
  {
    title: "Finished Todos",
    to: "/finished",
    icon: <BiCheck />,  
  },
];

export default sidebarButtons;
