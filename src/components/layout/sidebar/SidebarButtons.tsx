import {
  default as SidebarBtn,
  URLString,
} from "components/layout/sidebar/SidebarButton";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { BiCheck, BiListUl, BiStar, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSidebarIsActiveArray,
  update,
} from "redux/features/sidebarIsActiveArraySlice";
import { selectTodos } from "redux/features/todosSlice";
import countTodosByPage from "utils/countTodosByPage";

interface SidebarButtonProps {
  to: URLString;
  title: string;
  icon: React.ReactElement;
}
export let sidebarButtons: SidebarButtonProps[] = [];

export default function SidebarButtons() {
  const { language } = useLanguage();
  const todos = useSelector(selectTodos);
  const isActiveArray = useSelector(selectSidebarIsActiveArray);
  const d = useDispatch();
  const select = (index: number) => {
    d(update(index));
  };

  sidebarButtons = [
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

  return (
    <>
      {sidebarButtons.map((button, i) => (
        <SidebarBtn
          key={i}
          index={i}
          icon={button.icon}
          title={button.title}
          isActive={isActiveArray[i]}
          onSelect={select}
          to={button.to}
          badgeText={countTodosByPage(todos, button.to).toString()}
        />
      ))}
    </>
  );
}
