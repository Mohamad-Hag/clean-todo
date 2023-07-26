import { Badge, Button, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectTodos } from "../../../../redux/features/todosSlice";
import getCategoryIconByTitle from "../../../../utils/getCategoryIconByTitle";
import {
  activeStyle,
  hoverStyle,
} from "../../../../utils/styles/SidebarButtonStyles";
import { URLString } from "../SidebarButton";

export interface SidebarCategoryButtonProps {
  id: number;
  icon: string;
  title: string;
  to: URLString;
  isActive?: boolean;
  onSelect?: (index: number) => void;
  index: number;
}

export default function SidebarCategoryButton({
  id,
  icon,
  title,
  to,
  isActive = false,
  onSelect,
  index,
}: SidebarCategoryButtonProps) {
  const categoryIcon = getCategoryIconByTitle(icon);
  const background = isActive ? "blue.100" : "transparent";
  const color = isActive ? "black" : "white";
  const todos = useSelector(selectTodos);
  const todosCountPerCategory = todos.filter(
    (todo) => todo.categoryId === id
  ).length;

  const select = () => {
    if (onSelect) onSelect(index);
  };

  return (
    <Link to={to} className="flex-1">
      <Button
        className="w-full text-left pl-5 text-white"
        borderRadius="0.5rem"
        fontWeight="normal"
        leftIcon={categoryIcon}
        h="2.5rem"
        justifyContent="flex-start"
        bg={background}
        color={color}
        _hover={hoverStyle}
        _active={activeStyle}
        onClick={select}
      >
        <Flex align="center" gap={2} maxW="92.7px">
          <label
            style={{
              textOverflow: "ellipsis",              
              overflow: "hidden",
              display: "block",
            }}
            title={title}
          >
            {title}
          </label>
          <Badge
            fontSize="xs"
            variant="solid"
            colorScheme="blue"
            fontWeight="normal"
          >
            {todosCountPerCategory}
          </Badge>
        </Flex>
      </Button>
    </Link>
  );
}
