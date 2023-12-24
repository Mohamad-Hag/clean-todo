import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { close } from "redux/features/alertSlice";
import AlertFooter from "./AlertFooter";
import AlertHeader from "./AlertHeader";

export interface AlertProps {
  title: string;
  description: React.ReactNode;
  isOpen: boolean;
  isOkButtonDisabled?: boolean;
  icon?: "alert" | "settings";
  onClose?: () => void;
  onOk?: () => void;
  onCancel?: () => void;
}

export default function Alert({
  title,
  description,
  isOpen,
  icon = "alert",
  isOkButtonDisabled = false,
  onClose,
  onOk,
}: AlertProps) {
  const d = useDispatch();

  const closed = () => {
    if (!onClose) d(close());
    else onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closed}
      size="lg"
      closeOnOverlayClick={false}
      motionPreset="scale"
    >
      <ModalOverlay />
      <ModalContent m={2}>
        <AlertHeader icon={icon} title={title} />
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>
        <AlertFooter
          onClose={closed}
          isOkButtonDisabled={isOkButtonDisabled}
          onOk={onOk}
        />
      </ModalContent>
    </Modal>
  );
}
