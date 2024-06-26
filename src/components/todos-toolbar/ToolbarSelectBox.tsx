import { Checkbox } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import useIsFilter from "hooks/useIsFilter";
import useKeyboardShortcut from "hooks/useKeyboardShortcut";
import { selectAll } from "redux/features/todosSlice";
import { ToolbarProps } from "./Toolbar";
import isEmpty from "utils/isEmpty";
import keyShortcutExceptionId from "data/typescript/keyShortcutExceptionId";

export default function ToolbarSelectBox({
  isFilterMode,
  todos,
}: ToolbarProps) {
  const isFilter = useIsFilter();
  let isAllSelected =
    todos.length > 0 ? todos.every((todo) => todo.isSelected) : false;
  const d = useDispatch();
  let isSelectBoxDisabled = isFilterMode || isEmpty(todos);

  const selectAllTodos = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFilterMode) return;
    selectAll_(e.target.checked);
  };

  const selectAll_ = (isSelectAll: boolean) => {
    d(
      selectAll({ isSelectAll: isSelectAll, selectConditionCallback: isFilter })
    );
  };

  useKeyboardShortcut(() => selectAll_(true), 65, "Ctrl");
  useKeyboardShortcut(() => selectAll_(false), 27);

  return (
    <Checkbox
      id={keyShortcutExceptionId}
      isChecked={isAllSelected}
      onChange={selectAllTodos}
      disabled={isSelectBoxDisabled}
    />
  );
}
