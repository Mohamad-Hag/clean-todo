import AddItemToFolderButton from "components/todo-item-buttons/AddItemToFolderButton";
import EditItemButton from "components/todo-item-buttons/EditItemButton";
import FinishItemButton from "components/todo-item-buttons/FinishItemButton";
import { TodoItemRightSideProps } from "./TodoItemRightSide";

export default function TodoItemNormalButtons({ id }: TodoItemRightSideProps) {
  return (
    <>
      <AddItemToFolderButton id={id!} />
      <FinishItemButton id={id!} />
      <EditItemButton id={id!} />
    </>
  );
}
