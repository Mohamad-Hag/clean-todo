import { ToolbarProps } from "./Toolbar";
import labels from "../../data/json/ui-labels.json";

interface ToolbarBasicInfoProps extends ToolbarProps {}

export default function ToolbarBasicInfo({
  todos,
  isFilterMode,
}: ToolbarBasicInfoProps) {
  const finishedCount = todos.filter((todo) => todo.isFinished).length;

  return (
    <span className="opacity-80">
      {isFilterMode ? `${labels.results} ` : `${labels.total} `}
      <b>{todos.length}</b> / {labels.finished} <b>{finishedCount}</b>
    </span>
  );
}
