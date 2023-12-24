import { Badge, Button } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import useSidebarButtonDrop from "hooks/useSidebarButtonDrop";
import useTodoItemDrop from "hooks/useTodoItemDrop";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeOppositeStatus } from "redux/features/sidebarSlice";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";

export type URLString = string;

interface SidebarButtonProps {
  index: number;
  icon: React.ReactElement;
  title: string;
  onSelect?: (index: number) => void;
  isActive?: boolean;
  to: URLString;
  badgeText?: string;
}

export default function SidebarButton({
  index,
  icon,
  title,
  to,
  onSelect,
  badgeText,
  isActive = false,
}: SidebarButtonProps) {
  const isMobile = useIsMobile();
  const d = useDispatch();
  const sidebarDrop = useSidebarButtonDrop(to);
  const { dragLeave, dragOver, drop, dropBorder } =
    useTodoItemDrop(sidebarDrop);

  const select = () => {
    if (onSelect) {
      if (isMobile) d(changeOppositeStatus("shown"));
      onSelect(index);
    }
  };

  return (
    <Link to={to}>
      <Button
        onDragOver={dragOver}
        onDragLeave={dragLeave}
        onDrop={drop}
        colorScheme="red"
        className="w-full text-left pl-5 text-white flex items-center gap-2"
        borderRadius="0 2em 2em 0"
        fontWeight="normal"
        leftIcon={icon}
        border={dropBorder}
        h="3rem"
        justifyContent="flex-start"
        bg={isActive ? "blue.100" : "transparent"}
        color={isActive ? "black" : "white"}
        _hover={hoverStyle}
        _active={activeStyle}
        onClick={select}
      >
        <label>{title}</label>
        {badgeText && (
          <Badge variant="solid" colorScheme="blue">
            {badgeText}
          </Badge>
        )}
      </Button>
    </Link>
  );
}
