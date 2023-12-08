import { IconButton, Tooltip } from "@chakra-ui/react";
import { GoSettings } from "react-icons/go";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";
import labels from "data/json/ui-labels.json";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";

interface PreferencesButtonProps {
  onClick: () => void;
}

export default function PreferencesButton({ onClick }: PreferencesButtonProps) {
  const preferencesKey = { key: "P", code: 80 };
  useKeyboardShortcut(onClick, preferencesKey.code, "Shift");

  const label = (
    <p className="flex flex-col items-center">
      {labels.preferences}{" "}
      <span className="text-gray-400 text-xs">
        {labels.shift} {labels.plusSign} {preferencesKey.key}
      </span>
    </p>
  );

  return (
    <Tooltip label={label} placement="top" hasArrow>
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
