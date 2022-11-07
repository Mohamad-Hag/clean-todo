import { useToast } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { remove, selectTodos } from "../../redux/features/todosSlice";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";
import UndoToast from "../UndoToast";

export default function RemoveItemButton({
  id,
  hideItemCallback,
}: TodoItemRightSideProps) {
  const d = useDispatch();
  const toast = useToast();
  const todos = useSelector(selectTodos);
  const todo = todos.find((td) => td.id === id)!;

  const renderUndoToast = (onUndo: () => void) => (
    <UndoToast title={`Undo remove "${todo.title}"?`} onUndo={onUndo} />
  );

  const removed = () => {
    let isUndo = false;
    hideItemCallback!(true);
    toast({
      id: id,
      duration: 3000,
      render: () =>
        renderUndoToast(() => {
          isUndo = true;
          hideItemCallback!(false);
          toast.close(id!);
        }),
      onCloseComplete: () => (!isUndo ? d(remove(id!)) : null),
    });
  };

  return (
    <SmallIconButton
      label="Remove"
      icon={<BiTrash />}
      color="red"
      onClick={removed}
    />
  );
}
