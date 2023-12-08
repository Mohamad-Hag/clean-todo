import { Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import PassCodeScreenContent from "./PassCodeScreenContent";

export default function PassCodeScreen() {
  const { onClose } = useDisclosure();

  return (
    <Modal isOpen={true} onClose={onClose} isCentered size="sm">
      <ModalOverlay />
      <PassCodeScreenContent />
    </Modal>
  );
}
