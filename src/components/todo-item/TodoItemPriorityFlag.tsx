import { Flex, Tooltip } from "@chakra-ui/react";
import { BiFlag } from "react-icons/bi";
import Priority from "utils/types/Priority";

interface TodoItemPriorityFlagProps {
  priority: Priority;
}

export default function TodoItemPriorityFlag({
  priority,
}: TodoItemPriorityFlagProps) {
  const color =
    priority === "low" ? "blue" : priority === "medium" ? "green" : "red";

  return (
    <Tooltip label={priority} hasArrow>
      <Flex
        bg={color}
        h="6"
        w="6"
        borderRadius="md"
        justify="center"
        align="center"
      >
        <BiFlag fill="white" size={15} />
      </Flex>
    </Tooltip>
  );
}
