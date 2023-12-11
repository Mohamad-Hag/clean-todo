import { BiPlus } from "react-icons/bi";
import useAddToCategory from "hooks/useAddToCategory";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function AddItemToCategoryButton({
  id,
}: TodoItemRightSideProps) {
  const { language } = useLanguage();
  let addToCategory = useAddToCategory();

  let addToCategory_ = () => {
    addToCategory(id);
  };

  return (
    <SmallIconButton
      label={labels[language.code].addEditCategory}
      color="green"
      icon={<BiPlus />}
      onClick={addToCategory_}
    />
  );
}
