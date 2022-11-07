import { ModalBody, ModalCloseButton } from "@chakra-ui/react";
import TodoCreatorForm from "./TodoCreatorForm";
import TodoCreatorHeader from "./TodoCreatorHeader";

interface TodoCreatorContentProps {
  closeCallback: () => void;
}

export default function TodoCreatorContent({
  closeCallback,
}: TodoCreatorContentProps) {
  return (
    <>
      <TodoCreatorHeader />
      <ModalCloseButton />
      <ModalBody>
        <TodoCreatorForm closeCallback={closeCallback} />
      </ModalBody>
    </>
  );
}
