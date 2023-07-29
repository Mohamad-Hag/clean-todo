import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  close,
  open,
  setDescription,
  setOnOk,
  setTitle,
} from "../../redux/features/alertSlice";
import { remove } from "../../redux/features/categorySlice";
import { update } from "../../redux/features/sidebarIsActiveArraySlice";
import { addCategorySome, selectTodos } from "../../redux/features/todosSlice";
import Category from "../../utils/interfaces/common/Category";
import CategoryControl from "./CategoryControl";
import labels from "../../data/json/ui-labels.json";

interface RemoveCategoryContainerProps {
  category: Category;
}

export default function RemoveCategoryContainer({
  category,
}: RemoveCategoryContainerProps) {
  const todos = useSelector(selectTodos);
  const navigate = useNavigate();
  const d = useDispatch();

  const removeCategoryAlert = () => {
    d(open());
    d(setTitle(labels.removeCategory));
    d(setDescription(labels.sureRemoveCategory));
    d(setOnOk(remove_));
  };

  const remove_ = () => {
    removeCategory();
    unlinkCategoryFromRelatedTodos();
    updateActiveSidebarButton();
  };

  const removeCategory = () => {
    d(remove(category.id!));
    d(close());
  };

  const updateActiveSidebarButton = () => {
    d(update(0));
    navigate("/");
  };

  const unlinkCategoryFromRelatedTodos = () => {
    let itemIds = todos
      .filter((todo) => todo.categoryId === category.id!)
      .map((todo) => todo.id);
    d(
      addCategorySome({
        categoryId: undefined,
        itemIds: itemIds,
      })
    );
  };

  return <CategoryControl type="remove" onClick={removeCategoryAlert} />;
}
