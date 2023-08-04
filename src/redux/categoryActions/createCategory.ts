import Category from "utils/interfaces/common/Category";

function createCategory(categories: Category[], category: Category) {
  // Generating ID
  let maxId = [...categories].sort((a, b) => a.id! - b.id!)[
    categories.length - 1
  ];
  category.id = category.id ? category.id : maxId ? maxId.id! + 1 : 1;
  // Add the new category to the beginning of categories list.
  categories.push(category);
  return categories;
}

export default createCategory;
