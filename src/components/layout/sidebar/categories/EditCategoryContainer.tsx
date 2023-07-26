import { useDispatch } from "react-redux";
import { openAsEdit } from "../../../../redux/features/categoryFormSlice";
import Category from "../../../../utils/interfaces/common/Category";
import SidebarCategoryControl from "./SidebarCategoryControl";

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

  return <SidebarCategoryControl type="edit" onClick={edit} />;
}
