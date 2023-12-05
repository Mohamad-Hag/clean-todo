import { Stack } from "@chakra-ui/react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAsEdit } from "redux/features/formSlice";
import { selectTodos } from "redux/features/todosSlice";
import TodoItemDescription from "./TodoItemDescription";
import TodoItemTitle from "./TodoItemTitle";

interface TodoItemInfo {
  id: number;
}
function TodoItemInfo({ id }: TodoItemInfo) {
  const todos = useSelector(selectTodos);
  const todo = todos.find((td) => td.id === id)!;
  const d = useDispatch();
  if (!todo) return <></>;

  let description = todo.description;
  let title = todo.title;
  let date = todo.date;
  let priority = todo.priority;

  const edit = () => {
    d(
      openAsEdit({
        id: id,
        title: title,
        description: description,
        priority: priority,
      })
    );
  };

  return (
    <Stack
      spacing="1"
      onDoubleClick={todo.isInTrash ? undefined : edit}
      border="1px solid transparent"
      _hover={{
        bg: "#22222205",
        border: "1px solid #22222210",
      }}
      _active={{
        bg: "#22222210",
      }}
      p="2"
      borderRadius="md"
    >
      <Stack spacing="-0.5">
        <TodoItemTitle id={id} />
        <TodoItemDescription description={description} />
      </Stack>
      <label className="text-xs text-gray-400">{date}</label>
    </Stack>
  );
}

export default memo(TodoItemInfo);
