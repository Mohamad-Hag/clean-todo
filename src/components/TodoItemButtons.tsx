import { Stack } from "@chakra-ui/react";
import { BiCheck, BiPencil, BiTrash } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectTodos } from "../redux/features/todosSlice";
import SmallIconButton from "./SmallIconButton";

interface TodoItemButtonsProps {
  id?: number;
  onEdit: () => void;
  onRemove: () => void;
  onFinish: () => void;
}

export default function TodoItemButtons({
  id,
  onEdit,
  onRemove,
  onFinish,
}: TodoItemButtonsProps) {
  const todos = useSelector(selectTodos);
  let isFinished: boolean = !!todos.find((todo) => todo.id === id)?.isFinshed;

  const finish = () => {
    onFinish();
  };

  return (
    <Stack direction="row">
      <SmallIconButton
        label={isFinished ? "Unfinish" : "Finish"}
        variant={isFinished ? "solid" : "ghost"}
        icon={<BiCheck />}
        onClick={finish}
      />
      <SmallIconButton label="Edit" icon={<BiPencil />} onClick={onEdit} />
      <SmallIconButton
        label="Remove"
        icon={<BiTrash />}
        color="red"
        onClick={onRemove}
      />
    </Stack>
  );
}
