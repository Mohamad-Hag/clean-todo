import ToolbarActivateAllAction from "./ToolbarActivateAllAction";
import ToolbarClearAction from "./ToolbarClearAction";
import ToolbarFinishAllAction from "./ToolbarFinishAllAction";
import ToolbarRemovedFinishedAction from "./ToolbarRemoveFinishedAction";

const toolbarActions: React.ReactNode[] = [
  <ToolbarFinishAllAction />,
  <ToolbarActivateAllAction />,
  <ToolbarRemovedFinishedAction />,
  <ToolbarClearAction />,
];

export default toolbarActions;
