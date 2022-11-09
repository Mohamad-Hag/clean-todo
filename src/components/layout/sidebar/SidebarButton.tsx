import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  activeStyle,
  hoverStyle,
} from "../../../utils/styles/SidebarButtonStyles";

export type URLString = string;

interface SidebarButtonProps {
  index: number;
  icon: React.ReactElement;
  title: string;
  onSelect?: (index: number) => void;
  isActive?: boolean;
  to: URLString;
}

export default function SidebarButton({
  index,
  icon,
  title,
  to,
  onSelect,
  isActive = false,
}: SidebarButtonProps) {
  const select = () => {
    if (onSelect) onSelect(index);
  };

  return (
    <Link to={to}>
      <Button
        className="w-full text-left pl-5 text-white"
        borderRadius="0 2em 2em 0"
        fontWeight="normal"
        leftIcon={icon}
        h="3rem"
        justifyContent="flex-start"
        bg={isActive ? "blue.100" : "transparent"}
        color={isActive ? "black" : "white"}
        _hover={hoverStyle}
        _active={activeStyle}
        onClick={select}
      >
        {title}
      </Button>
    </Link>
  );
}
