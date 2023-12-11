import { Button, ModalFooter } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  close,
  select,
  selectCategorySelector,
} from "redux/features/categorySelectorSlice";
import { edit } from "redux/features/todosSlice";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

interface CategorySelectorFooterProps {
  isButtonsDisabled: boolean;
  onClose: () => void;
}

export default function CategorySelectorFooter({
  isButtonsDisabled,
  onClose,
}: CategorySelectorFooterProps) {
  const { language } = useLanguage();
  const categorySelector = useSelector(selectCategorySelector);
  const d = useDispatch();

  const select_ = (isRemoveCategory: boolean) => {
    d(select());
    let newCategoryId = !isRemoveCategory
      ? categorySelector.ids?.categoryId
      : null;
    d(
      edit({
        id: categorySelector.ids?.itemId!,
        editable: {
          categoryId: newCategoryId,
        },
      })
    );
  };

  const close_ = () => {
    if (onClose) onClose();
    d(close());
  };

  return (
    <ModalFooter className="flex items-center gap-1">
      <Button onClick={close_}>{labels[language.code].cancel}</Button>
      <Button
        colorScheme="red"
        variant="solid"
        isDisabled={isButtonsDisabled}
        onClick={() => select_(true)}
      >
        {labels[language.code].remove}
      </Button>
      <Button
        colorScheme="blue"
        variant="solid"
        isDisabled={isButtonsDisabled}
        onClick={() => select_(false)}
      >
        {labels[language.code].select}
      </Button>
    </ModalFooter>
  );
}
