import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectForm } from "../../redux/features/formSlice";
import Priority, { priorityArray } from "../../utils/types/Priority";
import TodoCreatorPriorityButton from "./TodoCreatorPriorityButton";

interface TodoCreatorPriorityButtonsProps {
  onSelect: (priority: Priority) => void;
  priority: Priority;
}

export default function TodoCreatorPriorityButtons({
  priority,
  onSelect,
}: TodoCreatorPriorityButtonsProps) {
  const initialize = () =>
    Array(priorityArray.length)
      .fill(false)
      .map((_, i) => priority === priorityArray[i]);

  const [isActiveArray, setIsActiveArray] = useState<boolean[]>(initialize());

  const select = (index: number) => {
    let activeArray = [...isActiveArray];
    let activeBackgroundIndex = activeArray.findIndex((isActive) => isActive);
    activeArray[activeBackgroundIndex] = false;
    activeArray[index] = true;
    setIsActiveArray(activeArray);
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
