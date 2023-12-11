import labels from "data/typescript/uiLabels";
import { BiRefresh } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { edit } from "redux/features/todosSlice";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";
import useLanguage from "hooks/useLanguage";

export default function RestoreItemButton({ id }: TodoItemRightSideProps) {
  const { language } = useLanguage();
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
      label={labels[language.code].restore}
      icon={<BiRefresh />}
      color="green"
      onClick={stored}
    />
  );
}
