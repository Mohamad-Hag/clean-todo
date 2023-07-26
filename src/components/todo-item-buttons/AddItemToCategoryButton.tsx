import { BiPlus } from "react-icons/bi";
import useAddToCategory from "../../hooks/useAddToCategory";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";

export default function AddItemToCategoryButton({
  id,
}: TodoItemRightSideProps) {
  let addToCategory = useAddToCategory();

  let addToCategory_ = () => {
    addToCategory(id);
  };

  return (
    <SmallIconButton
      label="Add/Edit Category"
      color="green"
      icon={<BiPlus />}
      onClick={addToCategory_}
    />
  );
}
