import { Stack } from "@chakra-ui/react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAsEdit } from "../../redux/features/formSlice";
import { selectTodos } from "../../redux/features/todosSlice";

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
  const isDescriptionDefined = description && description !== "";

  const edit = () => {
    d(openAsEdit({ id: id, title: title, description: description }));
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
        <h1 className="text-xl font-semibold toolbar-item-info-title">
          {title}
        </h1>
        {isDescriptionDefined && (
          <p className="toolbar-item-info-description">{description}</p>
        )}
      </Stack>
      <label className="text-xs text-gray-400">{date}</label>
    </Stack>
  );
}

export default memo(TodoItemInfo);
