import { Stack } from "@chakra-ui/react";
import RestoreItemButton from "components/todo-item-buttons/RestoreItemButton";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";
import RemoveItemButton from "../todo-item-buttons/RemoveItemButton";
import TodoItemNormalButtons from "./TodoItemNormalButtons";

export interface TodoItemRightSideProps {
  id: number;
  hideItemCallback?: (isHidden: boolean) => void;
}

export default function TodoItemRightSide({
  id,
  hideItemCallback,
}: TodoItemRightSideProps) {
  const todos = useSelector(selectTodos);
  const todo = todos.find((td) => td.id === id)!;
  const isTodoInTrash = todo && !todo.isInTrash;

  return (
    <Stack direction="row">
      {isTodoInTrash ? (
        <TodoItemNormalButtons id={id!} />
      ) : (
        <RestoreItemButton id={id!} />
      )}
      <RemoveItemButton id={id!} hideItemCallback={hideItemCallback} />
    </Stack>
  );
}
