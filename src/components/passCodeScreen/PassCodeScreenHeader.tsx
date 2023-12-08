import { ModalHeader, Text } from "@chakra-ui/react";
import Logo from "components/Logo";
import { BiLock } from "react-icons/bi";

export default function PassCodeScreenHeader() {
  return (
    <ModalHeader className="flex items-center flex-col gap-2">
      <div className="scale-75 border-b-2 pb-5 w-full flex justify-center items-center">
        <Logo theme="light" />
      </div>
      <div className="flex flex-col items-center">
        <BiLock size={40} />
        <Text>Pass Code Check</Text>
      </div>
    </ModalHeader>
  );
}
