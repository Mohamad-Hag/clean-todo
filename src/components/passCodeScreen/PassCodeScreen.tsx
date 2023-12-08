import { Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import PassCodeScreenContent from "./PassCodeScreenContent";
import Logo from "components/Logo";

export default function PassCodeScreen() {
  const { onClose } = useDisclosure();

  return (
    <Modal isOpen={true} onClose={onClose} isCentered size="sm">
      <div className="p-10">
        <Logo />
      </div>
      <ModalOverlay />
      <PassCodeScreenContent />
    </Modal>
  );
}
