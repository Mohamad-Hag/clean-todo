import {
  BiAlarm,
  BiBook,
  BiBus,
  BiHeart,
  BiHome,
  BiLabel,
  BiMapAlt,
  BiStar,
} from "react-icons/bi";

interface CategoryIcon {
  icon: React.ReactElement;
  title: string;
}

const categoryIcons: CategoryIcon[] = [
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

export default categoryIcons;
