import { Checkbox } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { edit, selectTodos } from "redux/features/todosSlice";

interface TodoItemSelectBoxProps {
  id: number;
}

export default function TodoItemSelectBox({ id }: TodoItemSelectBoxProps) {
  const todos = useSelector(selectTodos);
  let isSelected: boolean = !!todos.find((todo) => todo.id === id)?.isSelected;
  const d = useDispatch();

  const select = (e: React.ChangeEvent<HTMLInputElement>) => {
    d(edit({ id: id, editable: { isSelected: e.target.checked } }));
  };

  return <Checkbox isChecked={isSelected} onChange={select} />;
}
