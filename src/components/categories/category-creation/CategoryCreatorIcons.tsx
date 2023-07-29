import { IconButton, Stack } from "@chakra-ui/react";
import { useState } from "react";
import categoryIcons from "../../../data/typescript/categoryIcons";
import useIsActiveArray from "../../../hooks/useIsActiveArray";

interface CategoryCreatorIconsProps {
  onSelect: (icon: string) => void;
  icon: string;
}

export default function CategoryCreatorIcons({
  icon,
  onSelect,
}: CategoryCreatorIconsProps) {
  const length = categoryIcons.length;
  const initialIndex = categoryIcons.findIndex(
    (categoryIcon) => categoryIcon.title === icon
  );

  const [isActiveArray, activate] = useIsActiveArray(length, initialIndex);

  const select = (index: number) => {
    activate(index);
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
