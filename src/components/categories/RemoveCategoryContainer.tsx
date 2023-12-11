import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "redux/features/categorySlice";
import { update } from "redux/features/sidebarIsActiveArraySlice";
import { addCategorySome, selectTodos } from "redux/features/todosSlice";
import Category from "utils/interfaces/common/Category";
import CategoryControl from "./CategoryControl";
import labels from "data/typescript/uiLabels";
import useLanguage from "hooks/useLanguage";
import useAlert from "hooks/useAlert";

interface RemoveCategoryContainerProps {
  category: Category;
}

export default function RemoveCategoryContainer({
  category,
}: RemoveCategoryContainerProps) {
  const todos = useSelector(selectTodos);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { open, setTitle, setDescription, setOnOk, close } = useAlert();
  const d = useDispatch();

  const removeCategoryAlert = () => {
    open();
    setTitle(labels[language.code].removeCategory);
    setDescription(labels[language.code].sureRemoveCategory);
    setOnOk(remove_);
  };

  const remove_ = () => {
    removeCategory();
    unlinkCategoryFromRelatedTodos();
    updateActiveSidebarButton();
  };

  const removeCategory = () => {
    d(remove(category.id!));
    close();
  };

  const updateActiveSidebarButton = () => {
    update(0);
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
