import { Flex } from "@chakra-ui/react";
import pathnames from "data/json/pathnames.json";
import useIsMobile from "hooks/useIsMobile";
import { useLocation } from "react-router-dom";
import PageCheck from "utils/interfaces/common/PageCheck";
import TodoProps from "utils/interfaces/common/Todo";
import ToolbarLeftSide from "./ToolbarLeftSide";
import ToolbarRightSide from "./ToolbarRightSide";

export interface ToolbarProps extends PageCheck {
  todos: TodoProps[];
  isFilterMode?: boolean;
}

export default function Toolbar({ todos, isFilterMode = false }: ToolbarProps) {
  const isMobile = useIsMobile();
  const { pathname } = useLocation();
  const isTrashPage = pathname === pathnames.trashPathName;
  const paddingX = isMobile ? "5" : "10";

  return (
    <Flex
      className={`py-1.5 px-${paddingX} border-b-2 border-gray-100 bg-gray-50 select-none h-14`}
      zIndex={50}
      align="center"
      justify="space-between"
    >
      <ToolbarLeftSide
        isFilterMode={isFilterMode}
        todos={todos}
        isTrashPage={isTrashPage}
      />
      <ToolbarRightSide
        todos={todos}
        isFilterMode={isFilterMode}
        isTrashPage={isTrashPage}
      />
    </Flex>
  );
}
