import { Flex } from "@chakra-ui/react";
import { ToolbarProps } from "./Toolbar";
import ToolbarInfo from "./ToolbarInfo";
import ToolbarSelectBox from "./ToolbarSelectBox";

export default function ToolbarLeftSide({
  isFilterMode,
  todosNumber,
}: ToolbarProps) {
  return (
    <Flex gap="5" direction="row" align="center">
      <ToolbarSelectBox />
      <ToolbarInfo isFilterMode={isFilterMode} todosNumber={todosNumber} />
    </Flex>
  );
}
