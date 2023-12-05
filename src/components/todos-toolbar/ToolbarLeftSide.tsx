import { Flex } from "@chakra-ui/react";
import { ToolbarProps } from "./Toolbar";
import ToolbarInfo from "./ToolbarInfo";
import ToolbarSelectBox from "./ToolbarSelectBox";

export default function ToolbarLeftSide({
  isFilterMode,
  todos,
  isTrashPage,
}: ToolbarProps) {
  return (
    <Flex gap="5" direction="row" align="center">
      <ToolbarSelectBox isFilterMode={isFilterMode} todos={todos} />
      <ToolbarInfo
        isFilterMode={isFilterMode}
        todos={todos}
        isTrashPage={isTrashPage}
      />
    </Flex>
  );
}
