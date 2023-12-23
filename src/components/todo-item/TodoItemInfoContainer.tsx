import { Stack } from "@chakra-ui/react";
import dragDropIdentifier from "data/typescript/dragDropIdentifier";
import useIsMobile from "hooks/useIsMobile";
import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";
import { WithMultipleChildren } from "utils/interfaces/WithChildren";
import TodoProps from "utils/interfaces/common/Todo";

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
  const todos = useSelector(selectTodos);
  const selections = todos.filter((todo) => todo.isSelected);
  const isSelectMode = selections.length > 0;

  const draggedStart = (e: React.DragEvent<HTMLDivElement>) => {
    let data = `${dragDropIdentifier};`;
    if (!isSelectMode) data += `${id.toString()}`;
    else data += `[${(selections as TodoProps[]).map((todo) => todo.id)}]`;
    e.dataTransfer.setData("text/plain", data);
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
