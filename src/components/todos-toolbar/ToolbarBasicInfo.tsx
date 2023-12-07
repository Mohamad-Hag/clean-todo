import { ToolbarProps } from "./Toolbar";
import labels from "data/json/ui-labels.json";

export default function ToolbarBasicInfo({
  todos,
  isFilterMode,
  isTrashPage,
}: ToolbarProps) {
  const finishedCount = todos.filter((todo) => todo.isFinished).length;

  return (
    <span className="opacity-80">
      {isFilterMode ? `${labels.results} ` : `${labels.total} `}
      <b>{todos.length}</b>{" "}
      {isTrashPage || isFilterMode ? null : (
        <label>
          / {labels.finished} <b>{finishedCount}</b>
        </label>
      )}
    </span>
  );
}
