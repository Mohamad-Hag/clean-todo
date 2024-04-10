import { Checkbox } from "@chakra-ui/react";
import useShiftClickSelect from "hooks/useShiftClickSelect";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { edit, selectAll, selectTodos } from "redux/features/todosSlice";

interface TodoItemSelectBoxProps {
  id: number;
}

export default function TodoItemSelectBox({ id }: TodoItemSelectBoxProps) {
  const todos = useSelector(selectTodos);
  let isSelected: boolean = !!todos.find((todo) => todo.id === id)?.isSelected;
  const { isShiftClickMode, checkBoxClicked } = useShiftClickSelect(id);
  const d = useDispatch();

  const select = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isShiftClickMode) return;
    d(edit({ id: id, editable: { isSelected: e.target.checked } }));
  };

  return (
    <Checkbox
      isChecked={isSelected}
      onChange={select}
      onMouseUp={checkBoxClicked}
    />
  );
}
