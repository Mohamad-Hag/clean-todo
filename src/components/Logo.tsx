import { Flex } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

export default function Logo() {
  return (
    <Flex gap="2" direction="row" align="center">
      <FaCheckCircle className="text-white" size={30} />
      <p className="text-white font-mono font-bold select-none whitespace-nowrap">
        CLEAN <span className="text-blue-400">TODO</span>.
      </p>
    </Flex>
  );
}
