import { Badge, Button } from "@chakra-ui/react";
import dragDropIdentifier from "data/typescript/dragDropIdentifier";
import useIsMobile from "hooks/useIsMobile";
import useSidebarButtonDrop from "hooks/useSidebarButtonDrop";
import { useState } from "react";
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
  const drop = useSidebarButtonDrop(to);
  const [dropBorder, setDropBorder] = useState<string | undefined>();

  const select = () => {
    if (onSelect) {
      if (isMobile) d(changeOppositeStatus("shown"));
      onSelect(index);
    }
  };

  const dropped = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDropBorder(undefined);

    let split = e.dataTransfer.getData("text/plain").split(";");
    let identifier = split[0];
    if (identifier !== dragDropIdentifier) return;

    let idOrIds = split[1];
    drop(idOrIds);
  };

  const draggedOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDropBorder(`3px solid #3182ce`);
  };

  const draggedExit = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDropBorder(undefined);
  };

  return (
    <Link to={to}>
      <Button
        onDragOver={draggedOver}
        onDragLeave={draggedExit}
        onDrop={dropped}
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
