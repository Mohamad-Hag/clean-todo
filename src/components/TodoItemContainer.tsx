import { Flex } from "@chakra-ui/react";
import React from "react";

interface TodoItemContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  isFinished: boolean;
  isSelected: boolean;
}

const TodoItemContainer = React.forwardRef(
  (
    { isFinished, isSelected, children }: TodoItemContainerProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
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
