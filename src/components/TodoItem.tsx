import { Checkbox, Stack, useToast } from "@chakra-ui/react";
import React, { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openAsEdit } from "../redux/features/formSlice";
import { edit, remove, selectTodos } from "../redux/features/todosSlice";
import TodoProps from "../utils/interfaces/common/Todo";
import TodoItemButtons from "./TodoItemButtons";
import TodoItemContainer from "./TodoItemContainer";
import TodoItemInfo from "./TodoItemInfo";
import UndoToast from "./UndoToast";

const TodoItem = React.forwardRef(
  (
    { id, description, title, date }: TodoProps,
    ref: React.Ref<HTMLDivElement>
  ) => {        
    const todos = useSelector(selectTodos);
    let isFinished: boolean = !!todos.find((todo) => todo.id === id)?.isFinshed;
    let isSelected: boolean = !!todos.find((todo) => todo.id === id)
      ?.isSelected;
    const rootRef = useRef<HTMLDivElement>(null!);    
    const dispatch = useDispatch();
    const toast = useToast();    

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

    const hideItem = (isHidden: boolean) => {
      rootRef.current.style.display = isHidden ? "none" : "flex";
    };

    const renderUndoToast = (onUndo: () => void) => (
      <UndoToast title={`Undo remove "${title}"?`} onUndo={onUndo} />
    );

    const removed = () => {
      let isUndo = false;
      hideItem(true);
      toast({
        id: id,
        duration: 3000,
        render: () =>
          renderUndoToast(() => {
            isUndo = true;
            hideItem(false);
            toast.close(id!);
          }),
        onCloseComplete: () => (!isUndo ? dispatch(remove(id!)) : null),
      });
    };

    const edited = () => {
      dispatch(openAsEdit({ id: id, title: title, description: description }));      
    };

    const select = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(edit({ id: id!, editable: { isSelected: e.target.checked } }));
    };

    return (
      <TodoItemContainer
        ref={rootRef}
        isFinished={isFinished}
        isSelected={isSelected}
      >
        <Stack direction="row" spacing="5">
          <Checkbox isChecked={isSelected} onChange={select} />
          <TodoItemInfo
            title={title}
            description={description}
            date={date}
            onDoubleClick={edited}
          />
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
