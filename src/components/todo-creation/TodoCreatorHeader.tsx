import { ModalHeader } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { BiPlus, BiPencil } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectForm } from "redux/features/formSlice";

export default function TodoCreatorHeader() {
  const { language } = useLanguage();
  const form = useSelector(selectForm);
  const formTitle =
    form.mode === "create" || form.mode === "draft"
      ? labels[language.code].create
      : labels[language.code].edit;
  const formIcon =
    form.mode === "create" || form.mode === "draft" ? <BiPlus /> : <BiPencil />;

  return (
    <ModalHeader display="flex" alignItems="center" gap="2">
      {formIcon}
      {formTitle} {labels[language.code].todo}
    </ModalHeader>
  );
}
