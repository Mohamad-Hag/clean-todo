import { Checkbox, Flex } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useKeyboardShortcut from "../hooks/useKeyboardShortcut";
import { selectAll, selectTodos } from "../redux/features/todosSlice";
import ToolbarActions from "./ToolbarActions";
import ToolbarInfo from "./ToolbarInfo";
import ToolbarSelect from "./ToolbarSelect";

export interface ToolbarProps {
  todosNumber: number;
  isFilterMode?: boolean;
}

export default function Toolbar({
  todosNumber,
  isFilterMode = false,
}: ToolbarProps) {
  const todos = useSelector(selectTodos);
  let isAllSelected =
    todos.length > 0 ? todos.every((todo) => todo.isSelected) : false;
  const dispatch = useDispatch();

  const selectAll_ = (isSelectAll: boolean) => {
    dispatch(selectAll(isSelectAll));
  };

  const selectAllTodos = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectAll_(e.target.checked);
  };

  useKeyboardShortcut(() => selectAll_(true), 65, "Ctrl");
  useKeyboardShortcut(() => selectAll_(false), 27);

  return (
    <Flex
      className="py-1.5 px-10 border-b-2 border-gray-100 bg-gray-50 select-none"
      zIndex={50}
      align="center"
      justify="space-between"
    >
      <Flex gap="5" direction="row" align="center">
        <Checkbox isChecked={isAllSelected} onChange={selectAllTodos} />
        <label className="text-sm font-semibold text-gray-600 flex gap-1 items-center">
          <ToolbarSelect />
          <ToolbarInfo isFilterMode={isFilterMode} todosNumber={todosNumber} />
        </label>
      </Flex>
      <ToolbarActions todosNumber={todosNumber} />
    </Flex>
  );
}
