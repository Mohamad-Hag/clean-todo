import { BiPlus } from "react-icons/bi";
import useAddToFolder from "hooks/useAddToFolder";
import SmallIconButton from "../SmallIconButton";
import { TodoItemRightSideProps } from "../todo-item/TodoItemRightSide";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

export default function AddItemToFolderButton({
  id,
}: TodoItemRightSideProps) {
  const { language } = useLanguage();
  let addToFolder = useAddToFolder();

  let addToFolder_ = () => {
    addToFolder(id);
  };

  return (
    <SmallIconButton
      label={labels[language.code].addEditFolder}
      color="green"
      icon={<BiPlus />}
      onClick={addToFolder_}
    />
  );
}
