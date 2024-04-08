import { ModalCloseButton, ModalContent, ModalHeader } from "@chakra-ui/react";
import FolderSelectorBody from "./FolderSelectorBody";
import FolderSelectorFooter from "./FolderSelectorFooter";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

interface FolderSelectorContentProps {
  onClose: () => void;
  onBodyChanged: (isActiveArray: boolean[]) => void;
  isActiveArray: boolean[];
}

export default function FolderSelectorContent({
  onClose,
  onBodyChanged,
  isActiveArray,
}: FolderSelectorContentProps) {
  const isFooterButtonsDisabled = !isActiveArray.find((value) => value);
  const { language } = useLanguage();

  const close_ = () => {
    if (onClose) onClose();
  };

  const bodyChanged = (isActiveArray: boolean[]) => {
    if (onBodyChanged) onBodyChanged(isActiveArray);
  };

  return (
    <ModalContent m={2}>
      <ModalHeader>{labels[language.code].selectFolderDots}</ModalHeader>
      <ModalCloseButton />
      <FolderSelectorBody
        isActiveArray={isActiveArray}
        onChange={bodyChanged}
      />
      <FolderSelectorFooter
        isButtonsDisabled={isFooterButtonsDisabled}
        onClose={close_}
      />
    </ModalContent>
  );
}
