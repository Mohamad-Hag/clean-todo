import { BiPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { openAsEdit } from "redux/features/formSlice";
import { selectTodos } from "redux/features/todosSlice";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function EditItemButton({ id }: TodoItemRightSideProps) {
  const { language } = useLanguage();
  const todos = useSelector(selectTodos);
  const todo = todos.find((td) => td.id === id)!;
  let d = useDispatch();

  const edit = () => {
    d(
      openAsEdit({
        id: id,
        title: todo.title,
        description: todo.description,
        priority: todo.priority,
        folderId: todo.folderId,
        dueDate: todo.dueDate,
      })
    );
  };
  return (
    <SmallIconButton
      label={labels[language.code].edit}
      icon={<BiPencil />}
      onClick={edit}
    />
  );
}
