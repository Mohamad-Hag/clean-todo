import { Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { close, selectForm } from "../../redux/features/formSlice";

interface TodoCreatorFooterProps {
  title: string;
}
export default function TodoCreatorFooter({ title }: TodoCreatorFooterProps) {
  const form = useSelector(selectForm);
  const dispatch = useDispatch();
  const isTitleDefined = form.title?.trim() !== "" && form.title;

  const close_ = () => {
    dispatch(close());
  };

  return (
    <Flex justify="flex-end" gap="1">
      <Button variant="solid" onClick={close_}>
        Close
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
