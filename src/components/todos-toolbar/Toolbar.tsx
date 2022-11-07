import { Flex } from "@chakra-ui/react";
import ToolbarLeftSide from "./ToolbarLeftSide";
import ToolbarRightSide from "./ToolbarRightSide";

export interface ToolbarProps {
  todosNumber: number;
  isFilterMode?: boolean;
}

export default function Toolbar({
  todosNumber,
  isFilterMode = false,
}: ToolbarProps) {
  return (
    <Flex
      className="py-1.5 px-10 border-b-2 border-gray-100 bg-gray-50 select-none"
      zIndex={50}
      align="center"
      justify="space-between"
    >
      <ToolbarLeftSide isFilterMode={isFilterMode} todosNumber={todosNumber} />
      <ToolbarRightSide isFilterMode={isFilterMode} todosNumber={todosNumber} />
    </Flex>
  );
}
