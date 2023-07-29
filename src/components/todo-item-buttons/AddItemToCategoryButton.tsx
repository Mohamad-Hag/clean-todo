import { BiPlus } from "react-icons/bi";
import useAddToCategory from "../../hooks/useAddToCategory";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";
import labels from "../../data/json/ui-labels.json";

export default function AddItemToCategoryButton({
  id,
}: TodoItemRightSideProps) {
  let addToCategory = useAddToCategory();

  let addToCategory_ = () => {
    addToCategory(id);
  };

  return (
    <SmallIconButton
      label={labels.addEditCategory}
      color="green"
      icon={<BiPlus />}
      onClick={addToCategory_}
    />
  );
}
