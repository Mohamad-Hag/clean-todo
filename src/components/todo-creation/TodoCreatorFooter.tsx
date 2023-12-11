import { Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { close, selectForm } from "redux/features/formSlice";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";

interface TodoCreatorFooterProps {
  title: string;
}
export default function TodoCreatorFooter({ title }: TodoCreatorFooterProps) {
  const { language } = useLanguage();
  const form = useSelector(selectForm);
  const d = useDispatch();
  const isTitleDefined = form.title?.trim() !== "" && form.title;

  const close_ = () => {
    d(close());
  };

  return (
    <Flex justify="flex-end" gap="1">
      <Button variant="solid" onClick={close_}>
        {labels[language.code].close}
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
