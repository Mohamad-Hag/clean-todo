import { useDispatch } from "react-redux";
import SidebarCategoryControl from "./SidebarCategoryControl";
import {
  close,
  open,
  setDescription,
  setOnOk,
  setTitle,
} from "../../../../redux/features/alertSlice";
import { remove } from "../../../../redux/features/categorySlice";
import Category from "../../../../utils/interfaces/common/Category";

interface RemoveCategoryContainerProps {
  category: Category;
}

export default function RemoveCategoryContainer({
  category,
}: RemoveCategoryContainerProps) {
  const d = useDispatch();

  const removeCategoryAlert = () => {
    d(open());
    d(setTitle("Remove Category"));
    d(
      setDescription(
        `Are you sure you want to remove /${category.title}/ category?`
      )
    );
    d(setOnOk(removeCategory));
  };

  const removeCategory = () => {
    d(remove(category.id!));
    d(close());
  };

  return <SidebarCategoryControl type="remove" onClick={removeCategoryAlert} />;
}
