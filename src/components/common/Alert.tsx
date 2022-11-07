import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { BiAlarmExclamation } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { close } from "../../redux/features/alertSlice";

export interface AlertProps {
  title: string;
  description: React.ReactNode;
  isOpen: boolean;
  isOkButtonDisabled?: boolean;
  onClose?: () => void;
  onOk?: () => void;
  onCancel?: () => void;
}

export default function Alert({
  title,
  description,
  isOpen,
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
        <ModalHeader display="flex" alignItems="center" gap="2">
          <BiAlarmExclamation />
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>
        <ModalFooter className="flex items-center justify-end gap-2">
          <Button onClick={closed}>Cancel</Button>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={onOk}
            disabled={isOkButtonDisabled}
          >
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
