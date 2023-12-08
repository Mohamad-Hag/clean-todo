import { ModalHeader, Text } from "@chakra-ui/react";
import { BiLock } from "react-icons/bi";

export default function PassCodeScreenHeader() {
  return (
    <ModalHeader className="flex items-center flex-col gap-1">
      <BiLock size={40} />
      <Text>Pass Code Check</Text>
    </ModalHeader>
  );
}
