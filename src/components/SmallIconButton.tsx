import { IconButton, Tooltip } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import React from "react";

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
  const isMobile = useIsMobile();
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
