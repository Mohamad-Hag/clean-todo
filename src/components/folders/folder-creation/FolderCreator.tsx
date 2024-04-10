import { Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectFolderForm } from "redux/features/folderFormSlice";
import { close } from "redux/features/folderFormSlice";
import FolderCreatorContent from "./FolderCreatorContent";
import keyShortcutBlockedClassName from "data/typescript/keyShortcutBlockedClassName";

export default function FolderCreator() {
  const form = useSelector(selectFolderForm);
  const d = useDispatch();

  const onClose = () => {
    d(close());
  };

  return (
    <Modal isOpen={!!form.isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent className={keyShortcutBlockedClassName} m={2}>
        <FolderCreatorContent closeCallback={onClose} />
      </ModalContent>
    </Modal>
  );
}
