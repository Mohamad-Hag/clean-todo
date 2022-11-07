import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiCheckDouble, BiDotsVerticalRounded, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  close,
  open,
  setDescription,
  setOnOk,
  setTitle,
} from "../../redux/features/alertSlice";
import {
  clear,
  finishAll,
  removeFinished,
} from "../../redux/features/todosSlice";

interface ToolbarActionsProps {
  todosNumber: number;
}

export default function ToolbarActions({ todosNumber }: ToolbarActionsProps) {
  const d = useDispatch();

  const finish = () => {
    d(finishAll());
  };

  const remove = () => {
    d(removeFinished());
  };

  const clearAllAlert = () => {
    d(open());
    d(setTitle("Clear All"));
    d(setDescription("Are you sure you want to clear all items?"));
    d(setOnOk(clearAll));
  };

  const clearAll = () => {
    d(clear());
    d(close());
  };

  return (
    <Menu isLazy placement="bottom-end">
      <MenuButton
        disabled={todosNumber === 0}
        as={IconButton}
        variant="ghost"
        icon={<BiDotsVerticalRounded size={20} />}
      ></MenuButton>
      <MenuList>
        <MenuItem icon={<BiCheckDouble />} onClick={finish}>
          Finish All
        </MenuItem>
        <MenuItem icon={<BiTrash />} onClick={remove}>
          Remove Finished
        </MenuItem>
        <MenuItem icon={<BiTrash />} onClick={clearAllAlert}>
          Clear All
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
