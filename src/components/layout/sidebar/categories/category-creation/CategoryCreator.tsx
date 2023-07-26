import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategoryForm } from "../../../../../redux/features/categoryFormSlice";
import { close } from "../../../../../redux/features/categoryFormSlice";
import CategoryCreatorContent from "./CategoryCreatorContent";

export default function CategoryCreator() {
  const form = useSelector(selectCategoryForm);
  const d = useDispatch();

  const onClose = () => {
    d(close());
  };

  return (
    <Modal
      isOpen={!!form.isOpen}
      onClose={onClose}
      size="lg"      
    >
      <ModalOverlay />
      <ModalContent m={2}>
        <CategoryCreatorContent closeCallback={onClose} />
      </ModalContent>
    </Modal>
  );
}
