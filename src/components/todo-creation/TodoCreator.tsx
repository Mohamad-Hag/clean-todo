import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { close, selectForm } from "redux/features/formSlice";
import TodoCreatorContent from "./TodoCreatorContent";
import keyShortcutBlockedClassName from "data/typescript/keyShortcutBlockedClassName";

export default function TodoCreator() {
  const form = useSelector(selectForm);
  const d = useDispatch();

  const onClose = () => {
    d(close());
  };

  return (
    <Modal isOpen={!!form.isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent className={keyShortcutBlockedClassName} m={2}>
        <TodoCreatorContent closeCallback={onClose} />
      </ModalContent>
    </Modal>
  );
}
