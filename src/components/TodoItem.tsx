import { Checkbox, Stack } from "@chakra-ui/react";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAsEdit } from "../redux/features/formSlice";
import { edit, remove, selectTodos } from "../redux/features/todosSlice";
import TodoProps from "../utils/interfaces/common/Todo";
import TodoItemButtons from "./TodoItemButtons";
import TodoItemContainer from "./TodoItemContainer";
import TodoItemInfo from "./TodoItemInfo";

const TodoItem = React.forwardRef(
  (
    { id, description, title, date }: TodoProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const todos = useSelector(selectTodos);
    let isFinished: boolean = !!todos.find((todo) => todo.id === id)?.isFinshed;
    let isSelected: boolean = !!todos.find((todo) => todo.id === id)
      ?.isSelected;
    const dispatch = useDispatch();

    const finished = () => {
      dispatch(
        edit({
          id: id!,
          editable: {
            isFinshed: !isFinished,
          },
        })
      );
    };

    const removed = () => {
      dispatch(remove(id!));
    };

    const edited = () => {
      dispatch(openAsEdit({ id: id, title: title, description: description }));
    };

    const select = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(edit({ id: id!, editable: { isSelected: e.target.checked } }));
    };

    return (
      <TodoItemContainer
        ref={ref}
        isFinished={isFinished}
        isSelected={isSelected}
      >
        <Stack direction="row" spacing="5">
          <Checkbox isChecked={isSelected} onChange={select} />
          <TodoItemInfo title={title} description={description} date={date} />
        </Stack>
        <TodoItemButtons
          id={id}
          onRemove={removed}
          onEdit={edited}
          onFinish={finished}
        />
      </TodoItemContainer>
    );
  }
);

export default memo(TodoItem);
