import { Flex, Stack } from "@chakra-ui/react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAsEdit } from "redux/features/formSlice";
import { selectPreferences } from "redux/features/preferencesSlice";
import { selectTodos } from "redux/features/todosSlice";
import TodoItemDescription from "./TodoItemDescription";
import TodoItemInfoContainer from "./TodoItemInfoContainer";
import TodoItemTitle from "./TodoItemTitle";
import TodoItemInfoDates from "./TodoItemInfoDates";

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
  let folderId = todo.folderId;
  let dueDate = todo.dueDate;

  const edit = () => {
    d(
      openAsEdit({
        id: id,
        title: title,
        description: description,
        priority: priority,
        folderId: folderId,
        dueDate: dueDate,
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
      <TodoItemInfoDates
        isFinished={todo.isFinished!}
        date={date}
        dueDate={dueDate}
      />
    </TodoItemInfoContainer>
  );
}

export default memo(TodoItemInfo);
