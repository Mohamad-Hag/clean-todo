import { Flex } from "@chakra-ui/react";

interface TodoItemContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  isFinished: boolean;
  isSelected: boolean;
}

export default function TodoItemContainer({
  isFinished,
  isSelected,
  children,
}: TodoItemContainerProps) {
  const rootClassName = `bg-white px-10 py-5 select-none hover:bg-gray-50 hover:shadow-inner ${
    isFinished && "opacity-30"
  } ${isSelected && "bg-blue-100 hover:bg-blue-100"}`;

  return (
    <Flex
      className={rootClassName}
      gap="2"
      align="center"
      justify="space-between"
    >
      {children}
    </Flex>
  );
}
