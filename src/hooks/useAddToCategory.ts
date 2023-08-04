import { useDispatch, useSelector } from "react-redux";
import { open, openWithSelectedId } from "redux/features/categorySelectorSlice";
import { selectTodos } from "redux/features/todosSlice";

const useAddToCategory = () => {
  const todos = useSelector(selectTodos);
  let d = useDispatch();

  const addToCategory = (id: number) => {
    const todo = todos.find((todo) => todo.id === id)!;
    let ids = {
      categoryId: todo.categoryId!,
      itemId: id,
    };
    if (todo.categoryId) {
      d(openWithSelectedId(ids));
    } else d(open(id));
  };

  return addToCategory;
};

export default useAddToCategory;
