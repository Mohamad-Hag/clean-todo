import { useDispatch } from "react-redux";
import { openAsEdit } from "redux/features/categoryFormSlice";
import Category from "utils/interfaces/common/Category";
import CategoryControl from "./CategoryControl";

interface EditCategoryContainerProps {
  category: Category;
}

export default function EditCategoryContainer({
  category,
}: EditCategoryContainerProps) {
  const d = useDispatch();

  const edit = () => {
    d(
      openAsEdit({
        id: category.id,
        title: category.title,
        icon: category.icon,
      })
    );
  };

  return <CategoryControl type="edit" onClick={edit} />;
}
