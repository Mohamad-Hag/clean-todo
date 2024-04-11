import { Checkbox } from "@chakra-ui/react";
import keyShortcutExceptionId from "data/typescript/keyShortcutExceptionId";
import useShiftClickSelect from "hooks/useShiftClickSelect";
import { useDispatch, useSelector } from "react-redux";
import { edit, selectTodos } from "redux/features/todosSlice";

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
      id={keyShortcutExceptionId}
      isChecked={isSelected}
      onChange={select}
      onMouseUp={checkBoxClicked}
    />
  );
}
