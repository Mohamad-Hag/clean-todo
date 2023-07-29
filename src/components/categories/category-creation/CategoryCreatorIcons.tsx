import { IconButton, Stack } from "@chakra-ui/react";
import { useState } from "react";
import categoryIcons from "../../../data/categoryIcons";

interface CategoryCreatorIconsProps {
  onSelect: (icon: string) => void;
  icon: string;
}

export default function CategoryCreatorIcons({
  icon,
  onSelect,
}: CategoryCreatorIconsProps) {
  const initialize = () =>
    Array(categoryIcons.length)
      .fill(false)
      .map((_, index) => categoryIcons[index].title === icon);

  const [isActiveArray, setIsActiveArray] = useState<boolean[]>(initialize());

  const select = (index: number) => {
    let activeArray = [...isActiveArray];
    let activeBackgroundIndex = activeArray.findIndex((isActive) => isActive);
    activeArray[activeBackgroundIndex] = false;
    activeArray[index] = true;
    setIsActiveArray(activeArray);
    if (onSelect) onSelect(categoryIcons[index].title);
  };

  return (
    <Stack spacing="1" direction="row">
      {categoryIcons.map((categoryIcon, index) => (
        <IconButton
          key={index}
          aria-label={categoryIcon.title}
          icon={categoryIcon.icon}
          isActive={isActiveArray[index]}
          size="sm"
          onClick={() => select(index)}
        />
      ))}
    </Stack>
  );
}
