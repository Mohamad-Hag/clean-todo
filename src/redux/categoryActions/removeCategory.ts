import Category from "utils/interfaces/common/Category";

function removeCategory(categories: Category[], id: number) {
  categories = categories.filter((category) => category.id !== id);
  return categories;
}

export default removeCategory;
