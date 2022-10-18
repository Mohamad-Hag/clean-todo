import { useSelector } from "react-redux";
import { selectTodos } from "../redux/features/todosSlice";
import { ToolbarProps } from "./Toolbar";

interface ToolbarInfoProps extends ToolbarProps {}

export default function ToolbarInfo({
  todosNumber,
  isFilterMode,
}: ToolbarInfoProps) {
  const todos = useSelector(selectTodos);
  const finishedCount = todos.filter((todo) => todo.isFinshed).length;

  return (
    <span className="opacity-80">
      {isFilterMode ? "Results " : "Total "}
      <b>{todosNumber}</b> / Finished <b>{finishedCount}</b>
    </span>
  );
}
