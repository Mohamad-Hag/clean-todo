import { IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { ToolbarProps } from "./Toolbar";
import toolbarActions from "./toolbar-actions/toolbarActions";
import isEmpty from "utils/isEmpty";

export default function ToolbarActions({
  isFilterMode,
  todos,
  isTrashPage,
}: ToolbarProps) {
  const isActionsDisabled = isEmpty(todos) || isFilterMode || isTrashPage;
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
