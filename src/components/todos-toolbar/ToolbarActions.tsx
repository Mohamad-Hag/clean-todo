import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ToolbarProps } from "./Toolbar";
import ToolbarClearAction from "./toolbar-actions/ToolbarClearAction";
import ToolbarFinishAllAction from "./toolbar-actions/ToolbarFinishAllAction";
import ToolbarRemovedFinishedAction from "./toolbar-actions/ToolbarRemoveFinishedAction";

export default function ToolbarActions({
  isFilterMode,
  todosNumber,
}: ToolbarProps) {
  const isActionsDisabled = todosNumber === 0 || isFilterMode;
  return (
    <Menu isLazy placement="bottom-end">
      <MenuButton
        disabled={isActionsDisabled}
        as={IconButton}
        variant="ghost"
        icon={<BiDotsVerticalRounded size={20} />}
      ></MenuButton>
      <MenuList>
        <ToolbarFinishAllAction />
        <ToolbarRemovedFinishedAction />
        <ToolbarClearAction />
      </MenuList>
    </Menu>
  );
}
