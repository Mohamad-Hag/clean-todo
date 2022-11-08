import { Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../../redux/features/todosSlice";
import { WithMultipleChildren } from "../../utils/interfaces/WithChildren";

interface TodoItemContainerProps extends WithMultipleChildren {
  id: number;
}

const TodoItemContainer = React.forwardRef(
  (
    { id, children }: TodoItemContainerProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const todos = useSelector(selectTodos);
    let isFinished: boolean = !!todos.find((todo) => todo.id === id)?.isFinshed;
    let isSelected: boolean = !!todos.find((todo) => todo.id === id)
      ?.isSelected;
    const rootClassName = `bg-white px-10 py-5 select-none hover:bg-gray-50 hover:shadow-inner ${
      isFinished && "opacity-30"
    } ${isSelected && "bg-blue-100 hover:bg-blue-100"}`;

    return (
      <Flex
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
