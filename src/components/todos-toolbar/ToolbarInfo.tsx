import { ToolbarProps } from "./Toolbar";
import ToolbarBasicInfo from "./ToolbarBasicInfo";
import ToolbarSelectInfo from "./ToolbarSelectInfo";

export default function ToolbarInfo({
  isFilterMode,
  todos,
  isTrashPage,
}: ToolbarProps) {
  return (
    <div className="text-sm font-semibold text-gray-600 flex gap-1 items-center">
      <ToolbarSelectInfo isTrashPage={isTrashPage} />
      <ToolbarBasicInfo
        isFilterMode={isFilterMode}
        todos={todos}
        isTrashPage={isTrashPage}
      />
    </div>
  );
}
