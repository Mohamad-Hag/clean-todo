import { ModalHeader } from "@chakra-ui/react";
import { BiPlus, BiPencil } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectForm } from "redux/features/formSlice";

export default function TodoCreatorHeader() {
  const form = useSelector(selectForm);
  const formTitle = form.mode === "create" ? "Create" : "Edit";
  const formIcon = form.mode === "create" ? <BiPlus /> : <BiPencil />;

  return (
    <ModalHeader display="flex" alignItems="center" gap="2">
      {formIcon}
      {formTitle} Todo
    </ModalHeader>
  );
}
