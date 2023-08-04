import { Badge, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";

interface CategoryButtonContentProps {
  id: number;
  title: string;
}

export default function CategoryButtonContent({
  title,
  id,
}: CategoryButtonContentProps) {
  const todos = useSelector(selectTodos);
  const todosCountPerCategory = todos.filter(
    (todo) => todo.categoryId === id
  ).length;

  return (
    <Flex align="center" gap={2} maxW="92.7px" justify="space-between" flex={1}>
      <Text
        textOverflow="ellipsis"
        overflow="hidden"
        display="block"
        title={title}
      >
        {title}
      </Text>
      <Badge
        fontSize="xs"
        variant="solid"
        colorScheme="blue"
        fontWeight="normal"
      >
        {todosCountPerCategory}
      </Badge>
    </Flex>
  );
}
