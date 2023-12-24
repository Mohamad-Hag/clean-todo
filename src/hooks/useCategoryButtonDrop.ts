import { useToast } from "@chakra-ui/react";
import pathnames from "data/json/pathnames.json";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addCategorySome, edit, selectTodos } from "redux/features/todosSlice";
import useLanguage from "./useLanguage";
import labels from "data/typescript/uiLabels";

const useCategoryButtonDrop = (categoryId: number) => {
  const d = useDispatch();
  const { language } = useLanguage();
  const todos = useSelector(selectTodos);
  const selections = todos.filter((todo) => todo.isSelected);
  const isSelectMode = selections.length > 0;
  const { pathname } = useLocation();
  const toast = useToast();

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
    let itemsCount = 0;
    if (pathname === pathnames.trashPathName) return; // Prevent changing category when the item is from the trash

    if (Array.isArray(ids)) {
      itemsCount = ids.length;
      processArrayDrop(ids);
    } else {
      itemsCount = 1;
      processSingleDrop(ids);
    }

    toast({
      duration: 3000,
      variant: "subtle",
      title: `${itemsCount} ${labels[language.code].itemsHasMovedTo} "category-${categoryId}".`,
    });
  };

  return drop;
};

export default useCategoryButtonDrop;
