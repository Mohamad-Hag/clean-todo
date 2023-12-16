import { Stack } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import TodoItemInfo from "./TodoItemInfo";
import TodoItemSelectBox from "./TodoItemSelectBox";

interface TodoItemLeftSideProps {
  id: number;
}

export default function TodoItemLeftSide({ id }: TodoItemLeftSideProps) {
  const isMobile = useIsMobile();
  const spacing = isMobile ? "2" : "5";

  return (
    <Stack direction="row" spacing={spacing} flex="1">
      <TodoItemSelectBox id={id} />
      <TodoItemInfo id={id} />
    </Stack>
  );
}
