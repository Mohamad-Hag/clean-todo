import { ModalContent } from "@chakra-ui/react";
import PassCodeScreenBody from "./PassCodeScreenBody";
import PassCodeScreenHeader from "./PassCodeScreenHeader";

export default function PassCodeScreenContent() {
  return (
    <ModalContent padding="6" textAlign="center">      
      <PassCodeScreenHeader />
      <PassCodeScreenBody />
    </ModalContent>
  );
}
