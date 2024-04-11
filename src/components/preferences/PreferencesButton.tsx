import { IconButton, Tooltip } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";
import useLanguage from "hooks/useLanguage";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";

interface PreferencesButtonProps {
  onClick: () => void;
  label: string;
  shortcut: string;
  icon: React.ReactElement;
}

export default function PreferencesButton({
  onClick,
  label,
  shortcut,
  icon,
}: PreferencesButtonProps) {
  const isMobile = useIsMobile();      
  
  const lbl = isMobile ? undefined : (
    <p className="flex flex-col items-center">
      {label}
      <span className="text-gray-400 text-xs">{shortcut}</span>
    </p>
  );

  return (
    <Tooltip label={lbl} placement="top" hasArrow>
      <IconButton
        color="white"
        _hover={hoverStyle}
        _active={activeStyle}
        variant="ghost"
        aria-label="hide menu button"
        icon={icon}
        onClick={onClick}
      ></IconButton>
    </Tooltip>
  );
}
