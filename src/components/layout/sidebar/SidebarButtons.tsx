import { default as SidebarBtn } from "components/layout/sidebar/SidebarButton";
import useGetSidebarButtons from "hooks/useGetSidebarButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSidebarIsActiveArray,
  update,
} from "redux/features/sidebarIsActiveArraySlice";
import { selectTodos } from "redux/features/todosSlice";
import countTodosByPage from "utils/countTodosByPage";

export default function SidebarButtons() {
  const todos = useSelector(selectTodos);
  const isActiveArray = useSelector(selectSidebarIsActiveArray);
  const sidebarButtons = useGetSidebarButtons();
  const d = useDispatch();

  const select = (index: number) => {
    d(update(index));
  };

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
