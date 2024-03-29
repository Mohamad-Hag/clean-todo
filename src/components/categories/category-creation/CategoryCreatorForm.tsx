import { Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryForm } from "redux/features/categoryFormSlice";
import { create, edit } from "redux/features/categorySlice";
import CategoryCreatorBody from "./CategoryCreatorBody";
import CategoryCreatorFooter from "./CategoryCreatorFooter";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import { clearCategoryForm } from "redux/features/draftSlice";

interface CategoryCreatorFormProps {
  closeCallback: () => void;
}

export default function CategoryCreatorForm({
  closeCallback,
}: CategoryCreatorFormProps) {
  const { language } = useLanguage();
  const form = useSelector(selectCategoryForm);
  const formTitle =
    form.mode === "create" || form.mode === "draft"
      ? labels[language.code].create
      : labels[language.code].edit;
  const d = useDispatch();

  const editCategory = () => {
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

  const createCategory = () => {
    d(
      create({
        title: form.title?.trim(),
        icon: form.icon,
      })
    );
    d(clearCategoryForm());
  };

  const create_ = () => {
    const isTitleDefined = form.title?.trim() !== "" && form.title;
    if (!isTitleDefined) return;
    if (form.mode === "create" || form.mode === "draft") createCategory();
    else editCategory();
    closeCallback();
  };

  const submitted = (e: React.FormEvent) => {
    e.preventDefault();
    create_();
  };
  return (
    <form onSubmit={submitted}>
      <Stack spacing="4">
        <CategoryCreatorBody />
        <CategoryCreatorFooter title={formTitle} />
      </Stack>
    </form>
  );
}
