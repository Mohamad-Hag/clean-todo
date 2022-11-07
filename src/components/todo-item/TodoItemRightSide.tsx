import { Stack } from "@chakra-ui/react";
import EditItemButton from "../todo-item-buttons/EditItemButton";
import FinishItemButton from "../todo-item-buttons/FinishItemButton";
import RemoveItemButton from "../todo-item-buttons/RemoveItemButton";

export interface TodoItemRightSideProps {
  id: number;
  hideItemCallback?: (isHidden: boolean) => void;
}

export default function TodoItemRightSide({
  id,
  hideItemCallback,
}: TodoItemRightSideProps) {
  return (
    <Stack direction="row">
      <FinishItemButton id={id!} />
      <EditItemButton id={id!} />
      <RemoveItemButton id={id!} hideItemCallback={hideItemCallback} />
    </Stack>
  );
}
