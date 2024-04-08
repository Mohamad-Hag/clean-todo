import { useDispatch, useSelector } from "react-redux";
import { open, openWithSelectedId } from "redux/features/folderSelectorSlice";
import { selectTodos } from "redux/features/todosSlice";

const useAddToFolder = () => {
  const todos = useSelector(selectTodos);
  let d = useDispatch();

  const addToFolder = (id: number) => {
    const todo = todos.find((todo) => todo.id === id)!;
    let ids = {
      folderId: todo.folderId!,
      itemId: id,
    };
    if (todo.folderId) {
      d(openWithSelectedId(ids));
    } else d(open(id));
  };

  return addToFolder;
};

export default useAddToFolder;
