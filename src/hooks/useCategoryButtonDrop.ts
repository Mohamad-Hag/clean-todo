import pathnames from "data/json/pathnames.json";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addCategorySome, edit, selectTodos } from "redux/features/todosSlice";

const useCategoryButtonDrop = (categoryId: number) => {
  const d = useDispatch();
  const todos = useSelector(selectTodos);
  const selections = todos.filter((todo) => todo.isSelected);
  const isSelectMode = selections.length > 0;
  const { pathname } = useLocation();

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
    if (pathname === pathnames.trashPathName) return; // Prevent changing category when the item is from the trash

    if (Array.isArray(ids)) processArrayDrop(ids);
    else processSingleDrop(ids);
  };

  return drop;
};

export default useCategoryButtonDrop;
