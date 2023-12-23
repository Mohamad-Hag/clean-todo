import { Stack } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAsEdit } from "redux/features/formSlice";
import { selectPreferences } from "redux/features/preferencesSlice";
import { selectTodos } from "redux/features/todosSlice";
import TodoItemDescription from "./TodoItemDescription";
import TodoItemTitle from "./TodoItemTitle";
import TodoItemInfoContainer from "./TodoItemInfoContainer";

interface TodoItemInfoProps {
  id: number;
}
function TodoItemInfo({ id }: TodoItemInfoProps) {
  const todos = useSelector(selectTodos);
  const todo = todos.find((td) => td.id === id)!;
  const preferences = useSelector(selectPreferences);
  const editOnDoubleClick = preferences.todoPreferences?.editOnDoubleClick;
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
    <TodoItemInfoContainer
      id={id}
      editOnDoubleClick={editOnDoubleClick!}
      isInTrash={todo.isInTrash!}
      onEdit={edit}
    >
      <Stack spacing="-0.5">
        <TodoItemTitle id={id} />
        <TodoItemDescription id={id} description={description} />
      </Stack>
      <label className="text-xs text-gray-400">{date}</label>
    </TodoItemInfoContainer>
  );
}

export default memo(TodoItemInfo);
