import Categories from "./Categories";
import CategoryCreator from "./category-creation/CategoryCreator";

export default function CategoriesContainer() {
  return (
    <>
      <CategoryCreator />
      <Categories />
    </>
  );
}
