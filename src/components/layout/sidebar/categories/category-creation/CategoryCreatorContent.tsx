import { ModalBody, ModalCloseButton } from "@chakra-ui/react";
import CategoryCreatorForm from "./CategoryCreatorForm";
import CategoryCreatorHeader from "./CategoryCreatorHeader";

interface CategoryCreatorContentProps {
  closeCallback: () => void;
}

export default function CategoryCreatorContent({
  closeCallback,
}: CategoryCreatorContentProps) {
  return (
    <>
      <CategoryCreatorHeader />
      <ModalCloseButton />
      <ModalBody>
        <CategoryCreatorForm closeCallback={closeCallback} />
      </ModalBody>
    </>
  );
}
