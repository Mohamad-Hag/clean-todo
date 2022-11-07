import { ToolbarProps } from "./Toolbar";
import ToolbarActions from "./ToolbarActions";

export default function ToolbarRightSide({
  isFilterMode,
  todosNumber,
}: ToolbarProps) {
  return (
    <div>
      <ToolbarActions isFilterMode={isFilterMode} todosNumber={todosNumber} />
    </div>
  );
}
