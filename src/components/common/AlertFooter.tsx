import { Button, ModalFooter } from "@chakra-ui/react";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

interface AlertFooterProps {
  isOkButtonDisabled: boolean;
  onClose?: () => void;
  onOk?: () => void;
}

export default function AlertFooter({
  isOkButtonDisabled,
  onClose,
  onOk,
}: AlertFooterProps) {
  const { language } = useLanguage();

  return (
    <ModalFooter className="flex items-center justify-end gap-2">
      <Button onClick={onClose}>{labels[language.code].cancel}</Button>
      <Button
        variant="solid"
        colorScheme="blue"
        onClick={onOk}
        disabled={isOkButtonDisabled}
      >
        {labels[language.code].ok}
      </Button>
    </ModalFooter>
  );
}
