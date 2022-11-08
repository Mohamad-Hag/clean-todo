import { IconButton, Tooltip } from "@chakra-ui/react";
import { GoSettings } from "react-icons/go";
import {
  activeStyle,
  hoverStyle,
} from "../../utils/styles/SidebarButtonStyles";

interface PerferencesButtonProps {
  onClick: () => void;
}

export default function PerferencesButton({ onClick }: PerferencesButtonProps) {
  return (
    <Tooltip label="Preferences">
      <IconButton
        color="white"
        _hover={hoverStyle}
        _active={activeStyle}
        variant="ghost"
        aria-label="hide menu button"
        icon={<GoSettings />}
        onClick={onClick}
      ></IconButton>
    </Tooltip>
  );
}
