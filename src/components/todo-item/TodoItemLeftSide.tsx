import { Stack } from "@chakra-ui/react";
import TodoItemInfo from "./TodoItemInfo";
import TodoItemSelectBox from "./TodoItemSelectBox";

interface TodoItemLeftSideProps {
  id: number;
}

export default function TodoItemLeftSide({ id }: TodoItemLeftSideProps) {
  return (
    <Stack direction="row" spacing="5">
      <TodoItemSelectBox id={id} />
      <TodoItemInfo id={id} />
    </Stack>
  );
}
