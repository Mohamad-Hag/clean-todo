import { Checkbox } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useKeyboardShortcut from "../../hooks/useKeyboardShortcut";
import { selectAll, selectTodos } from "../../redux/features/todosSlice";
import { ToolbarProps } from "./Toolbar";

export default function ToolbarSelectBox({
  isFilterMode,
  todosNumber,
}: ToolbarProps) {
  const todos = useSelector(selectTodos);
  let isAllSelected =
    todos.length > 0 ? todos.every((todo) => todo.isSelected) : false;
  const d = useDispatch();
  let isSelectBoxDisabled = isFilterMode || todosNumber === 0;

  const selectAllTodos = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFilterMode) return;
    selectAll_(e.target.checked);
  };

  const selectAll_ = (isSelectAll: boolean) => {
    d(selectAll(isSelectAll));
  };

  useKeyboardShortcut(() => selectAll_(true), 65, "Ctrl");
  useKeyboardShortcut(() => selectAll_(false), 27);

  return (
    <Checkbox
      isChecked={isAllSelected}
      onChange={selectAllTodos}
      disabled={isSelectBoxDisabled}
    />
  );
}
