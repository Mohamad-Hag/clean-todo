import {
  BiAlarm,
  BiBook,
  BiBus,
  BiFolder,
  BiHeart,
  BiHome,
  BiLabel,
  BiMapAlt,
  BiStar,
} from "react-icons/bi";
import { TbFolder } from "react-icons/tb";

interface FolderIcon {
  icon: React.ReactElement;
  title: string;
}

const folderIcons: FolderIcon[] = [
  {
    title: "folder",
    icon: <TbFolder />,
  },
  {
    title: "label",
    icon: <BiLabel />,
  },
  {
    title: "star",
    icon: <BiStar />,
  },
  {
    title: "heart",
    icon: <BiHeart />,
  },
  {
    title: "home",
    icon: <BiHome />,
  },
  {
    title: "bus",
    icon: <BiBus />,
  },
  {
    title: "book",
    icon: <BiBook />,
  },
  {
    title: "map",
    icon: <BiMapAlt />,
  },
  {
    title: "alarm",
    icon: <BiAlarm />,
  },
];

export default folderIcons;
