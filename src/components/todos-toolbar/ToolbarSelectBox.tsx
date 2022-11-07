import { Checkbox } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useKeyboardShortcut from "../../hooks/useKeyboardShortcut";
import { selectAll, selectTodos } from "../../redux/features/todosSlice";

export default function ToolbarSelectBox() {
  const todos = useSelector(selectTodos);
  let isAllSelected =
    todos.length > 0 ? todos.every((todo) => todo.isSelected) : false;
  const d = useDispatch();

  const selectAllTodos = (e: React.ChangeEvent<HTMLInputElement>) => {
    selectAll_(e.target.checked);
  };

  const selectAll_ = (isSelectAll: boolean) => {
    d(selectAll(isSelectAll));
  };

  useKeyboardShortcut(() => selectAll_(true), 65, "Ctrl");
  useKeyboardShortcut(() => selectAll_(false), 27);

  return <Checkbox isChecked={isAllSelected} onChange={selectAllTodos} />;
}
