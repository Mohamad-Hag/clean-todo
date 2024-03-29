import { ModalCloseButton, ModalContent, ModalHeader } from "@chakra-ui/react";
import CategorySelectorBody from "./CategorySelectorBody";
import CategorySelectorFooter from "./CategorySelectorFooter";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

interface CategorySelectorContentProps {
  onClose: () => void;
  onBodyChanged: (isActiveArray: boolean[]) => void;
  isActiveArray: boolean[];
}

export default function CategorySelectorContent({
  onClose,
  onBodyChanged,
  isActiveArray,
}: CategorySelectorContentProps) {
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
      <ModalHeader>{labels[language.code].selectCategoryDots}</ModalHeader>
      <ModalCloseButton />
      <CategorySelectorBody
        isActiveArray={isActiveArray}
        onChange={bodyChanged}
      />
      <CategorySelectorFooter
        isButtonsDisabled={isFooterButtonsDisabled}
        onClose={close_}
      />
    </ModalContent>
  );
}
