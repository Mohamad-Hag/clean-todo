import { IconButton, Tooltip } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useIsMobile from "hooks/useIsMobile";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";
import useLanguage from "hooks/useLanguage";
import { GoSettings } from "react-icons/go";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";

interface PreferencesButtonProps {
  onClick: () => void;
}

export default function PreferencesButton({ onClick }: PreferencesButtonProps) {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const preferencesKey = { key: "P", code: 80 };
  useKeyboardShortcut(onClick, preferencesKey.code, "Shift");

  const label = isMobile ? undefined : (
    <p className="flex flex-col items-center">
      {labels[language.code].preferences}{" "}
      <span className="text-gray-400 text-xs">
        {labels[language.code].shift} {labels[language.code].plusSign}{" "}
        {preferencesKey.key}
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
