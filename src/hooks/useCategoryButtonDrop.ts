import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCategorySome, edit, selectTodos } from "redux/features/todosSlice";

const useCategoryButtonDrop = (categoryId: number) => {
  const d = useDispatch();
  const todos = useSelector(selectTodos);
  const selections = todos.filter((todo) => todo.isSelected);
  const isSelectMode = selections.length > 0;

  const processSingleDrop = (id: number) => {
    d(
      edit({
        id: id,
        editable: {
          categoryId: categoryId,
        },
      })
    );
  };

  const processArrayDrop = (ids: number[]) => {
    d(addCategorySome({ itemIds: ids, categoryId: categoryId }));
  };

  const drop = (id: string) => {
    let ids: number | number[] = !isSelectMode ? parseInt(id) : JSON.parse(id);

    if (Array.isArray(ids)) processArrayDrop(ids);
    else processSingleDrop(ids);
  };

  return drop;
};

export default useCategoryButtonDrop;
