import { ModalHeader } from "@chakra-ui/react";
import { BiPlus, BiPencil } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectCategoryForm } from "../../../../../redux/features/categoryFormSlice";

export default function CategoryCreatorHeader() {
  const form = useSelector(selectCategoryForm);
  const formTitle = form.mode === "create" ? "Create" : "Edit";
  const formIcon = form.mode === "create" ? <BiPlus /> : <BiPencil />;

  return (
    <ModalHeader display="flex" alignItems="center" gap="2">
      {formIcon}
      {formTitle} Category
    </ModalHeader>
  );
}
