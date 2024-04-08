import { IconButton, Stack } from "@chakra-ui/react";
import folderIcons from "data/typescript/folderIcons";
import useIsActiveArray from "hooks/useIsActiveArray";

interface FolderCreatorIconsProps {
  onSelect: (icon: string) => void;
  icon: string;
}

export default function FolderCreatorIcons({
  icon,
  onSelect,
}: FolderCreatorIconsProps) {
  const length = folderIcons.length;
  const initialIndex = folderIcons.findIndex(
    (folderIcon) => folderIcon.title === icon
  );

  const [isActiveArray, activate] = useIsActiveArray(length, initialIndex);

  const select = (index: number) => {
    activate(index);
    if (onSelect) onSelect(folderIcons[index].title);
  };

  return (
    <Stack spacing="1" direction="row">
      {folderIcons.map((folderIcon, index) => (
        <IconButton
          key={index}
          aria-label={folderIcon.title}
          icon={folderIcon.icon}
          isActive={isActiveArray[index]}
          size="sm"
          onClick={() => select(index)}
        />
      ))}
    </Stack>
  );
}
