import { ToolbarProps } from "./Toolbar";
import ToolbarBasicInfo from "./ToolbarBasicInfo";
import ToolbarSelectInfo from "./ToolbarSelectInfo";

export default function ToolbarInfo({
  isFilterMode,
  todos,
}: ToolbarProps) {
  return (
    <div className="text-sm font-semibold text-gray-600 flex gap-1 items-center">
      <ToolbarSelectInfo />
      <ToolbarBasicInfo isFilterMode={isFilterMode} todos={todos} />
    </div>
  );
}

