import { ToolbarProps } from "./Toolbar";
import ToolbarActions from "./ToolbarActions";

export default function ToolbarRightSide({
  isFilterMode,
  todos,
  isTrashPage,
}: ToolbarProps) {
  return (
    <div>
      <ToolbarActions
        isFilterMode={isFilterMode}
        todos={todos}
        isTrashPage={isTrashPage}
      />
    </div>
  );
}
