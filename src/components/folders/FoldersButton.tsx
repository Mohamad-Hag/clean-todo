import { AccordionButton, AccordionIcon, Box } from "@chakra-ui/react";
import useTodoItemDrop from "hooks/useTodoItemDrop";
import { TbFolders } from "react-icons/tb";
import { activeStyle, hoverStyle } from "utils/styles/SidebarButtonStyles";

interface FoldersButtonProps {
  title: string;
  setIndex: (value: React.SetStateAction<number>) => void;
}

export default function FoldersButton({
  setIndex,
  title,
}: FoldersButtonProps) {
  const { drop } = useTodoItemDrop(undefined, true);

  const draggedOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIndex(0);
  };

  return (
    <AccordionButton
      className="w-full text-left pl-5 text-white select-none"
      borderRadius="0 2em 2em 0"
      fontWeight="normal"
      h="3rem"
      justifyContent="flex-start"
      _hover={hoverStyle}
      _active={activeStyle}
      onDrop={drop}
      onDragOver={draggedOver}
    >
      <TbFolders style={{ marginRight: "0.5rem" }} />
      <Box className="flex-1 flex justify-between items-center">
        <Box as="span" flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </Box>
    </AccordionButton>
  );
}
