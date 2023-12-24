import dragDropIdentifier from "data/typescript/dragDropIdentifier";
import { useState } from "react";

interface TodoItemDropHook {
  drop: (event: React.DragEvent<HTMLButtonElement>) => void;
  dragOver: (event: React.DragEvent<HTMLButtonElement>) => void;
  dragLeave: (event: React.DragEvent<HTMLButtonElement>) => void;
  dropBorder?: string;
}

const useTodoItemDrop = (
  dropCallback?: (idOrIds: string) => void,
  dropPreventDefault?: boolean,
  dragOverPreventDefault?: boolean,
  dragLeavePreventDefault?: boolean
): TodoItemDropHook => {
  const [dropBorder, setDropBorder] = useState<string | undefined>();

  const drop = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (dropPreventDefault && !dropCallback) return;
    setDropBorder(undefined);

    let split = event.dataTransfer.getData("text/plain").split(";");
    let identifier = split[0];
    if (identifier !== dragDropIdentifier) return;

    let idOrIds = split[1];
    dropCallback!(idOrIds);
  };

  const dragOver = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (dragOverPreventDefault) return;
    setDropBorder(`3px solid #3182ce`);
  };

  const dragLeave = (event: React.DragEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (dragLeavePreventDefault) return;
    setDropBorder(undefined);
  };

  return { dragLeave, dragOver, drop, dropBorder };
};

export default useTodoItemDrop;
