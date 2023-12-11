import { IconButton, Tooltip } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { BiFlag } from "react-icons/bi";
import S from "string";
import Priority from "utils/types/Priority";

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
  const { language } = useLanguage();
  const color =
    priority === "low" ? "blue" : priority === "medium" ? "green" : "red";
  const flagColor = isActive ? "white" : color;
  const tooltipLabel =
    priority === "low"
      ? labels[language.code].low
      : priority === "medium"
      ? labels[language.code].medium
      : labels[language.code].high;

  const buttonVariant = isActive ? "solid" : "ghost";

  const select = () => {
    if (onSelect) onSelect(index);
  };

  return (
    <Tooltip label={tooltipLabel} hasArrow>
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
