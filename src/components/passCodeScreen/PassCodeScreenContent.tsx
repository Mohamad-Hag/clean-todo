import { ModalContent } from "@chakra-ui/react";
import PassCodeScreenBody from "./PassCodeScreenBody";
import PassCodeScreenHeader from "./PassCodeScreenHeader";

export default function PassCodeScreenContent() {
  return (
    <ModalContent px="6" py="3" textAlign="center">      
      <PassCodeScreenHeader />
      <PassCodeScreenBody />
    </ModalContent>
  );
}
