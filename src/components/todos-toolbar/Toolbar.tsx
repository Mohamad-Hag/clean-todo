import { Flex } from "@chakra-ui/react";
import ToolbarActions from "./ToolbarActions";
// import ToolbarInfo from "./ToolbarInfo";
import ToolbarSelectBox from "./ToolbarSelectBox";

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
      <Flex gap="5" direction="row" align="center">
        <ToolbarSelectBox />
        {/* <ToolbarInfo isFilterMode={isFilterMode} todosNumber={todosNumber} /> */}
      </Flex>
      <ToolbarActions todosNumber={todosNumber} />
    </Flex>
  );
}
