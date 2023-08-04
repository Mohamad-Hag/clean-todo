import Category from "utils/interfaces/common/Category";
import { EditData } from "../features/categorySlice";

function editCategory(categories: Category[], editData: EditData) {
  let payload = editData;
  let todoIndex = categories.findIndex((x) => x.id === payload.id);
  let category = categories[todoIndex];
  let title = payload.editable.title;
  let icon = payload.editable.icon;
  category.title = title ? title : category.title;
  category.icon = icon === undefined ? category.icon : icon;
  return categories;
}

export default editCategory;
