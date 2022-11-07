import { MenuItem } from "@chakra-ui/react";

export interface ToolbarActionProps {
  title: string;
  icon: React.ReactElement;
  onAction: () => void;
}

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
