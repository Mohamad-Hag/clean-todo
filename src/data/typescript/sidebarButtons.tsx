import { BiCheck, BiFlag, BiListUl, BiStar } from "react-icons/bi";
import { URLString } from "../../components/layout/sidebar/SidebarButton";

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
  {
    title: "High Priority Todos",
    to: "/high",
    icon: <BiFlag />,
  },
  {
    title: "Medium Priority Todos",
    to: "/medium",
    icon: <BiFlag />,
  },
  {
    title: "Low Priority Todos",
    to: "/low",
    icon: <BiFlag />,
  },
];

export default sidebarButtons;
