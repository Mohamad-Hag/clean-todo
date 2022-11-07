import { MenuItem } from "@chakra-ui/react";
import { Component } from "react";
import IAction from "../../utils/interfaces/Action";

export interface ToolbarActionProps {
  title: string;
  icon: React.ReactElement;
  onAction: () => void;
}
import React from "react";

export default function ToolbarAction({
  title,
  icon,
  onAction,
}: ToolbarActionProps) {
  return (
    <MenuItem icon={icon} onClick={onAction}>
      {title}
    </MenuItem>
  );
}
