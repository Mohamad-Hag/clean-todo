import { IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ToolbarProps } from "./Toolbar";
import toolbarActions from "./toolbar-actions/toolbarActions";

export default function ToolbarActions({ isFilterMode, todos }: ToolbarProps) {
  const isActionsDisabled = todos.length === 0 || isFilterMode;
  const actions = toolbarActions.map((action, index) => (
    <p key={index}>{action}</p>
  ));

  return (
    <Menu isLazy placement="bottom-end">
      <MenuButton
        disabled={isActionsDisabled}
        as={IconButton}
        variant="ghost"
        icon={<BiDotsVerticalRounded size={20} />}
      ></MenuButton>
      <MenuList>{actions}</MenuList>
    </Menu>
  );
}
