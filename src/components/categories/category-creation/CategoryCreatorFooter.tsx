import { Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  close,
  selectCategoryForm,
} from "../../../redux/features/categoryFormSlice";
import labels from "../../../data/json/ui-labels.json";

interface TodoCreatorFooterProps {
  title: string;
}
export default function CategoryCreatorFooter({
  title,
}: TodoCreatorFooterProps) {
  const form = useSelector(selectCategoryForm);
  const d = useDispatch();
  const isTitleDefined = form.title?.trim() !== "" && form.title;

  const close_ = () => {
    d(close());
  };

  return (
    <Flex justify="flex-end" gap="1">
      <Button variant="solid" onClick={close_}>
        {labels.close}
      </Button>
      <Button
        variant="solid"
        colorScheme="blue"
        type="submit"
        disabled={!isTitleDefined}
      >
        {title}
      </Button>
    </Flex>
  );
}
