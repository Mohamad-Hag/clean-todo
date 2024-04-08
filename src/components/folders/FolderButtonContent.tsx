import { Badge, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";

interface FolderButtonContentProps {
  id: number;
  title: string;
}

export default function FolderButtonContent({
  title,
  id,
}: FolderButtonContentProps) {
  const todos = useSelector(selectTodos);
  const todosCountPerFolder = todos.filter(
    (todo) => todo.folderId === id && !todo.isInTrash
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
        {todosCountPerFolder}
      </Badge>
    </Flex>
  );
}
