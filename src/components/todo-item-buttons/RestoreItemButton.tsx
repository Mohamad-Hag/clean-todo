import labels from "data/json/ui-labels.json";
import { BiRefresh } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { edit } from "redux/features/todosSlice";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";

export default function RestoreItemButton({ id }: TodoItemRightSideProps) {
  const d = useDispatch();

  const stored = () => {
    d(
      edit({
        id: id!,
        editable: {
          isInTrash: false,
        },
      })
    );
  };

  return (
    <SmallIconButton
      label={labels.restore}
      icon={<BiRefresh />}
      color="green"
      onClick={stored}
    />
  );
}
