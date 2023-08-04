import { Button, ModalBody } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  change,
  selectCategorySelector,
} from "redux/features/categorySelectorSlice";
import { selectCategories } from "redux/features/categorySlice";
import getCategoryIconByTitle from "utils/getCategoryIconByTitle";

interface CategorySelectorBodyProps {
  isActiveArray: boolean[];
  onChange: (isActiveArray: boolean[]) => void;
}

export default function CategorySelectorBody({
  isActiveArray,
  onChange,
}: CategorySelectorBodyProps) {
  const categories = useSelector(selectCategories);
  const categorySelector = useSelector(selectCategorySelector);
  const d = useDispatch();

  const change_ = (index: number, categoryId: number) => {
    let activeArray = [...isActiveArray];
    let activeBackgroundIndex = activeArray.findIndex((isActive) => isActive);
    activeArray[activeBackgroundIndex] = false;
    activeArray[index] = true;
    d(
      change({
        categoryId: categoryId,
        itemId: categorySelector.ids?.itemId!,
      })
    );

    if (onChange) onChange(activeArray);
  };

  return (
    <ModalBody>
      {categories.map((category, i) => (
        <Button
          key={category.id}
          w="100%"
          justifyContent="flex-start"
          gap="1"
          variant="ghost"
          isActive={isActiveArray[i]}
          onClick={() => change_(i, category.id!)}
        >
          <p>{getCategoryIconByTitle(category.icon!)}</p>
          <p>{category.title}</p>
        </Button>
      ))}
    </ModalBody>
  );
}
