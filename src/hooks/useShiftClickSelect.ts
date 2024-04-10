import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAll, selectTodos } from "redux/features/todosSlice";

const useShiftClickSelect = (todoId: number) => {
  const todos = useSelector(selectTodos);
  const [isShiftClickMode, setIsShiftClickMode] = useState<boolean>(false);
  const d = useDispatch();

  const calculateIdRange = (): number[] => {
    let upcomingIndex = todos.findIndex((todo) => todo.id === todoId);

    let selectedTodos = todos.filter((todo) => todo.isSelected);

    let firstSelectedId =
      selectedTodos.length === 0 ? todoId : selectedTodos[0].id;
    let lastSelectedId =
      selectedTodos.length === 0
        ? todoId
        : selectedTodos[selectedTodos.length - 1].id;

    let firstSelectedIndex = todos.findIndex(
      (todo) => todo.id === firstSelectedId
    );
    let lastSelectedIndex = todos.findIndex(
      (todo) => todo.id === lastSelectedId
    );

    let selectedIndex =
      upcomingIndex <= firstSelectedIndex
        ? firstSelectedIndex
        : lastSelectedIndex;

    let selectedId = todos[selectedIndex].id;

    let currentIndex = todos.findIndex((todo) => todo.id === selectedId);

    let headSelectedIndex = Math.min(currentIndex, upcomingIndex);
    let tailSelectedIndex = Math.max(currentIndex, upcomingIndex);
    let todosRange = todos.slice(headSelectedIndex, tailSelectedIndex + 1);
    let idRange = todosRange.map((todo) => todo.id);

    return idRange;
  };

  const checkBoxClicked = (e: React.MouseEvent<HTMLInputElement>) => {
    let idRange = calculateIdRange();

    if (e.shiftKey) {
      setIsShiftClickMode(true);
      d(selectAll({ isSelectAll: false }));
      d(
        selectAll({
          isSelectAll: true,
          selectConditionCallback: (todo) => idRange.includes(todo.id),
        })
      );
    } else setIsShiftClickMode(false);
  };

  return {
    isShiftClickMode,
    checkBoxClicked,
  };
};

export default useShiftClickSelect;
