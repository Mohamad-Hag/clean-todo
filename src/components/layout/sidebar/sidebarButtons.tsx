import { URLString } from "./SidebarButton";
import { BiCheck, BiListUl, BiStar, BiWindow, BiWindows } from "react-icons/bi";
import labels from "../../../data/json/ui-labels.json";

interface SidebarButton {
  to: URLString;
  title: string;
  icon: React.ReactElement;
}

const sidebarButtons: SidebarButton[] = [
  {
    title: labels.allTodos,
    to: "/",
    icon: <BiListUl />,
  },
  {
    title: labels.activeTodos,
    to: "/active",
    icon: <BiStar />,
  },
  {
    title: labels.finishedTodos,
    to: "/finished",
    icon: <BiCheck />,  
  }
];

export default sidebarButtons;
