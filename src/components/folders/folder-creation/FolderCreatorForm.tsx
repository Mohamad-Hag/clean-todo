import { Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectFolderForm } from "redux/features/folderFormSlice";
import { create, edit } from "redux/features/folderSlice";
import FolderCreatorBody from "./FolderCreatorBody";
import FolderCreatorFooter from "./FolderCreatorFooter";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { clearFolderForm } from "redux/features/draftSlice";

interface FolderCreatorFormProps {
  closeCallback: () => void;
}

export default function FolderCreatorForm({
  closeCallback,
}: FolderCreatorFormProps) {
  const { language } = useLanguage();
  const form = useSelector(selectFolderForm);
  const formTitle =
    form.mode === "create" || form.mode === "draft"
      ? labels[language.code].create
      : labels[language.code].edit;
  const d = useDispatch();

  const editFolder = () => {
    d(
      edit({
        id: form.id!,
        editable: {
          title: form.title?.trim(),
          icon: form.icon,
        },
      })
    );
  };

  const createFolder = () => {
    d(
      create({
        title: form.title?.trim(),
        icon: form.icon,
      })
    );
    d(clearFolderForm());
  };

  const create_ = () => {
    const isTitleDefined = form.title?.trim() !== "" && form.title;
    if (!isTitleDefined) return;
    if (form.mode === "create" || form.mode === "draft") createFolder();
    else editFolder();
    closeCallback();
  };

  const submitted = (e: React.FormEvent) => {
    e.preventDefault();
    create_();
  };
  return (
    <form onSubmit={submitted}>
      <Stack spacing="4">
        <FolderCreatorBody />
        <FolderCreatorFooter title={formTitle} />
      </Stack>
    </form>
  );
}
