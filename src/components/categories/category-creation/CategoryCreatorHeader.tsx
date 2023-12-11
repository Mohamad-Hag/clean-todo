import { ModalHeader } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { BiPlus, BiPencil } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectCategoryForm } from "redux/features/categoryFormSlice";

export default function CategoryCreatorHeader() {
  const { language } = useLanguage();
  const form = useSelector(selectCategoryForm);
  const formTitle =
    form.mode === "create"
      ? labels[language.code].create
      : labels[language.code].edit;
  const formIcon = form.mode === "create" ? <BiPlus /> : <BiPencil />;

  return (
    <ModalHeader display="flex" alignItems="center" gap="2">
      {formIcon}
      {formTitle} {labels[language.code].category}
    </ModalHeader>
  );
}
