import { Button } from "@chakra-ui/react";
import { activeStyle, hoverStyle } from "../../../utils/styles/SidebarButtonStyles";

interface SidebarButtonProps {
  icon: React.ReactElement;
  title: string;
  onClick?: () => void;
  isActive?: boolean;
}

export default function SidebarButton({
  icon,
  title,
  onClick,
  isActive = false,
}: SidebarButtonProps) {
  return (
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
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
