import { ModalBody, ModalCloseButton } from "@chakra-ui/react";
import FolderCreatorForm from "./FolderCreatorForm";
import FolderCreatorHeader from "./FolderCreatorHeader";

interface FolderCreatorContentProps {
  closeCallback: () => void;
}

export default function FolderCreatorContent({
  closeCallback,
}: FolderCreatorContentProps) {
  return (
    <>
      <FolderCreatorHeader />
      <ModalCloseButton />
      <ModalBody>
        <FolderCreatorForm closeCallback={closeCallback} />
      </ModalBody>
    </>
  );
}
