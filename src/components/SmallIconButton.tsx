import { IconButton, Tooltip } from "@chakra-ui/react";
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
  return (
    <Tooltip label={label}>
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
