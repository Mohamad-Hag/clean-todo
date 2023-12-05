import { useToast } from "@chakra-ui/react";
import labels from "data/json/ui-labels.json";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { remove, selectTodos } from "redux/features/todosSlice";
import SmallIconButton from "../SmallIconButton";
import UndoToast from "../UndoToast";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";

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
      onCloseComplete: () => {
        toastCloseCompleted(isUndo);
      },
    });
  };

  const toastCloseCompleted = (isUndo: boolean) => {
    if (!isUndo) d(remove({ id: id, isInTrash: todo.isInTrash }));
  };

  return (
    <SmallIconButton
      label={labels.remove}
      icon={<BiTrash />}
      color="red"
      onClick={removed}
    />
  );
}
