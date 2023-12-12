import { IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";
import { isMobile } from "react-device-detect";

interface TodoItemButton {
  label: string;
  color?: string;
  icon: React.ReactElement;
  onClick: () => void;
  variant?: string;
}

export default function SmallIconButton({
  label,
  color = "blue",
  icon,
  onClick,
  variant = "ghost",
}: TodoItemButton) {
  const mobileLabel = !isMobile ? label : null;

  return (
    <Tooltip label={mobileLabel} hasArrow>
      <IconButton
        variant={variant}
        aria-label={`${label} icon`}
        colorScheme={color}
        icon={icon}
        onClick={onClick}
      ></IconButton>
    </Tooltip>
  );
}
