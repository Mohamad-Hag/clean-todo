import { BiPencil } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { openAsEdit } from "../../redux/features/formSlice";
import { selectTodos } from "../../redux/features/todosSlice";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";

export default function EditItemButton({ id }: TodoItemRightSideProps) {
  const todos = useSelector(selectTodos);
  const todo = todos.find((td) => td.id === id)!;
  let d = useDispatch();

  const edit = () => {
    d(
      openAsEdit({
        id: id,
        title: todo.title,
        description: todo.description,
      })
    );
  };
  return <SmallIconButton label="Edit" icon={<BiPencil />} onClick={edit} />;
}
