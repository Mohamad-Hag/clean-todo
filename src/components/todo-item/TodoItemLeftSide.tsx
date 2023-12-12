import { Stack } from "@chakra-ui/react";
import TodoItemInfo from "./TodoItemInfo";
import TodoItemSelectBox from "./TodoItemSelectBox";
import { isMobile } from "react-device-detect";

interface TodoItemLeftSideProps {
  id: number;
}

export default function TodoItemLeftSide({ id }: TodoItemLeftSideProps) {
  const spacing = isMobile ? "2" : "5";

  return (
    <Stack direction="row" spacing={spacing} flex="1">
      <TodoItemSelectBox id={id} />
      <TodoItemInfo id={id} />
    </Stack>
  );
}
