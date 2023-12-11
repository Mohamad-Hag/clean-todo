import { BiCheck } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { edit, selectTodos } from "redux/features/todosSlice";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function FinishItemButton({ id }: TodoItemRightSideProps) {
  const { language } = useLanguage();
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
      label={
        isFinished
          ? labels[language.code].activate
          : labels[language.code].finish
      }
      variant={isFinished ? "solid" : "ghost"}
      icon={<BiCheck />}
      onClick={finish}
    />
  );
}
