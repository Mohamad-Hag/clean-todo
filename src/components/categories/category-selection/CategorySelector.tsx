import { Modal, ModalOverlay } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategorySelector } from "redux/features/categorySelectorSlice";
import { selectCategories } from "redux/features/categorySlice";
import CategorySelectorContent from "./CategorySelectorContent";
import { useDispatch } from "react-redux";
import { close } from "redux/features/categorySelectorSlice";

export default function CategorySelector() {
  const categories = useSelector(selectCategories);
  const categorySelector = useSelector(selectCategorySelector);
  const d = useDispatch();

  const initialize = () =>
    Array(categories.length)
      .fill(false)
      .map(
        (_, index) => categories[index].id === categorySelector.ids?.categoryId
      );

  useEffect(() => {
    setIsActiveArray(initialize());
  }, [categorySelector.ids]);

  const [isActiveArray, setIsActiveArray] = useState<boolean[]>(initialize());

  const close_ = () => {
    d(close());
    setIsActiveArray(isActiveArray.fill(false));
  };

  const bodyChanged = (isActiveArr: boolean[]) => {
    setIsActiveArray(isActiveArr);
  };

  return (
    <Modal
      isOpen={categorySelector.isOpen!}
      onClose={close_}
      size="sm"
      closeOnEsc
    >
      <ModalOverlay />
      <CategorySelectorContent
        onBodyChanged={bodyChanged}
        onClose={close_}
        isActiveArray={isActiveArray}
      />
    </Modal>
  );
}
