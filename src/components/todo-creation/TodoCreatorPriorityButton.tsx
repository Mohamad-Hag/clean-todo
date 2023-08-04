import { IconButton, Tooltip } from "@chakra-ui/react";
import { BiFlag } from "react-icons/bi";
import Priority from "utils/types/Priority";
import S from "string";

interface TodoCreatorPriorityButtonProps {
  index: number;
  priority?: Priority;
  isActive?: boolean;
  onSelect: (index: number) => void;
}

export default function TodoCreatorPriorityButton({
  index,
  priority = "low",
  isActive = false,
  onSelect,
}: TodoCreatorPriorityButtonProps) {
  const color =
    priority === "low" ? "blue" : priority === "medium" ? "green" : "red";
  const flagColor = isActive ? "white" : color;

  const buttonVariant = isActive ? "solid" : "ghost";

  const select = () => {
    if (onSelect) onSelect(index);
  };

  return (
    <Tooltip label={S(priority).capitalize().s} hasArrow>
      <IconButton
        aria-label={`${priority} priority`}
        size="sm"
        icon={<BiFlag fill={flagColor} />}
        onClick={select}
        colorScheme={color}
        variant={buttonVariant}
      />
    </Tooltip>
  );
}
