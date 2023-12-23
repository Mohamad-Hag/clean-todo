import { Stack } from "@chakra-ui/react";
import dragDropIdentifier from "data/typescript/dragDropIdentifier";
import useIsMobile from "hooks/useIsMobile";
import React from "react";
import { WithMultipleChildren } from "utils/interfaces/WithChildren";

interface TodoItemInfoContainerProps extends WithMultipleChildren {
  id: number;
  isInTrash: boolean;
  editOnDoubleClick: boolean;
  onEdit: () => void;
}

export default function TodoItemInfoContainer({
  id,
  children,
  isInTrash,
  editOnDoubleClick,
  onEdit,
}: TodoItemInfoContainerProps) {
  const isMobile = useIsMobile();

  const draggedStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData(
      "text/plain",
      `${dragDropIdentifier};${id.toString()}`
    );
    e.dataTransfer.dropEffect = "move";
  };

  return (
    <Stack
      draggable
      onDragStart={draggedStart}
      spacing="1"
      onDoubleClick={isInTrash || !editOnDoubleClick ? undefined : onEdit}
      border="1px solid transparent"
      cursor="move"
      _hover={{
        bg: "#22222205",
        border: "1px solid #22222210",
      }}
      _active={{
        bg: "#22222210",
      }}
      p="2"
      width={isMobile ? "100%" : undefined}
      borderRadius="md"
    >
      {children}
    </Stack>
  );
}
