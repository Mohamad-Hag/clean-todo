import { Button, Flex } from "@chakra-ui/react";
import { BiInfoCircle } from "react-icons/bi";

interface UndoToastProps {
  onUndo: () => void;
  title?: string;
}

export default function UndoToast({
  onUndo,
  title = "Undo the operation?",
}: UndoToastProps) {
  return (
    <Flex
      p="3"
      align="center"
      gap="3"
      className="bg-blue-200 rounded-md w-96"
      justify="space-between"
    >
      <Flex align="center" gap="2" justify="space-between">
        <BiInfoCircle size={25} className="fill-blue-500" />
        <p className="font-semibold">{title}</p>
      </Flex>
      <Button variant="ghost" onClick={onUndo}>
        Undo
      </Button>
    </Flex>
  );
}
