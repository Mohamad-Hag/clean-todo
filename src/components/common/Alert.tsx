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
import { useDispatch } from "react-redux";
import { IoSettings } from "react-icons/io5";
import { close } from "redux/features/alertSlice";
import labels from "data/typescript/uiLabels";
import { RiAlertFill } from "react-icons/ri";
import useLanguage from "hooks/useLanguage";

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
  const { language } = useLanguage();
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
          {icon === "alert" ? (
            <RiAlertFill />
          ) : icon === "settings" ? (
            <IoSettings />
          ) : (
            ""
          )}
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{description}</ModalBody>
        <ModalFooter className="flex items-center justify-end gap-2">
          <Button onClick={closed}>{labels[language.code].cancel}</Button>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={onOk}
            disabled={isOkButtonDisabled}
          >
            {labels[language.code].ok}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

