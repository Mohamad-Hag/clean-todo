import { ToolbarProps } from "./Toolbar";

interface ToolbarBasicInfoProps extends ToolbarProps {}

export default function ToolbarBasicInfo({
  todos,
  isFilterMode,
}: ToolbarBasicInfoProps) {
  const finishedCount = todos.filter((todo) => todo.isFinished).length;

  return (
    <span className="opacity-80">
      {isFilterMode ? "Results " : "Total "}
      <b>{todos.length}</b> / Finished <b>{finishedCount}</b>
    </span>
  );
}
