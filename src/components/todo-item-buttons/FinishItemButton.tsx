import { BiCheck } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { edit, selectTodos } from "../../redux/features/todosSlice";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";

export default function FinishItemButton({ id }: TodoItemRightSideProps) {
  const todos = useSelector(selectTodos);
  let isFinished: boolean = !!todos.find((todo) => todo.id === id)?.isFinished;
  let d = useDispatch();

  const finish = () => {
    d(
      edit({
        id: id!,
        editable: {
          isFinished: !isFinished,
        },
      })
    );
  };

  return (
    <SmallIconButton
      label={isFinished ? "Unfinish" : "Finish"}
      variant={isFinished ? "solid" : "ghost"}
      icon={<BiCheck />}
      onClick={finish}
    />
  );
}
