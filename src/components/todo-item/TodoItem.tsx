import React, { memo, useRef } from "react";
import TodoProps from "utils/interfaces/common/Todo";
import TodoItemContainer from "../todo-item/TodoItemContainer";
import TodoItemLeftSide from "../todo-item/TodoItemLeftSide";
import TodoItemRightSide from "../todo-item/TodoItemRightSide";

const TodoItem = React.forwardRef(
  ({ id }: TodoProps, ref: React.Ref<HTMLDivElement>) => {
    const rootRef = useRef<HTMLDivElement>(null!);
    const hideItem = (isHidden: boolean) => {
      rootRef.current.style.display = isHidden ? "none" : "flex";
    };    

    return (
      <TodoItemContainer ref={rootRef} id={id!}>
        <TodoItemLeftSide id={id!} />
        <TodoItemRightSide id={id!} hideItemCallback={hideItem} />
      </TodoItemContainer>
    );
  }
);

export default memo(TodoItem);
