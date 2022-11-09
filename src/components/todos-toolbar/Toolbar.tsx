import { Flex } from "@chakra-ui/react";
import TodoProps from "../../utils/interfaces/common/Todo";
import ToolbarLeftSide from "./ToolbarLeftSide";
import ToolbarRightSide from "./ToolbarRightSide";

export interface ToolbarProps {
  todos: TodoProps[];
  isFilterMode?: boolean;
}

export default function Toolbar({ todos, isFilterMode = false }: ToolbarProps) {
  return (
    <Flex
      className="py-1.5 px-10 border-b-2 border-gray-100 bg-gray-50 select-none"
      zIndex={50}
      align="center"
      justify="space-between"
    >
      <ToolbarLeftSide isFilterMode={isFilterMode} todos={todos} />
      <ToolbarRightSide isFilterMode={isFilterMode} todos={todos} />
    </Flex>
  );
}
