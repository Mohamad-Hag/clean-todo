import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiCheckDouble, BiDotsVerticalRounded, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { clear, finishAll, removeFinished } from "../redux/features/todosSlice";

interface ToolbarActionsProps {
  todosNumber: number;
}

export default function ToolbarActions({ todosNumber }: ToolbarActionsProps) {
  const dispatch = useDispatch();

  const finish = () => {
    dispatch(finishAll());
  };

  const remove = () => {
    dispatch(removeFinished());
  };

  const clearAll = () => {
    dispatch(clear());
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
        <MenuItem icon={<BiTrash />} onClick={clearAll}>
          Clear All
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
