import { Stack } from "@chakra-ui/react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAsEdit } from "../../redux/features/formSlice";
import { selectTodos } from "../../redux/features/todosSlice";
import TodoItemDescription from "./TodoItemDescription";
import TodoItemPriorityFlag from "./TodoItemPriorityFlag";

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
      onDoubleClick={edit}
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
        <div className="text-xl font-semibold toolbar-item-info-title flex items-center gap-3">
          <TodoItemPriorityFlag priority={priority!} />
          <h1>{title}</h1>
        </div>
        <TodoItemDescription description={description} />
      </Stack>
      <label className="text-xs text-gray-400">{date}</label>
    </Stack>
  );
}

export default memo(TodoItemInfo);
