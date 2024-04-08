import { ModalHeader } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { BiPlus, BiPencil } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectFolderForm } from "redux/features/folderFormSlice";

export default function FolderCreatorHeader() {
  const { language } = useLanguage();
  const form = useSelector(selectFolderForm);
  const formTitle =
    form.mode === "create" || form.mode === "draft"
      ? labels[language.code].create
      : labels[language.code].edit;
  const formIcon = form.mode === "create" || form.mode === "draft" ? <BiPlus /> : <BiPencil />;

  return (
    <ModalHeader display="flex" alignItems="center" gap="2">
      {formIcon}
      {formTitle} {labels[language.code].folder}
    </ModalHeader>
  );
}
