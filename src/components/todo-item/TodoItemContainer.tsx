import { Flex } from "@chakra-ui/react";
import useIsMobile from "hooks/useIsMobile";
import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "redux/features/todosSlice";
import { WithMultipleChildren } from "utils/interfaces/WithChildren";

interface TodoItemContainerProps extends WithMultipleChildren {
  id: number;
}

const TodoItemContainer = React.forwardRef(
  (
    { id, children }: TodoItemContainerProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const isMobile = useIsMobile();
    const todos = useSelector(selectTodos);
    let isFinished: boolean = !!todos.find((todo) => todo.id === id)
      ?.isFinished;
    let isSelected: boolean = !!todos.find((todo) => todo.id === id)
      ?.isSelected;
    const paddingX = isMobile ? "5" : "10";
    const paddingY = isMobile ? "2" : "5";
    const border = isMobile ? "0px solid #eee" : undefined;
    const rootClassName = `bg-white px-${paddingX} py-${paddingY} select-none hover:bg-gray-50 hover:shadow-inner ${
      isFinished && "opacity-30"
    } ${isSelected && "bg-blue-100 hover:bg-blue-100"}`;

    return (
      <Flex
        border={border}
        borderBottomWidth={isMobile ? "1px" : undefined}
        ref={ref}
        className={rootClassName}
        gap="2"
        align="center"
        justify="space-between"
      >
        {children}
      </Flex>
    );
  }
);

export default TodoItemContainer;
