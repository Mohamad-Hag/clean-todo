import { Stack } from "@chakra-ui/react";
import useIsActiveArray from "hooks/useIsActiveArray";
import Priority, { priorityArray } from "utils/types/Priority";
import TodoCreatorPriorityButton from "./TodoCreatorPriorityButton";

interface TodoCreatorPriorityButtonsProps {
  onSelect: (priority: Priority) => void;
  priority: Priority;
}

export default function TodoCreatorPriorityButtons({
  priority,
  onSelect,
}: TodoCreatorPriorityButtonsProps) {
  const length = priorityArray.length;
  const initialIndex = priorityArray.findIndex((prirty) => prirty === priority);

  const [isActiveArray, activate] = useIsActiveArray(length, initialIndex);

  const select = (index: number) => {
    activate(index);
    if (onSelect) onSelect(priorityArray[index]);
  };

  return (
    <Stack spacing="1" direction="row">
      {isActiveArray.map((isActive, index) => (
        <TodoCreatorPriorityButton
          key={index}
          index={index}
          isActive={isActive}
          onSelect={select}
          priority={priorityArray[index]}
        />
      ))}
    </Stack>
  );
}
